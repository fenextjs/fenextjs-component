import React, { useEffect, useRef, useState } from "react";
import { CollapseBaseProps, CollapseClassProps, Collapse } from "../Collapse";
import { GetSpaceParent } from "fenextjs-functions/cjs/html/GetSpaceParent";

/**
 * Properties for the base DropDown component.
 */
export interface DropDownBaseProps extends CollapseBaseProps {}

/**
 * Properties for the class of the DropDown component.
 */
export interface DropDownClassProps extends CollapseClassProps {
    /**
     * The class name for the component.
     */
    classNameDropDown?: string;
}

/**
 * Properties for the DropDown component.
 */
export interface DropDownProps extends DropDownBaseProps, DropDownClassProps {}

export const DropDown = ({
    classNameDropDown = "",
    show = "focus",
    ...props
}: DropDownProps) => {
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [spaces, setSpaces] = useState({
        spaceBottom: 0,
        spaceLeft: 0,
        spaceRight: 0,
        spaceTop: 0,
    });

    const onDefDropDownPos = () => {
        if (dropDownRef.current) {
            setSpaces(GetSpaceParent(dropDownRef.current));
        }
    };
    useEffect(() => {
        onDefDropDownPos();
        window.addEventListener("resize", onDefDropDownPos);
        window.addEventListener("scroll", onDefDropDownPos);
        return () => {
            window.removeEventListener("resize", onDefDropDownPos);
            window.removeEventListener("scroll", onDefDropDownPos);
        };
    }, [dropDownRef.current]);
    return (
        <>
            <div
                ref={dropDownRef}
                className={`fenext-dropdown fenext-dropdown-${
                    spaces.spaceRight > spaces.spaceLeft ? "left" : "right"
                } fenext-dropdown-${
                    spaces.spaceTop > spaces.spaceBottom ? "up" : "down"
                } ${classNameDropDown} `}
                style={
                    {
                        ["--fenext-space-top"]: spaces.spaceTop,
                        ["--fenext-space-left"]: spaces.spaceLeft,
                        ["--fenext-space-right"]: spaces.spaceRight,
                        ["--fenext-space-bottom"]: spaces.spaceBottom,
                    } as React.CSSProperties
                }
                onMouseEnter={onDefDropDownPos}
            >
                <Collapse {...props} show={show} />
            </div>
        </>
    );
};
