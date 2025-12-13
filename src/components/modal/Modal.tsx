import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative">
        <div className="z-10">{children}</div>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute bottom-[-48px] right-0 w-9 h-9 text-2xl leading-3 text-white bg-[#452F11] rounded-full flex items-center justify-center"
          >
            X
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
