import type { ReactElement } from "react";
import type { ListItemProps } from "@/components/compositions/list/ListItem";

export type ListProps = {
  children: ReactElement<ListItemProps>[];
};

function List({ children }: ListProps): ReactElement {
  return <div className="flex w-full flex-col items-stretch">{children}</div>;
}

export default List;
