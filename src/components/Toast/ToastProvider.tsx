// components/Toast/ToastProvider.tsx
import React, { createContext, useContext, useCallback, useState } from "react";
import ToastContainer from "./ToastContainer";

export interface ToastOptions {
  message: string | string[];
  duration?: number;
  persist?: boolean;
  carouselSpeed?: number;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  hideToast: () => void;
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
  const [toast, setToast] = useState<ToastOptions | null>(null);

  const showToast = useCallback((options: ToastOptions) => {
    const { persist = false, duration = 2000 } = options;

    setToast(options);

    // 지속형(persist)일 때는 자동 제거 안 함
    if (!persist) {
      setTimeout(() => {
        setToast(null);
      }, duration);
    }
  }, []);

  const hideToast = () => setToast(null);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastContainer toast={toast} />
    </ToastContext.Provider>
  );
};
