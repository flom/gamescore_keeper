import type { ReactElement, ReactNode } from "react";

export type ListProps = {
  children: ReactNode;
};

function List({ children }: ListProps): ReactElement {
  return <div className="flex w-full flex-col items-stretch">{children}</div>;
}

export default List;
