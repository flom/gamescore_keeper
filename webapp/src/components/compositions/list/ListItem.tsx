import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";
import { listItemClass } from "@/components/compositions/list/shared";
import clsx from "clsx";

type ListItemProps<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  component?: C;
  children: ReactNode;
  right?: ReactNode;
  top?: ReactNode;
};

function ListItem<C extends ElementType = "span">({
  component = undefined,
  children,
  right = undefined,
  top = undefined,
  ...args
}: ListItemProps<C>): ReactElement {
  const classes = clsx(listItemClass, component && "hover:bg-secondary");
  const Comp = component ?? "span";

  return (
    <Comp {...args} className={classes}>
      <div className="flex flex-col">
        {top ? <span className="text-sm text-gray-400">{top}</span> : undefined}
        {children}
      </div>
      {right}
    </Comp>
  );
}

export default ListItem;
