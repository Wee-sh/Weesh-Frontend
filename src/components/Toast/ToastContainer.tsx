// components/Toast/ToastContainer.tsx
import React, { useEffect, useState } from "react";
import type { ToastOptions } from "./ToastProvider";

interface Props {
  toast: ToastOptions | null;
}

const ToastContainer: React.FC<Props> = ({ toast }) => {
  const [index, setIndex] = useState(0);

  const isCarousel = toast && Array.isArray(toast.message);

  // 캐러셀 동작
  useEffect(() => {
    if (!toast) return;

    if (!isCarousel) {
      setIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % toast.message.length);
    }, toast.carouselSpeed || 2000);

    return () => clearInterval(interval);
  }, [toast, isCarousel]);

  if (!toast) return null;

  const content = isCarousel ? toast.message[index] : toast.message;

  const animationClass = toast.persist
    ? "" // 지속형이면 애니메이션 제거 (fade-out 방지)
    : "animate-fadeInOut";

  return (
    <div
      className={`fixed top-[138px] left-1/2 -translate-x-1/2 opacity-80 bg-[#7F7F7F] text-white px-4 py-3 rounded-xl text-base transition-all duration-300 z-50 ${animationClass}`}
    >
      {content}
    </div>
  );
};

export default ToastContainer;
