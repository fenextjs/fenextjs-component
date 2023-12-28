import React from "react";
import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";
import { useData } from "fenextjs-hook";
/**
 * Interface that defines CSS class properties for a text input component.
 */
export interface InputCodeClassProps extends InputTextClassProps {}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputCodeBaseProps
    extends Omit<InputTextBaseProps, "type" | "maxLength"> {
    /**
     * maxLength of Input.
     */
    maxLength: number;
}
/**
 * Props interface for the InputCode component. Extends both InputCodeBaseProps and InputCodeClassProps interfaces.
 */
export interface InputCodeProps
    extends InputCodeBaseProps,
        InputCodeClassProps {}

export const InputCode = ({ ...props }: InputCodeProps) => {
    const { data, setData } = useData(props?.defaultValue ?? "", {
        onChangeDataAfter: props?.onChange,
    });
    return (
        <>
            <InputText
                {...props}
                onChange={setData}
                className={`${props?.className} fenext-input-code`}
                onKeyDown={({ target }) => {
                    const end = target.value.length;

                    target.setSelectionRange(end, end);
                    target.focus();
                }}
                extraInContentInput={
                    <>
                        <div className="fenext-input-code-content-items">
                            {new Array(props?.maxLength ?? 1)
                                ?.fill(1)
                                .map((e, i) => {
                                    return (
                                        <>
                                            <div
                                                key={i * e}
                                                className={`fenext-input-code-item fenext-input-code-item-${
                                                    data.length == i
                                                        ? "current"
                                                        : ""
                                                }`}
                                            >
                                                {!data || data == ""
                                                    ? props?.placeholder?.[i] ??
                                                      ""
                                                    : ""}
                                                {data?.[i] ?? ""}
                                            </div>
                                        </>
                                    );
                                })}
                        </div>
                    </>
                }
            />
        </>
    );
};
