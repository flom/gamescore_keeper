import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export type ListItemProps = {
  to: string;
  label: string;
};

function ListItem({ to, label }: ListItemProps): ReactElement {
  return (
    <Link
      to={to}
      className="border-1 flex h-14 cursor-pointer items-center border border-secondary px-4 hover:bg-secondary"
    >
      <span className="text-2xl">{label}</span>
    </Link>
  );
}

export default ListItem;
