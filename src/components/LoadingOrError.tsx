import type { ReactElement } from "react";

type Properties = {
  error?: Error;
};
function LoadingOrError({ error = undefined }: Properties): ReactElement {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl" data-testid="LoadingOrError">
        {error ? error.message : "Loading..."}
      </h1>
    </div>
  );
}

export default LoadingOrError;
