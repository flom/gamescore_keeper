import type { ReactElement } from "react";
import { type AriaTextFieldProps, useTextField } from "react-aria";
import { useId, useRef } from "react";

function TextField(properties: AriaTextFieldProps): ReactElement {
  const { label, description } = properties;
  const reference = useRef(null);
  const id: string = useId();
  const {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(properties, reference);

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={id} {...labelProps}>
        {label}
      </label>
      <input id={id} {...inputProps} ref={reference} />
      {description ? (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      ) : undefined}
      {isInvalid ? (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {validationErrors.join(" ")}
        </div>
      ) : undefined}
    </div>
  );
}

export default TextField;
