import type { ReactElement } from "react";

type NavbarProperties = {
  title?: string;
  hasBackButton?: boolean;
  hasAddButton?: boolean;
};

function Navbar({
  title = "",
  hasBackButton = false,
  hasAddButton = false,
}: NavbarProperties): ReactElement {
  return (
    <div className="grid h-14 grid-cols-3 bg-cyan-500 pl-2 pr-2">
      <div className="self-center justify-self-start">
        {hasBackButton ? <span>LEFT</span> : undefined}
      </div>
      <div className="self-center justify-self-center text-2xl">{title}</div>
      <div className="self-center justify-self-end">
        {hasAddButton ? <span>RIGHT</span> : undefined}
      </div>
    </div>
  );
}

export default Navbar;
