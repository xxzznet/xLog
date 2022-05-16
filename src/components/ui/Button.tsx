import React from "react"
import clsx from "clsx"

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    isBlock?: boolean
    isDisabled?: boolean
    variant?: "primary" | "secondary" | "text"
    variantColor?: "green" | "red" | "gray"
    size?: "sm"
    rounded?: "full" | "lg"
  }
> = ({
  type,
  children,
  className,
  isLoading,
  isDisabled,
  isBlock,
  variant,
  variantColor,
  size,
  rounded,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type || "button"}
      disabled={isDisabled}
      className={clsx(
        className,
        "button",
        isLoading && "is-loading",
        isBlock && `is-block`,
        variantColor && `is-${variantColor}`,
        isDisabled && `is-disabled`,
        size && `is-${size}`,
        `is-${variant || "primary"}`,
        rounded === "full" ? "rounded-full" : "rounded-lg"
      )}
    >
      {children}
    </button>
  )
}