import clsx from "clsx";
import { CrossIcon } from "../game/icons/CrossIcon";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  width: "md" | "full";
}

export function UiModal({
  className,
  children,
  isOpen = false,
  onClose,
  width,
}: Props) {
  if (!isOpen) return null;

  function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
    if ((e.target as Element).closest("[data-id=modal]")) return;
    onClose();
  }

  const modal = (
    <div
      className="fixed inset-0 bg-black/50 pt-36 overflow-y-auto z-[1]"
      onClick={handleClick}
    >
      <div
        data-id="modal"
        className={clsx(
          className,
          "flex flex-col bg-white rounded-3xl mx-auto relative min-h-52 p-7",
          {
            md: "max-w-3xl w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button className="absolute top-6 right-6" onClick={onClose}>
          <CrossIcon className="w-8 h-8 hover:rotate-90 transition-transform" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals")!);
}

interface UiModalPartProps {
  className?: string;
  children: ReactNode;
}

UiModal.Header = function UiModalHeader({
  className,
  children,
}: UiModalPartProps) {
  return (
    <div className={clsx(className, "mb-4 font-semibold text-5xl")}>
      {children}
    </div>
  );
};

UiModal.Body = function UiModalBody({ className, children }: UiModalPartProps) {
  return <div className={clsx(className, "mb-7")}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({
  className,
  children,
}: UiModalPartProps) {
  return (
    <div
      className={clsx(
        className,
        "mt-auto flex items-center justify-center gap-6",
      )}
    >
      {children}
    </div>
  );
};
