import React from "react";
import { InputText, InputTextProps } from "../../Text";

/**
 * Props for InputCardCCV component.
 */
export interface InputCardCCVProps
    extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"|"maxLength"|"regExpReplace"|"regExp"|"inputMode"|"type"> {}

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
                regExp={/[^0-9]/g}
                inputMode="numeric"
                type="number"
            />
        </>
    );
};
