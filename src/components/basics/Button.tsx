import type { ReactElement } from "react";
import { useRef } from "react";
import { type AriaButtonProps, useButton } from "react-aria";
import clsx from "clsx";

type ButtonProperties = AriaButtonProps & {
  size?: "large" | "normal";
  variant?: "destruction" | "primary";
};

function Button(properties: ButtonProperties): ReactElement {
  const reference = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(properties, reference);
  const { children, variant, size, isDisabled } = properties;

  const variantType = variant ?? "primary";
  const styles: string = clsx(
    "disabled:bg-gray-300 disabled:text-gray-500 drop-shadow-lg rounded text-center w-full",
    size === "large" && "h-16 w-16",
    size !== "large" && "h-12 w-12",
    variantType === "primary" && "bg-cyan-900 text-gray-50",
    variantType === "destruction" && "bg-red-300 text-red-800",
  );

  return (
    <button
      type="button"
      {...buttonProps}
      ref={reference}
      className={styles}
      disabled={!!isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
