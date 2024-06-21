import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { ConstDesignBoxMarginUnit, DesignBoxUseDataProps, DesignBoxValue, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxMargin component.
 */
export interface DesignBoxMarginProps extends DesignBoxUseDataProps {
    textMargin?: string;
    textMarginTop?: string;
    textMarginLeft?: string;
    textMarginRight?: string;
    textMarginBottom?: string;
}

export const DesignBoxMargin = ({
    _t,
    textMargin = "Margin",
    textMarginBottom = "Bottom",
    textMarginLeft = "Left",
    textMarginRight = "Right",
    textMarginTop = "Top",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxMarginProps) => {
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

    const onChangeMargin = (margin: "marginTop" | "marginRight" | "marginBottom" | "marginLeft") => (e: number | "") => {
        setDataFunction(old => {
            const n = { ...old }
            const v = e == "" ? undefined : e
            n[margin] = v
            if (n.marginTogether) {
                n.marginTop = v
                n.marginRight = v
                n.marginBottom = v
                n.marginLeft = v
            }
            return n
        })
    }
    const onChangeMarginTogether = (e: boolean) => {
        onConcatData({
            marginTogether: e,
            ...(e ? {
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0
            } : {})
        })
    }

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textMargin, _t)}</Text>
                <InputSelectT<DesignBoxValue["marginUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxMarginUnit]}
                    defaultValue={data.marginUnit}
                    onChange={onChangeData("marginUnit")}
                />
                <InputCheckbox
                    defaultValue={data.marginTogether}
                    onChange={onChangeMarginTogether}
                    label={<><SvgLink /></>}
                    classNameLabel="fenext-design-box-item-together"
                />
                <div
                    className={`fenext-design-box-item fenext-design-box-item-4`}
                >
                    <InputNumberCount
                        placeholder={textMarginTop}
                        onChange={onChangeMargin("marginTop")}
                        value={data.marginTop}
                        symbolInit=""
                        symbolFinal={data.marginUnit}
                    />
                    <InputNumberCount
                        placeholder={textMarginRight}
                        onChange={onChangeMargin("marginRight")}
                        value={data.marginRight}
                        symbolInit=""
                        symbolFinal={data.marginUnit}
                    />
                    <InputNumberCount
                        placeholder={textMarginBottom}
                        onChange={onChangeMargin("marginBottom")}
                        value={data.marginBottom}
                        symbolInit=""
                        symbolFinal={data.marginUnit}
                    />
                    <InputNumberCount
                        placeholder={textMarginLeft}
                        onChange={onChangeMargin("marginLeft")}
                        value={data.marginLeft}
                        symbolInit=""
                        symbolFinal={data.marginUnit}
                    />
                </div>
            </div>
        </>
    );
};
