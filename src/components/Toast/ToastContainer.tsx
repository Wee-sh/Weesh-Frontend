import React, { useEffect, useRef, useState } from "react";
import type { ToastItem } from "./ToastProvider";

interface Props {
  toast: ToastItem | null;
}

const ToastContainer: React.FC<Props> = ({ toast }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!toast || !Array.isArray(toast.message)) return;

    const speed = toast.carouselSpeed || 1;
    let animationFrame: number;

    const animate = () => {
      if (!contentRef.current || !containerRef.current) return;

      const singleWidth = contentRef.current.offsetWidth / 2;
      setOffset((prev) => {
        const newOffset = prev - speed;
        return newOffset < -singleWidth ? 0 : newOffset;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    setOffset(0);
    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [toast]);

  if (!toast) return null;

  const top = toast.top || "88px";
  const animationClass = toast.persist ? "" : "animate-fadeInOut";

  return (
    <div
      ref={containerRef}
      style={{ top }}
      className={`max-w-[329px] w-fit fixed left-1/2 -translate-x-1/2 overflow-hidden opacity-80 bg-[#7F7F7F] text-white px-4 py-3 rounded-xl text-base z-50 ${animationClass}`}
    >
      {Array.isArray(toast.message) ? (
        <div
          ref={contentRef}
          style={{ transform: `translateX(${offset}px)` }}
          className="whitespace-nowrap inline-block"
        >
          {[...toast.message, ...toast.message].map(
            (msg: string, idx: number) => (
              <span key={`${toast.id}-${idx}`} className="mr-8">
                {msg}
              </span>
            )
          )}
        </div>
      ) : (
        <div className="whitespace-nowrap break-keep">{toast.message}</div>
      )}
    </div>
  );
};

export default ToastContainer;
