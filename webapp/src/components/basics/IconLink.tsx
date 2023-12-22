import type { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type IconLinkProperties = {
  to: string;
  children: ReactNode;
};

function IconLink({ to, children }: IconLinkProperties): ReactElement {
  return (
    <Link
      to={to}
      className="block w-12 rounded-full bg-cyan-900 text-center leading-[3rem] text-gray-50 drop-shadow-lg"
    >
      {children}
    </Link>
  );
}

export default IconLink;
