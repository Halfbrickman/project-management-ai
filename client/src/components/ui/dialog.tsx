import { useEffect } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export function Dialog({
  open,
  onOpenChange,
  children,
}: DialogProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handler);
    }

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {children}
    </div>
  );
}

interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export function DialogContent({
  children,
  className = "",
}: DialogContentProps) {
  return (
    <div
      className={`
        relative
        z-10
        w-full
        max-w-xl
        rounded-xl
        bg-white
        p-6
        shadow-xl
        ${className}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export function DialogHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-start justify-between">
      {children}
    </div>
  );
}

export function DialogTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h2 className="text-xl font-semibold">
      {children}
    </h2>
  );
}

interface DialogCloseProps {
  onClick: () => void;
}

export function DialogClose({
  onClick,
}: DialogCloseProps) {
  return (
    <button
      onClick={onClick}
      className="
        absolute
        right-4
        top-4
        rounded-md
        p-1
        transition
        hover:bg-slate-100
      "
    >
      <X size={18} />
    </button>
  );
}