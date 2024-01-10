import type { ReactElement } from "react";
import { clsx } from "clsx";
import { listItemClass } from "@/components/compositions/list/shared";

export type ListItemProps = {
  label: string;
};

function ListItem({ label }: ListItemProps): ReactElement {
  const classes = clsx(listItemClass);

  return (
    <div className={classes}>
      <span className="text-2xl">{label}</span>
    </div>
  );
}

export default ListItem;
