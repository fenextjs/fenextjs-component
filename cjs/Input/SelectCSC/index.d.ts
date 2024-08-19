import React from "react";
import { InputSelectBaseProps, InputSelectClassProps, InputSelectProps } from "../Select";
import { useCSCProps } from "fenextjs-hook/cjs/useCSC";
import { CSCProps } from "fenextjs-interface/cjs/CSC";
export interface InputSelectCSCClassProps extends InputSelectClassProps {
    classNameSelectCSC?: string;
}
type InputCSCProps = Pick<InputSelectProps, "id" | "label" | "placeholder" | "placeholderFocus" | "disabled" | "classNameSelect" | "validator" | "validatorData" | "filterOptions" | "optional" | "optionalText" | "required" | "requiredText" | "forceShowOptionIfNotSelected">;
export interface InputSelectCSCBaseProps extends useCSCProps, Omit<InputSelectBaseProps, "options" | "defaultValue" | "value" | "isSelectClearText" | "onChange" | "onChangeValidate" | "validator" | "validatorData" | "filterOptions"> {
    useContainer?: boolean;
    onChange?: (data: CSCProps) => void;
    country?: InputCSCProps;
    state?: InputCSCProps;
    city?: InputCSCProps;
}
export interface InputSelectCSCProps extends InputSelectCSCBaseProps, InputSelectCSCClassProps {
}
export declare const InputSelectCSC: ({ classNameSelectCSC, useContainer, country, state, city, defaultValue: defaultValueProps, value: valueProps, onChange: onChangeProps, defaultValueJsonString, valueJsonString, onChangeJsonString, parseJson_to_String, parseString_to_Json, ...props }: InputSelectCSCProps) => React.JSX.Element;
export {};
