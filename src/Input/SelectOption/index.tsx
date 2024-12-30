import React, { PropsWithChildren, ReactNode } from "react";
import { SvgTrash } from "fenextjs-svg/cjs/Trash";
import { _TProps } from "fenextjs-interface";
import { use_T } from "fenextjs-hook";
import { Img, ImgProps } from "../../Img";
import { InputCheckbox } from "../Checkbox";
/**
 * Interface that defines CSS class properties for a select input component.
 */
export interface InputSelectOptionClassProps {
    /**
     * CSS class name for the option select.
     */
    classNameOption?: string;
    /**
     * CSS class name for the option img select.
     */
    classNameOptionImg?: string;
    /**
     * CSS class name for the delete option select.
     */
    classNameOptionDelete?: string;
}
/**
 * Interface that defines the base properties for a text input component.
 */
export interface InputSelectOptionBaseProps<T = any>
    extends PropsWithChildren,
        _TProps {
    /**
     * ID of option.
     */
    id: string | number;
    /**
     * Text of option.
     */
    text: string;
    /**
     * Img of option.
     */
    img?: string;
    /**
     * Img of option.
     */
    imgComponent?: ImgProps;
    /**
     * Img of option.
     */
    icon?: ReactNode;
    /**
     * Type of option.
     */
    type?: "div" | "option" | "multiple";
    /**
     * Disabled of option.
     */
    disabled?: boolean;
    /**
     * Selected of option.
     */
    selected?: boolean;
    /**
     * Selected of option.
     */
    hidden?: boolean;
    /**
     * onClick of option.
     */
    onClick?: (item: InputSelectOptionBaseProps) => void;
    /**
     * onDelete of option.
     */
    onDelete?: (item: InputSelectOptionBaseProps) => void;
    /**
     * isBtn of option.
     */
    isBtn?: boolean;
    /**
     * Data custom of option.
     */
    data?: T;
    /**
     * iconDelete custom of option.
     * @default <Trash />
     */
    iconDelete?: ReactNode;
}
/**
 * Props interface for the InputSelectOption component. Extends both InputSelectOptionBaseProps and InputSelectOptionClassProps interfaces.
 */
export interface InputSelectOptionProps<T = any>
    extends InputSelectOptionBaseProps<T>,
        InputSelectOptionClassProps {}

export const InputSelectOption = <T = any,>({
    classNameOption = "",
    classNameOptionImg = "",
    classNameOptionDelete = "",

    id,
    text,
    img = undefined,
    imgComponent = undefined,
    icon = undefined,
    children,
    type = "div",
    onClick,
    onDelete,
    disabled = false,
    selected = false,
    hidden = false,
    isBtn = false,
    data,
    iconDelete = <SvgTrash />,
    ...props
}: InputSelectOptionProps<T>) => {
    const { _t } = use_T({ ...props });
    const TAG = type == "option" ? "option" : "div";

    return (
        <>
            <TAG
                key={id}
                id={`${id}`}
                className={`
                    fenext-select-option
                    fenext-select-option-${disabled ? "disabled" : ""}
                    fenext-select-option-${selected ? "selected" : "not-selected"}
                    fenext-select-option-${isBtn ? "btn" : ""}
                    fenext-select-option-type-${type}
                    fenext-select-option-${hidden ? "hidden" : "not-hidden"}
                    ${classNameOption}
                `}
                onClick={() => {
                    if (!disabled) {
                        onClick?.({
                            id,
                            text,
                            children,
                            data,
                            img,
                            icon,
                            imgComponent,
                        });
                    }
                }}
                disabled={disabled}
                selected={selected}
                value={text}
            >
                {type == "multiple" && (
                    <InputCheckbox
                        classNameLabel="fenext-select-option-checkbox"
                        value={true}
                    />
                )}
                {img ? (
                    <>
                        <img
                            src={img}
                            alt={text}
                            className={`fenext-select-option-img ${classNameOptionImg}`}
                        />
                    </>
                ) : (
                    <>
                        {imgComponent ? (
                            <>
                                <Img
                                    {...imgComponent}
                                    className={`fenext-select-option-img ${classNameOptionImg} ${imgComponent.className}`}
                                />
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
                {icon ? (
                    <>
                        <div className={`fenext-select-option-icon`}>
                            {icon}
                        </div>
                    </>
                ) : (
                    <></>
                )}
                {_t(TAG == "option" ? text : children ?? text)}
                {type == "multiple" ? (
                    <>
                        <span
                            className={`fenext-select-option-delete ${classNameOptionDelete} `}
                            onClick={() => {
                                if (!disabled) {
                                    onDelete?.({
                                        id,
                                        text,
                                        children,
                                        data,
                                        img,
                                    });
                                }
                            }}
                        >
                            {iconDelete}
                        </span>
                    </>
                ) : (
                    <></>
                )}
            </TAG>
        </>
    );
};
