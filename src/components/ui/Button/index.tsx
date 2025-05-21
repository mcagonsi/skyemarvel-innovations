import { ButtonHTMLAttributes } from "react";
import { buttonVariants, ButtonVariant } from "./variants";

// Define the Button component's props
// This interface extends the standard button attributes and adds custom props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    isFullWidth?: boolean;
}

const Button = ({
    children,
    variant = "primary_filled",
    isFullWidth = false,
    className,
    ...props
}: ButtonProps) => {
    const buttonClass = buttonVariants[variant] + (isFullWidth ? " w-full" : "") + (className ? ` ${className}` : "");

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;