import { _tValidate } from "fenextjs-functions";
import { InputSelectT } from "../../../Input/SelectT";
import { InputCheckbox } from "../../../Input/Checkbox";
import React from "react";
import { Text } from "../../../Text";
import {
    ConstDesignBoxBorderStylesUnit,
    DesignBoxBorderStylesUnit,
    DesignBoxUseDataProps,
    DesignBoxValue,
} from "../boxUnit";
import { SvgLink } from "fenextjs-svg/cjs/Link";

/**
 * Properties for the base DesignBoxBorderStyle component.
 */
export interface DesignBoxBorderStyleProps extends DesignBoxUseDataProps {
    textBorderStyle?: string;
    textBorderStyleTop?: string;
    textBorderStyleLeft?: string;
    textBorderStyleRight?: string;
    textBorderStyleBottom?: string;
}

export const DesignBoxBorderStyle = ({
    _t,
    textBorderStyle = "Border Style",
    textBorderStyleTop = "Top",
    textBorderStyleLeft = "Left",
    textBorderStyleRight = "Right",
    textBorderStyleBottom = "Bottom",

    data,
    setDataFunction,
}: DesignBoxBorderStyleProps) => {
    const _p = (e) => ({ id: `${e}`, text: `${e}`, data: e });

    const onChangeBorderStyle =
        (
            borderStyle:
                | "borderTopStyle"
                | "borderLeftStyle"
                | "borderRightStyle"
                | "borderBottomStyle",
        ) =>
        (e?: DesignBoxBorderStylesUnit) => {
            setDataFunction((old) => {
                const n = { ...old };
                const v = e;
                n[borderStyle] = v;
                if (n.borderStyleTogether) {
                    n.borderTopStyle = v;
                    n.borderLeftStyle = v;
                    n.borderRightStyle = v;
                    n.borderBottomStyle = v;
                }
                return n;
            });
        };
    const onChangeBorderStyleTogether = (e: boolean) => {
        setDataFunction((old) => {
            const n = { ...old };
            n.borderStyleTogether = e;
            if (e) {
                n.borderTopStyle = "hidden";
                n.borderLeftStyle = "hidden";
                n.borderRightStyle = "hidden";
                n.borderBottomStyle = "hidden";
            }
            return n;
        });
    };

    return (
        <>
            <div className={`fenext-design-box-item`}>
                <Text>{_tValidate(textBorderStyle, _t)}</Text>
                <div></div>
                <InputCheckbox
                    defaultValue={data.borderStyleTogether}
                    onChange={onChangeBorderStyleTogether}
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
                    <InputSelectT<DesignBoxValue["borderTopStyle"]>
                        onParse={_p}
                        options={[...ConstDesignBoxBorderStylesUnit]}
                        placeholder={textBorderStyleTop}
                        onChange={onChangeBorderStyle("borderTopStyle")}
                        value={data.borderTopStyle}
                    />

                    <InputSelectT<DesignBoxValue["borderLeftStyle"]>
                        onParse={_p}
                        options={[...ConstDesignBoxBorderStylesUnit]}
                        placeholder={textBorderStyleLeft}
                        onChange={onChangeBorderStyle("borderLeftStyle")}
                        value={data.borderLeftStyle}
                    />

                    <InputSelectT<DesignBoxValue["borderRightStyle"]>
                        onParse={_p}
                        options={[...ConstDesignBoxBorderStylesUnit]}
                        placeholder={textBorderStyleRight}
                        onChange={onChangeBorderStyle("borderRightStyle")}
                        value={data.borderRightStyle}
                    />

                    <InputSelectT<DesignBoxValue["borderBottomStyle"]>
                        onParse={_p}
                        options={[...ConstDesignBoxBorderStylesUnit]}
                        placeholder={textBorderStyleBottom}
                        onChange={onChangeBorderStyle("borderBottomStyle")}
                        value={data.borderBottomStyle}
                    />
                </div>
            </div>
        </>
    );
};
