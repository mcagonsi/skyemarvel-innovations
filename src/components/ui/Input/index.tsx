import { InputHTMLAttributes } from "react";
import { inputVariants, InputVariant } from "./variants";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    error?: string;
    variant?: InputVariant;

}

const InputField = ({
    label,
    error,
    variant = "default",
    className,
    placeholder,
    ...props
}: InputProps) => {
    const inputClass = inputVariants[variant] + (className ? ` ${className}` : "");
    return (
        <div className='flex flex-col gap-1'>
            {label && (<label className='text-sm text-gray-700'>{label}</label>)}
            <input
                className={`
                    ${error ? "border-red-500" : " "}
                    ${className} ${inputClass}
                    `}
                {...props}
                placeholder={placeholder} />
            {error && (<span className='text-red-500 text-sm'>{error}</span>)}
        </div>
    );
}

export default InputField;