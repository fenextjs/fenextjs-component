import React, { useMemo } from "react";
import { InputText, InputTextProps } from "../../Text";
import { FenextjsValidator } from "fenextjs-validator";
import { useValidator } from "fenextjs-hook/cjs/useValidator";
import { useData } from "fenextjs-hook/cjs/useData";
import { parseNumberCount } from "fenextjs-functions";

export interface InputCardExpDateDataProps {
    month?: number;
    year?: number;
}

/**
 * Props for InputCardExpDate component.
 */
export interface InputCardExpDateProps
    extends Omit<
        InputTextProps,
        | "onChangeValidate"
        | "icon"
        | "type"
        | "defaultValue"
        | "value"
        | "onChange"
        | "inputMode"
    > {
    /**
     * The max length number card.
     * @default 19
     * @min 15
     */
    maxExpDateLength?: number;

    defaultValue?: InputCardExpDateDataProps;
    value?: InputCardExpDateDataProps;
    onChange?: (data: InputCardExpDateDataProps) => void;
}

export const InputCardExpDate = ({
    value: valueProps,
    defaultValue = {},
    placeholder = "MM/YY",
    onChange,
    validator = undefined,
    maxExpDateLength = 4,
    ...props
}: InputCardExpDateProps) => {
    const { data, setData } = useData<InputCardExpDateDataProps>(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const value = useMemo(() => valueProps ?? data, [valueProps, data]);

    const { error: errorFenext } = useValidator({
        data: value,
        validator: validator ?? FenextjsValidator(),
    });

    const textToCardExpDateData = (
        e: number | string,
    ): InputCardExpDateDataProps => {
        const n = `${e}`.replace(/[^0-9]/g, "");
        let month: number | undefined = parseInt(n.slice(0, 2));
        if (Number.isNaN(month)) {
            month = undefined;
        }

        if ((month ?? 0) > 12) {
            return textToCardExpDateData(`0${e}`);
        }
        let year: number | undefined = parseInt(
            n.slice(2, Math.min(6, maxExpDateLength)),
        );
        if (Number.isNaN(year)) {
            year = undefined;
        }

        return {
            month,
            year,
        };
    };
    const CardExpDateDataToText = (d?: InputCardExpDateDataProps) => {
        let m: number | string = parseInt(`${d?.month ?? ""}`);
        if (Number.isNaN(m) || m == 0) {
            m = "";
        }
        let y: number | string = parseInt(`${d?.year ?? ""}`);
        if (Number.isNaN(y) || y == 0) {
            y = "";
        } else {
            m = parseNumberCount(m, {
                minimumIntegerDigits: 2,
                maximumFractionDigits: 0,
            });
        }

        const r = `${m}${y != "" ? "/" + y : ""}`;
        return r;
    };

    return (
        <>
            <InputText
                {...props}
                value={CardExpDateDataToText(value)}
                className={`fenext-input-card-exp-date ${props?.className}`}
                error={errorFenext}
                placeholder={placeholder}
                onChange={(v: string) => {
                    setData(textToCardExpDateData(v));
                }}
                inputMode="numeric"
            />
        </>
    );
};
