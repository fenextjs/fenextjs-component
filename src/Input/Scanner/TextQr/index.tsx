import { InputText, InputTextProps } from "../../Text";
import React from "react";
import { InputScannerQr, InputScannerQrProps } from "../Qr";
import { useData } from "fenextjs-hook";
/**
 * Props for InputScannerTextQr component.
 */
export interface InputScannerTextQrProps
    extends InputTextProps,
        InputScannerQrProps {}

export const InputScannerTextQr = ({
    className = "",
    defaultValue = "",
    onChange,
    ...props
}: InputScannerTextQrProps) => {
    const { data, setData } = useData(defaultValue ?? "", {
        onChangeDataAfter: onChange,
    });
    return (
        <>
            <InputText
                {...props}
                className={`
                    fenext-input-scanner-text-qr
                    ${className ?? ""}
                `}
                value={data}
                onChange={setData}
                icon={
                    <>
                        <InputScannerQr {...props} onChange={setData} />
                    </>
                }
            />
        </>
    );
};
