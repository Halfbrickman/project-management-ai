import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          `
          flex
          min-h-[100px]
          w-full
          rounded-lg
          border
          border-slate-300
          bg-white
          px-3
          py-2
          text-sm
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-slate-500
          focus:ring-2
          focus:ring-slate-200
          disabled:cursor-not-allowed
          disabled:opacity-50
          `,
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };