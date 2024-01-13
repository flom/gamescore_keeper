import type { ReactElement, ReactNode } from "react";

type ListTableColumnProps = {
  children: ReactNode;
  additionalStyles?: Record<string, string>;
};

function ListTableColumn({
  children,
  additionalStyles = undefined,
}: ListTableColumnProps): ReactElement {
  return (
    <div
      className="flex w-8 items-center justify-center border-x-2 border-secondary text-base"
      style={additionalStyles}
    >
      {children}
    </div>
  );
}

export default ListTableColumn;
