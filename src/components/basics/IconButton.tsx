import { type AriaButtonProps, useButton } from "react-aria";
import { type ReactElement, useRef } from "react";
import clsx from "clsx";

type IconButtonProperties = AriaButtonProps & {
  size?: "large" | "normal";
  variant?: "destruction" | "primary";
};

function IconButton(properties: IconButtonProperties): ReactElement {
  const reference = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(properties, reference);
  const { children, variant, size, isDisabled } = properties;

  const variantType = variant ?? "primary";
  const styles: string = clsx(
    "disabled:bg-gray-300 disabled:text-gray-500 drop-shadow-lg rounded-full -top-8 text-center",
    size === "large" && "h-16 w-16",
    size !== "large" && "h-12 w-12",
    variantType === "primary" && "bg-blue-600 text-blue-300",
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

export default IconButton;
