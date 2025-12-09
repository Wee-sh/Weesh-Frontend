import React, { createContext, useContext, useCallback, useState } from "react";
import ToastContainer from "./ToastContainer";

export interface ToastOptions {
  message: string | string[];
  duration?: number;
  persist?: boolean;
  carouselSpeed?: number; // px/frame
  top?: string;
}

export interface ToastItem extends ToastOptions {
  id: number;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  hideToast: (id: number) => void;
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

  const showToast = useCallback((options: ToastOptions) => {
    const id = Date.now();
    const { persist = false, duration = 2000 } = options;

    setToasts((prev) => [...prev, { ...options, id }]);

    if (!persist) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const hideToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toasts.map((toast) => (
        <ToastContainer key={toast.id} toast={toast} />
      ))}
    </ToastContext.Provider>
  );
};
