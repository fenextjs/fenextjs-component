import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import React from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxBorderRadiusUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";
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

    data,
    onChangeData,
    setDataFunction,
}: DesignBoxBorderRadiusProps) => {
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangeBorderRadius =
        (
            borderRadius:
                | "borderTopLeftRadius"
                | "borderTopRightRadius"
                | "borderBottomLeftRadius"
                | "borderBottomRightRadius",
        ) =>
        (e: number | "") => {
            setDataFunction((old) => {
                const n = { ...old };
                const v = e == "" ? undefined : e;
                n[borderRadius] = v;
                if (n.borderRadiusTogether) {
                    n.borderTopLeftRadius = v;
                    n.borderTopRightRadius = v;
                    n.borderBottomLeftRadius = v;
                    n.borderBottomRightRadius = v;
                }
                return n;
            });
        };
    const onChangeBorderRadiusTogether = (e: boolean) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.borderRadiusTogether = e;
            if (e) {
                n.borderTopLeftRadius = 0;
                n.borderTopRightRadius = 0;
                n.borderBottomLeftRadius = 0;
                n.borderBottomRightRadius = 0;
            }
            return n;
        });
    };

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textBorderRadius, _t)}</Text>
                <InputSelectT<DesignBoxValue["borderUnitRadius"]>
                    onParse={_p}
                    options={[...ConstDesignBoxBorderRadiusUnit]}
                    defaultValue={data.borderUnitRadius}
                    onChange={onChangeData("borderUnitRadius")}
                    placeholder="Unit"
                />
                <InputCheckbox
                    defaultValue={data.borderRadiusTogether}
                    onChange={onChangeBorderRadiusTogether}
                    label={
                        <>
                            <SvgLink />
                        </>
                    }
                    classNameLabel="fenext-design-box-item-together"
                />
                <div
                    className={`fenext-design-box-item fenext-design-box-item-4`}
                >
                    <InputNumberCount
                        placeholder={textBorderRadiusTopLeft}
                        onChange={onChangeBorderRadius("borderTopLeftRadius")}
                        value={data.borderTopLeftRadius}
                        symbolInit=""
                        symbolFinal={data.borderUnitRadius}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusTopRight}
                        onChange={onChangeBorderRadius("borderTopRightRadius")}
                        value={data.borderTopRightRadius}
                        symbolInit=""
                        symbolFinal={data.borderUnitRadius}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusBottomLeft}
                        onChange={onChangeBorderRadius(
                            "borderBottomLeftRadius",
                        )}
                        value={data.borderBottomLeftRadius}
                        symbolInit=""
                        symbolFinal={data.borderUnitRadius}
                    />
                    <InputNumberCount
                        placeholder={textBorderRadiusBottomRight}
                        onChange={onChangeBorderRadius(
                            "borderBottomRightRadius",
                        )}
                        value={data.borderBottomRightRadius}
                        symbolInit=""
                        symbolFinal={data.borderUnitRadius}
                    />
                </div>
            </div>
        </>
    );
};
