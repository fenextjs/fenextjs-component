import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../Input/SelectT";
import { InputColor } from "../../Input/Color";
import { InputNumberCount } from "../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { CSSProperties, useMemo } from "react";
import { Edit } from "fenextjs-svg";
import { Collapse, CollapseProps } from "../../Collapse/Simple";
import { Text } from "../../Text";
import {
    DesignBoxValue,
} from "./fontUnit";
import { useData } from "fenextjs-hook";
import { parseDesignBoxValueProps_to_CSSProperties } from "./parse";

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxValueProps
    extends Partial<DesignBoxValue> {}

/**
 * Properties for the base DesignBox component.
 */
export interface DesignBoxProps extends _TProps {
    /**
     * The class name for the component.
     */
    className?: string;

    defaultValue?: DesignBoxValueProps;
    value?: DesignBoxValueProps;
    onChange?: (data: DesignBoxValueProps) => void;
    onChangeStyles?: (data: CSSProperties) => void;

    textBox?: string;
    textExample?: string;
    textExampleValue?: string;
    textColor?: string;
    textSize?: string;
    textAlign?: string;
    textWeight?: string;
    textTransform?: string;
    textStyle?: string;
    textDecoration?: string;
    textLineHeight?: string;
    textLetterSpacing?: string;
    textWordSpacing?: string;

    collapseName?: CollapseProps["name"];
    collapseType?: CollapseProps["type"];
}

export const DesignBox = ({
    className = "",
    _t,

    textBox = "Box",
    textExample = "Example",
    textExampleValue = "Lorem ipsum dolor sit",
    textColor = "Color",
    textSize = "Size",
    textAlign = "Alignment",
    textWeight = "Weight",
    textTransform = "Transform",
    textStyle = "Style",
    textDecoration = "Decoration",
    textLineHeight = "Line Height",
    textLetterSpacing = "Letter Spacing",
    textWordSpacing = "Word Spacing",

    defaultValue = {
        fontSize: 20,
        fontSizeUnit: "px",
        textAlign: "left",
        weight: 400,
        transform: "none",
        style: "normal",
        decoration: "normal",
        lineHeight: 1.2,
        lineHeightUnit: "normal",
        letterSpacing: 0,
        letterSpacingUnit: "px",
        wordSpacing: 0,
        wordSpacingUnit: "px",
    },
    value,
    onChange,
    onChangeStyles,

    collapseName,
    collapseType,
}: DesignBoxProps) => {
    const {
        data: data_,
        onChangeData,
        dataMemo,
    } = useData<DesignBoxValueProps, CSSProperties>(defaultValue, {
        onChangeDataAfter: onChange,
        onChangeDataMemoAfter: onChangeStyles,
        onMemo: parseDesignBoxValueProps_to_CSSProperties,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    return (
        <>
            <div className={`fenext-design-box ${className} `}>
                <Collapse
                    header={<>{_tValidate(textBox, _t)}</>}
                    iconArrow={
                        <>
                            <Edit />
                        </>
                    }
                    rotateIcon={false}
                    name={collapseName}
                    type={collapseType}
                >
                    <div className={`fenext-design-box-content `}>
                        <div
                            className={`fenext-design-box-item fenext-design-box-item-2`}
                        >
                            <Text>{_tValidate(textExample, _t)}</Text>
                            <div
                                className={`fenext-design-box-content-example `}
                                style={{
                                    alignItems:"center",
                                    
                                }}
                            >
                                <Text>
                                    <div style={dataMemo}>
                                        {_tValidate(textExampleValue, _t)}
                                    </div>
                                </Text>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    );
};
