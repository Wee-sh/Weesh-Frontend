import React, { useEffect, useRef, useState } from "react";
import type { ToastOptions } from "./ToastProvider";

interface Props {
  toast: ToastOptions | null;
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

      const singleWidth = contentRef.current.offsetWidth / 2; // 메시지 한 세트 길이
      setOffset((prev) => {
        const newOffset = prev - speed;
        // 한 세트 길이만큼 왔으면 0으로 초기화 → 꼬리물기 효과
        return newOffset < -singleWidth ? 0 : newOffset;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    // 초기 offset 설정
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
          {/* 메시지 꼬리물기 효과: 두 번 렌더링 */}
          {[...toast.message, ...toast.message].map(
            (msg: string, idx: number) => (
              <span key={idx} className="mr-8">
                {msg}
              </span>
            )
          )}
        </div>
      ) : (
        <div>{toast.message}</div>
      )}
    </div>
  );
};

export default ToastContainer;
