import type { ReactElement, ReactNode } from "react";

type ContainerProperties = {
  children: ReactNode;
};

function Container({ children }: ContainerProperties): ReactElement {
  return <div className="container m-auto">{children}</div>;
}

export default Container;
