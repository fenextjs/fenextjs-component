import React from "react";
import { InputText, InputTextProps } from "../../Text";

/**
 * Props for InputCardCCV component.
 */
export interface InputCardCCVProps
    extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"> {}

export const InputCardCCV = ({
    placeholder = "XXX",
    ...props
}: InputCardCCVProps) => {
    return (
        <>
            <InputText
                {...props}
                placeholder={placeholder}
                maxLength={4}
                regExpReplace=""
                regExp={/[^1-9]/g}
                type="number"
            />
        </>
    );
};
