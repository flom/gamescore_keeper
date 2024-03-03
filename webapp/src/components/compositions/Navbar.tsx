import type { ReactElement } from "react";
import IconLink from "../basics/IconLink";

type NavbarProperties = {
  title?: string;
  addButtonTo?: string;
  backButtonTo?: string;
  editButtonTo?: string;
};

function Navbar({
  title = "",
  addButtonTo = undefined,
  backButtonTo = undefined,
  editButtonTo = undefined,
}: NavbarProperties): ReactElement {
  return (
    <div className="grid h-14 grid-cols-[1fr_2fr_1fr] bg-primary/70 pl-2 pr-2 text-primary-foreground">
      <div className="self-center justify-self-start">
        {backButtonTo ? (
          <IconLink to={backButtonTo} data-testid="NavbarBackButton">
            <i className="fa-solid fa-chevron-left" />
          </IconLink>
        ) : undefined}
      </div>
      <div className="m-auto justify-self-center align-middle text-2xl font-semibold">
        <div className="flex flex-row gap-2 align-middle">
          <div className="m-auto">{title}</div>
          {editButtonTo ? (
            <IconLink
              to={editButtonTo}
              data-testid="NavbarBackButton"
              variant="link"
            >
              <i className="fa-solid fa-pen-to-square" />
            </IconLink>
          ) : undefined}
        </div>
      </div>
      <div className="self-center justify-self-end">
        {addButtonTo ? (
          <IconLink to={addButtonTo} data-testid="NavbarAddButton">
            <i className="fa-solid fa-plus fa-xl" />
          </IconLink>
        ) : undefined}
      </div>
    </div>
  );
}

export default Navbar;
