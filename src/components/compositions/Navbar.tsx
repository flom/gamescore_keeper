import type { ReactElement } from "react";
import IconLink from "../basics/IconLink";

type NavbarProperties = {
  title?: string;
  addButtonTo?: string;
  backButtonTo?: string;
};

function Navbar({
  title = "",
  addButtonTo = undefined,
  backButtonTo = undefined,
}: NavbarProperties): ReactElement {
  return (
    <div className="grid h-14 grid-cols-3 bg-cyan-500 pl-2 pr-2">
      <div className="self-center justify-self-start">
        {backButtonTo ? (
          <IconLink to={backButtonTo}>
            <i className="fa-solid fa-chevron-left" />
          </IconLink>
        ) : undefined}
      </div>
      <div className="self-center justify-self-center text-2xl font-semibold">
        {title}
      </div>
      <div className="self-center justify-self-end">
        {addButtonTo ? (
          <IconLink to={addButtonTo}>
            <i className="fa-solid fa-plus fa-xl" />
          </IconLink>
        ) : undefined}
      </div>
    </div>
  );
}

export default Navbar;
