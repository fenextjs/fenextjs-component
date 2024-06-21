import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxBorderUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
    DesignBoxValueProps,
} from "../boxUnit";
import { useData } from "fenextjs-hook";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxBorder component.
 */
export interface DesignBoxBorderProps extends DesignBoxUseDataProps {
    textBorder?: string;
    textBorderTop?: string;
    textBorderLeft?: string;
    textBorderRight?: string;
    textBorderBottom?: string;
}

export const DesignBoxBorder = ({
    _t,
    textBorder = "Border",
    textBorderBottom = "Bottom",
    textBorderLeft = "Left",
    textBorderRight = "Right",
    textBorderTop = "Top",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxBorderProps) => {
    const {
        data: data_,
        onChangeData,
        onConcatData,
        setDataFunction,
    } = useData<DesignBoxValueProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });

    const data = useMemo(() => value ?? data_, [value, data_]);

    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangeBorder =
        (border: "borderTop" | "borderRight" | "borderBottom" | "borderLeft") =>
        (e: number | "") => {
            setDataFunction((old) => {
                const n = { ...old };
                const v = e == "" ? undefined : e;
                n[border] = v;
                if (n.borderTogether) {
                    n.borderTop = v;
                    n.borderRight = v;
                    n.borderBottom = v;
                    n.borderLeft = v;
                }
                return n;
            });
        };
    const onChangeBorderTogether = (e: boolean) => {
        onConcatData({
            borderTogether: e,
            ...(e
                ? {
                      borderBottom: 0,
                      borderLeft: 0,
                      borderRight: 0,
                      borderTop: 0,
                  }
                : {}),
        });
    };

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textBorder, _t)}</Text>
                <InputSelectT<DesignBoxValue["borderUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxBorderUnit]}
                    defaultValue={data.borderUnit}
                    onChange={onChangeData("borderUnit")}
                    placeholder="Unit"
                />
                <InputCheckbox
                    defaultValue={data.borderTogether}
                    onChange={onChangeBorderTogether}
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
                        placeholder={textBorderTop}
                        onChange={onChangeBorder("borderTop")}
                        value={data.borderTop}
                        symbolInit=""
                        symbolFinal={data.borderUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderRight}
                        onChange={onChangeBorder("borderRight")}
                        value={data.borderRight}
                        symbolInit=""
                        symbolFinal={data.borderUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderBottom}
                        onChange={onChangeBorder("borderBottom")}
                        value={data.borderBottom}
                        symbolInit=""
                        symbolFinal={data.borderUnit}
                    />
                    <InputNumberCount
                        placeholder={textBorderLeft}
                        onChange={onChangeBorder("borderLeft")}
                        value={data.borderLeft}
                        symbolInit=""
                        symbolFinal={data.borderUnit}
                    />
                </div>
            </div>
        </>
    );
};
