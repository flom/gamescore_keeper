import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { listItemClass } from "@/components/compositions/list/shared";

type ListLinkItemProps = {
  to: string;
  label: string;
};

function ListLinkItem({ to, label }: ListLinkItemProps): ReactElement {
  const classes = clsx(listItemClass, "cursor-pointer hover:bg-secondary");

  return (
    <Link to={to} className={classes}>
      <span className="text-2xl">{label}</span>
    </Link>
  );
}

export default ListLinkItem;
