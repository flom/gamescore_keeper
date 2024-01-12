import type { ReactElement, ReactNode } from "react";

type ListTableColumnProps = {
  children: ReactNode;
};

function ListTableColumn({ children }: ListTableColumnProps): ReactElement {
  return (
    <div className="flex w-16 items-center justify-center border-x-2 border-secondary">
      {children}
    </div>
  );
}

export default ListTableColumn;
