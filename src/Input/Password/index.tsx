import React, { useMemo, useState } from "react";

import { InputText, InputTextBaseProps, InputTextClassProps } from "../Text";

import { SvgEye, SvgEyeBar } from "fenextjs-svg/cjs/Eye";

/**
 * Interface for the base props of an input password component.
 */
export interface InputPasswordBaseProps
    extends Omit<InputTextBaseProps, "type" | "icon"> {
    iconEye?: React.ReactNode;
    iconEyeBar?: React.ReactNode;
}

/**
 * Interface for the class props of an input password component.
 */
export interface InputPasswordClassProps extends InputTextClassProps {
    classNameContentEye?: string;
}

/**
 * Interface for the props of an input password component.
 */
export interface InputPasswordProps
    extends InputPasswordBaseProps,
        InputPasswordClassProps {}

export const InputPassword = ({
    classNameContentEye = "",
    iconEye,
    iconEyeBar,
    ...props
}: InputPasswordProps) => {
    const [type, setType] = useState<"text" | "password">("password");
    const toggleTypePassword = () => {
        setType(type == "password" ? "text" : "password");
    };
    const ICON = useMemo(() => {
        return (
            <span
                onClick={toggleTypePassword}
                className={`fenext-input-password-icon ${classNameContentEye}`}
            >
                {type == "password"
                    ? iconEye ?? <SvgEye />
                    : iconEyeBar ?? <SvgEyeBar />}
            </span>
        );
    }, [type]);
    return (
        <>
            <InputText {...props} icon={ICON} type={type} />
        </>
    );
};
