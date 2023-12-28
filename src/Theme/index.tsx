import React from "react";
import { SvgTheme } from "fenextjs-svg/cjs/Theme";
import { ThemeConst } from "fenextjs-interface/cjs/Theme";
import { useTheme } from "fenextjs-hook/cjs/useTheme";
import { _TProps } from "fenextjs-interface";

/**
 * Properties for the base Theme component.
 */
export interface ThemeBaseProps extends _TProps {}

/**
 * Properties for the class of the Theme component.
 */
export interface ThemeClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for the component.
     */
    classNameItem?: string;
}

/**
 * Properties for the Theme component.
 */
export interface ThemeProps extends ThemeBaseProps, ThemeClassProps {}

export const Theme = ({ className = "", classNameItem = "" }: ThemeProps) => {
    const { setTheme, theme } = useTheme({});
    return (
        <>
            <div
                className={`fenext-theme fenext-theme-current-${theme} ${className} `}
            >
                {ThemeConst.map((t, i) => {
                    return (
                        <div
                            key={i}
                            className={`fenext-theme-item fenext-theme-item-${t} fenext-theme-item-${
                                t == theme ? "active" : ""
                            } ${classNameItem} `}
                            onClick={() => {
                                setTheme(t);
                            }}
                        >
                            <SvgTheme />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
