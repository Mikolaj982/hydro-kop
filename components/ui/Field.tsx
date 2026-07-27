import { forwardRef, type InputHTMLAttributes } from "react";

type FieldProps = {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    className?: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field = forwardRef<HTMLInputElement, FieldProps>(
    ({ label, name, type = "text", required = false, className = "", error, ...rest }, ref) => (
        <div className={className}>
            <label htmlFor={name} className="text-xs uppercase tracking-wider text-white/50">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                ref={ref}
                {...rest}
                className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-yellow focus:outline-none py-3 text-white"
            />
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>
    ),
);
Field.displayName = "Field";