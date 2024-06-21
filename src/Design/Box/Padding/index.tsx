import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { ConstDesignBoxPaddingUnit, DesignBoxUseDataProps, DesignBoxValue, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxPadding component.
 */
export interface DesignBoxPaddingProps extends DesignBoxUseDataProps {
    textPadding?: string;
    textPaddingTop?: string;
    textPaddingLeft?: string;
    textPaddingRight?: string;
    textPaddingBottom?: string;
}

export const DesignBoxPadding = ({
    _t,
    textPadding = "Padding",
    textPaddingBottom = "Bottom",
    textPaddingLeft = "Left",
    textPaddingRight = "Right",
    textPaddingTop = "Top",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxPaddingProps) => {
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

    const onChangePadding = (padding: "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft") => (e: number | "") => {
        setDataFunction(old => {
            const n = { ...old }
            const v = e == "" ? undefined : e
            n[padding] = v
            if (n.paddingTogether) {
                n.paddingTop = v
                n.paddingRight = v
                n.paddingBottom = v
                n.paddingLeft = v
            }
            return n
        })
    }
    const onChangePaddingTogether = (e: boolean) => {
        onConcatData({
            paddingTogether: e,
            ...(e ? {
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0
            } : {})
        })
    }

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textPadding, _t)}</Text>
                <InputSelectT<DesignBoxValue["paddingUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxPaddingUnit]}
                    defaultValue={data.paddingUnit}
                    onChange={onChangeData("paddingUnit")}
                />
                <InputCheckbox
                    defaultValue={data.paddingTogether}
                    onChange={onChangePaddingTogether}
                    label={<><SvgLink /></>}
                    classNameLabel="fenext-design-box-item-together"
                />
                <div
                    className={`fenext-design-box-item fenext-design-box-item-4`}
                >
                    <InputNumberCount
                        placeholder={textPaddingTop}
                        onChange={onChangePadding("paddingTop")}
                        value={data.paddingTop}
                        symbolInit=""
                        symbolFinal={data.paddingUnit}
                    />
                    <InputNumberCount
                        placeholder={textPaddingRight}
                        onChange={onChangePadding("paddingRight")}
                        value={data.paddingRight}
                        symbolInit=""
                        symbolFinal={data.paddingUnit}
                    />
                    <InputNumberCount
                        placeholder={textPaddingBottom}
                        onChange={onChangePadding("paddingBottom")}
                        value={data.paddingBottom}
                        symbolInit=""
                        symbolFinal={data.paddingUnit}
                    />
                    <InputNumberCount
                        placeholder={textPaddingLeft}
                        onChange={onChangePadding("paddingLeft")}
                        value={data.paddingLeft}
                        symbolInit=""
                        symbolFinal={data.paddingUnit}
                    />
                </div>
            </div>
        </>
    );
};
