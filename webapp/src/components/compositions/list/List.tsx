import type { ReactElement } from "react";

export type ListProps = {
  children: ReactElement | ReactElement[];
};

function List({ children }: ListProps): ReactElement {
  return <div className="flex w-full flex-col items-stretch">{children}</div>;
}

export default List;
