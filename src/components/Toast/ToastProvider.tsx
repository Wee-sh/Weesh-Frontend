import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import ToastContainer from "./ToastContainer";

export interface ToastOptions {
  message: string | string[];
  duration?: number;
  persist?: boolean;
  carouselSpeed?: number;
  top?: string;
  type?: "carousel" | "normal";
}

export interface ToastItem extends ToastOptions {
  id: number;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  hideToast: (id: number) => void;
  hideAllToasts: (type?: "carousel" | "normal") => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const location = useLocation();

  const showToast = useCallback((options: ToastOptions) => {
    const id = Date.now() + Math.random(); // 고유 id
    const { persist = false, duration = 2000 } = options;

    setToasts((prev) => [...prev, { ...options, id }]);

    if (!persist) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const hideToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const hideAllToasts = useCallback((type?: "carousel" | "normal") => {
    if (!type) {
      setToasts([]);
    } else {
      setToasts((prev) => prev.filter((t) => t.type !== type));
    }
  }, []);

  // 경로가 '/'가 아닐 때 캐러셀 자동 제거
  useEffect(() => {
    if (location.pathname !== "/") {
      hideAllToasts("carousel");
    }
  }, [location.pathname, hideAllToasts]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast, hideAllToasts }}>
      {children}
      {toasts.map((toast) => (
        <ToastContainer key={toast.id} toast={toast} />
      ))}
    </ToastContext.Provider>
  );
};
