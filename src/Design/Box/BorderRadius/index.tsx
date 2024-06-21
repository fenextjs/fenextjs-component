import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { ConstDesignBoxBorderRadiusUnit, DesignBoxUseDataProps, DesignBoxValue, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxBorderRadius component.
 */
export interface DesignBoxBorderRadiusProps extends DesignBoxUseDataProps {
    textBorderRadius?: string;
    textBorderRadiusTopLeft?: string;
    textBorderRadiusTopRight?: string;
    textBorderRadiusBottomLeft?: string;
    textBorderRadiusBottomRight?: string;
}

export const DesignBoxBorderRadius = ({
    _t,
    textBorderRadius = "Border Radius",
    textBorderRadiusTopLeft = "Top Left",
    textBorderRadiusTopRight = "Top Right",
    textBorderRadiusBottomLeft = "Bottom Left",
    textBorderRadiusBottomRight = "Bottom Right",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxBorderRadiusProps) => {
    const {
        data: data_,
        onChangeData,
        onConcatData,
        setDataFunction
    } = useData<DesignBoxValueProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangeBorderRadius = (borderRadius: "borderRadiusTopLeft" | "borderRadiusTopRight" | "borderRadiusBottomLeft" | "borderRadiusBottomRight") => (e: number | "") => {
        setDataFunction(old => {
            const n = { ...old }
            const v = e == "" ? undefined : e
            n[borderRadius] = v
            if (n.borderRadiusTogether) {
                n.borderRadiusTopLeft = v
                n.borderRadiusTopRight = v
                n.borderRadiusBottomLeft = v
                n.borderRadiusBottomRight = v
            }
            return n
        })
    }
    const onChangeBorderRadiusTogether = (e: boolean) => {
        onConcatData({
            borderRadiusTogether: e,
            ...(e ? {
                borderRadiusTopLeft:0,
                borderRadiusTopRight :0,
                borderRadiusBottomLeft :0,
                borderRadiusBottomRight :0,
            } : {})
        })
    }

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textBorderRadius, _t)}</Text>
                <InputSelectT<DesignBoxValue["borderRadiusUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxBorderRadiusUnit]}
                    defaultValue={data.borderRadiusUnit}
                    onChange={onChangeData("borderRadiusUnit")}
                    placeholder="Unit"
                />
                <InputCheckbox
                    defaultValue={data.borderRadiusTogether}
                    onChange={onChangeBorderRadiusTogether}
                    label={<><SvgLink /></>}
                    classNameLabel="fenext-design-box-item-together"
                />
                <div
                    className={`fenext-design-box-item fenext-design-box-item-4`}
                >
                    <InputNumberCount
                        placeholder={textBorderRadiusTopLeft}
                        onChange={onChangeBorderRadius("borderRadiusTopLeft")}
                        value={data.borderRadiusTopLeft}
                        symbolInit=""
                        symbolFinal={data.borderRadiusUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusTopRight}
                        onChange={onChangeBorderRadius("borderRadiusTopRight")}
                        value={data.borderRadiusTopRight}
                        symbolInit=""
                        symbolFinal={data.borderRadiusUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusBottomLeft}
                        onChange={onChangeBorderRadius("borderRadiusBottomLeft")}
                        value={data.borderRadiusBottomLeft}
                        symbolInit=""
                        symbolFinal={data.borderRadiusUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusBottomRight}
                        onChange={onChangeBorderRadius("borderRadiusBottomRight")}
                        value={data.borderRadiusBottomRight}
                        symbolInit=""
                        symbolFinal={data.borderRadiusUnit}
                    />
                </div>
            </div>
        </>
    );
};
