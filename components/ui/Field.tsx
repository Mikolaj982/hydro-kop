export const Field = ({
    label,
    name,
    type = "text",
    required = false,
    className = ""
}
    :
    {
        label: string;
        name: string;
        type?: string;
        required?: boolean;
        className?: string
    }
) => (
    <div className={className}>
        <label htmlFor={name} className="text-xs uppercase tracking-wider text-white/50">{label}</label>
        <input id={name} name={name} type={type} required={required}
            className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-yellow focus:outline-none py-3 text-white" />
    </div>
);
