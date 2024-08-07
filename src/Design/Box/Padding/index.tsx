import { use_T } from "fenextjs-hook";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import React from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxPaddingUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";
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
    textPadding = "Padding",
    textPaddingBottom = "Bottom",
    textPaddingLeft = "Left",
    textPaddingRight = "Right",
    textPaddingTop = "Top",

    data,
    onChangeData,
    setDataFunction,
    ...props
}: DesignBoxPaddingProps) => {
    const { _t } = use_T({ ...props });
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangePadding =
        (
            padding:
                | "paddingTop"
                | "paddingRight"
                | "paddingBottom"
                | "paddingLeft",
        ) =>
        (e: number | "") => {
            setDataFunction((old) => {
                const n = { ...old };
                const v = e == "" ? undefined : e;
                n[padding] = v;
                if (n.paddingTogether) {
                    n.paddingTop = v;
                    n.paddingRight = v;
                    n.paddingBottom = v;
                    n.paddingLeft = v;
                }
                return n;
            });
        };
    const onChangePaddingTogether = (e: boolean) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.paddingTogether = e;
            if (n.paddingTogether) {
                n.paddingTop = 0;
                n.paddingRight = 0;
                n.paddingBottom = 0;
                n.paddingLeft = 0;
            }
            return n;
        });
    };

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_t(textPadding)}</Text>
                <InputSelectT<DesignBoxValue["paddingUnit"]>
                    onParse={_p}
                    options={[...ConstDesignBoxPaddingUnit]}
                    defaultValue={data.paddingUnit}
                    onChange={onChangeData("paddingUnit")}
                    placeholder="Unit"
                />
                <InputCheckbox
                    defaultValue={data.paddingTogether}
                    onChange={onChangePaddingTogether}
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
