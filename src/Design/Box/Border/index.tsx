import { use_T } from "fenextjs-hook";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import { InputNumberCount } from "../../../Input/NumberCount";
import React, { useCallback } from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxBorderUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";
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
   
    textBorder = "Border",
    textBorderBottom = "Bottom",
    textBorderLeft = "Left",
    textBorderRight = "Right",
    textBorderTop = "Top",

    data,
    setDataFunction,
    onChangeData,...props
}: DesignBoxBorderProps) => {
    const {_t} = use_T({...props})
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangeBorder = useCallback(
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
            },
        [data],
    );

    const onChangeBorderTogether = (e: boolean) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.borderTogether = e;
            if (e) {
                n.borderBottom = 0;
                n.borderLeft = 0;
                n.borderRight = 0;
                n.borderTop = 0;
            }
            return n;
        });
    };

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_t(textBorder)}</Text>
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
