import React, { ReactNode, useMemo } from "react";
import { InputText, InputTextProps } from "../../Text";
import { FenextjsValidator } from "fenextjs-validator";
import { useValidator } from "fenextjs-hook/cjs/useValidator";
import { useData } from "fenextjs-hook/cjs/useData";
import { Card_Enum } from "fenextjs-interface";
import {
    SvgCardAmericanExpress,
    SvgCardDinersClub,
    SvgCardDiscover,
    SvgCardJCB,
    SvgCardMasterCard,
    SvgCardVisa,
    SvgCardVisaElectron,
} from "fenextjs-svg";
import { GetCardType } from "fenextjs-functions";

export const InputCardNumberIcons: {
    [id in Card_Enum]: ReactNode;
} = {
    AMEX: <SvgCardAmericanExpress />,
    DINERS: <SvgCardDinersClub />,
    DINERS_CARTE_BLANCHE: <SvgCardDinersClub />,
    DISCOVER: <SvgCardDiscover />,
    JCB: <SvgCardJCB />,
    MASTERCARD: <SvgCardMasterCard />,
    OTHER: <></>,
    VISA: <SvgCardVisa />,
    VISA_ELECTRON: <SvgCardVisaElectron />,
};

/**
 * Props for InputCardNumber component.
 */
export interface InputCardNumberProps
    extends Omit<InputTextProps, "onChangeValidate" | "icon" | "type"> {
    /**
     * The max length number card.
     * @default 19
     * @min 15
     */
    maxNumberLength?: number;
}

export const InputCardNumber = ({
    value: valueProps,
    defaultValue = "",
    onChange,
    validator = undefined,
    maxNumberLength = 19,
    ...props
}: InputCardNumberProps) => {
    const { data, setData } = useData<string>(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    const value = useMemo(() => valueProps ?? data, [valueProps, data]);

    const { error: errorFenext } = useValidator({
        data: value,
        validator: validator ?? FenextjsValidator(),
    });

    const numberToTextCard = (e: number | string) => {
        const n = `${e}`.split(" ").join("");
        const first3 = n.slice(0, 4);
        const secud3 = n.slice(4, 8);
        const eighthDigit = n.slice(8, 12);
        const lastNumbers = n.slice(12, Math.max(15, maxNumberLength));
        return `${first3 ?? ""}${secud3 ? " " + secud3 : ""}${
            eighthDigit ? " " + eighthDigit : ""
        }${lastNumbers ? " " + lastNumbers : ""}`;
    };

    const ICON = useMemo(
        () => InputCardNumberIcons[GetCardType(value)],
        [value],
    );

    return (
        <>
            <InputText
                {...props}
                value={numberToTextCard(value)}
                className={`fenext-input-card-number ${props?.className}`}
                useLoader={false}
                error={errorFenext}
                icon={ICON}
                onChange={(v: string) => {
                    setData(
                        `${v}`
                            .replace(/[^0-9]/g, "")
                            .slice(0, Math.max(15, maxNumberLength)),
                    );
                }}
                inputMode="numeric"
            />
        </>
    );
};
