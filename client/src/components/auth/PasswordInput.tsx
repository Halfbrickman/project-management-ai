import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className = "", ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">

      <input
        ref={ref}
        type={showPassword ? "text" : "password"}
        className={`
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-3
          pr-12
          text-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          ${className}
        `}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-500
          transition
          hover:text-slate-700
        "
      >
        {showPassword ? (
          <EyeOff size={18} />
        ) : (
          <Eye size={18} />
        )}
      </button>

    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;