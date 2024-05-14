import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", children, className = "", ...rest }, ref) => {
    const variantClassName =
      variant === "primary" ? styles.primary : styles.secondary;
    const combinedClassName = `${styles.base} ${variantClassName} ${className}`;

    return (
      <button ref={ref} {...rest} className={combinedClassName}>
        {children}
      </button>
    );
  }
);

export default Button;
