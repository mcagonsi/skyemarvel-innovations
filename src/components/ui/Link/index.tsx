import { AnchorHTMLAttributes } from "react";
import { linkVariants, LinkVariant } from "./variants";
import NextLink from "next/link";

// Define the Link component's props
// This interface extends the standard anchor attributes and adds custom props
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: LinkVariant;
    href: string;
    isExternal?: boolean;
    className?: string;
}

const Link = ({
    href = './',
    children,
    variant = "primary_filled",
    isExternal = false,
    className,
    ...props
}: LinkProps) => {
    const linkClass = linkVariants[variant] + (className ? ` ${className}` : "");
    if (isExternal) {
        return (
            <a href={href} className={linkClass} target='_blank' rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }

    return (
        <NextLink href={href} className={linkClass} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;