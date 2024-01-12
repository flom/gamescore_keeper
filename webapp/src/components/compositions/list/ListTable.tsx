import type { ReactElement } from "react";

type ListTableProps = {
  children: ReactElement | ReactElement[];
};

function ListTable({ children }: ListTableProps): ReactElement {
  return (
    <div className="flex h-full flex-row items-stretch border-x-2 border-secondary">
      {children}
    </div>
  );
}

export default ListTable;
