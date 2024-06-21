import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import { _TProps } from "fenextjs-interface";
import React, { useMemo } from "react";
import { Text } from "../../../Text";
import { ConstDesignBoxGapsUnit, DesignBoxUseDataProps, DesignBoxValue, DesignBoxValueProps } from "../boxUnit";
import { useData } from "fenextjs-hook";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxGap component.
 */
export interface DesignBoxGapProps extends DesignBoxUseDataProps {
    textGap?: string;
    textGapRow?: string;
    textGapColumn?: string;
}

export const DesignBoxGap = ({
    _t,
    textGap = "Gap",
    textGapRow = "Gap Row",
    textGapColumn = "Gap Column",

    defaultValue = {},
    value,
    onChange,
}: DesignBoxGapProps) => {
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

    const onChangeGap = (gap: "gapColumn" | "gapRow") => (e: number | "") => {
        setDataFunction(old => {
            const n = { ...old }
            const v = e == "" ? undefined : e
            n[gap] = v
            if (n.gapTogether) {
                n.gapColumn = v
                n.gapRow = v
            }
            return n
        })
    }
    const onChangeGapTogether = (e: boolean) => {
        onConcatData({
            gapTogether: e,
            ...(e ? {
                gapColumn: 0,
                gapRow: 0,
            } : {})
        })
    }

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textGap, _t)}</Text>
                <InputSelectT<DesignBoxValue["gapUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxGapsUnit]}
                    defaultValue={data.gapUnit}
                    onChange={onChangeData("gapUnit")}
                    placeholder="Unit"
                />
                <InputCheckbox
                    defaultValue={data.gapTogether}
                    onChange={onChangeGapTogether}
                    label={<><SvgLink /></>}
                    classNameLabel="fenext-design-box-item-together"
                />
                <div
                    className={`fenext-design-box-item fenext-design-box-item-2`}
                >
                    <InputNumberCount
                        placeholder={textGapRow}
                        onChange={onChangeGap("gapRow")}
                        value={data.gapRow}
                        symbolInit=""
                        symbolFinal={data.gapUnit}
                    />
                    <InputNumberCount
                        placeholder={textGapColumn}
                        onChange={onChangeGap("gapColumn")}
                        value={data.gapColumn}
                        symbolInit=""
                        symbolFinal={data.gapUnit}
                    />
                </div>
            </div>
        </>
    );
};
