import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type IconLinkProperties = {
  to: string;
  children: ReactNode;
};

function IconLink({ to, children, ...rest }: IconLinkProperties): ReactElement {
  return (
    <Link
      to={to}
      className="block w-12 rounded-full bg-primary text-center leading-[3rem] text-gray-50 drop-shadow-lg"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default IconLink;
