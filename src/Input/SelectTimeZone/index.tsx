import React from "react";
import {
    InputSelectClassProps,
    InputSelectItemOptionBaseProps,
} from "../Select";
import { TimeZoneProps } from "fenextjs-interface";
import { InputSelectT, InputSelectTProps } from "../SelectT";
import { TimeZoneList } from "./Options";
/**
 * Interface that defines CSS class properties for a SelectTimeZone input component.
 */
export interface InputSelectTimeZoneClassProps extends InputSelectClassProps {}

/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectTimeZoneBaseProps
    extends Omit<InputSelectTProps<TimeZoneProps>, "options" | "onParse"> {}
/**
 * Props interface for the InputSelectTimeZone component. Extends both InputSelectTimeZoneBaseProps and InputSelectTimeZoneClassProps interfaces.
 */
export interface InputSelectTimeZoneProps
    extends InputSelectTimeZoneBaseProps,
        InputSelectTimeZoneClassProps {}

export const InputSelectTimeZone = ({
    useTOption = false,
    ...props
}: InputSelectTimeZoneProps) => {
    return (
        <>
            <InputSelectT<TimeZoneProps>
                {...props}
                options={TimeZoneList}
                onParse={(e) => {
                    const r: InputSelectItemOptionBaseProps<TimeZoneProps> = {
                        id: e?.time ?? "",
                        text: `${e?.time ?? ""}`,
                        data: e,
                    };
                    return r;
                }}
                useTOption={useTOption}
            />
        </>
    );
};
