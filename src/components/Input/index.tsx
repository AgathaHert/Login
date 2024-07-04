import { InputContainer, ErrorMessage } from "./style";
import { InputProps } from "./types";
import { Controller } from "react-hook-form";
import React from "react";

const InputComponent = ({
  control,
  name,
  errorMessage,
  ...rest
}: InputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default InputComponent;
