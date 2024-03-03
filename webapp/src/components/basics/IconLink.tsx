import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

type IconLinkProperties = {
  to: string;
  children: ReactNode;
  variant?: "link" | "primary" | "secondary";
};

function IconLink({
  to,
  children,
  variant = "primary",
  ...rest
}: IconLinkProperties): ReactElement {
  const classNames = clsx(
    "block w-12 rounded-full text-center leading-[3rem] drop-shadow-lg",
    variant === "primary" && "bg-primary text-primary-foreground",
    variant === "secondary" && "bg-secondary text-secondary-foreground",
    variant === "link" && "text-primary-foreground",
  );

  return (
    <Link to={to} className={classNames} {...rest}>
      {children}
    </Link>
  );
}

export default IconLink;
