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
};

function ListItem<C extends ElementType = "span">({
  component = undefined,
  children,
  right = undefined,
  ...args
}: ListItemProps<C>): ReactElement {
  const classes = clsx(listItemClass, component && "hover:bg-secondary");
  const Comp = component ?? "span";

  return (
    <Comp {...args} className={classes}>
      {children}
      {right}
    </Comp>
  );
}

export default ListItem;
