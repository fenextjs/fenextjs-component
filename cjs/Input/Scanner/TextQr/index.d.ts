import { InputTextProps } from "../../Text";
import React from "react";
import { InputScannerQrProps } from "../Qr";
export interface InputScannerTextQrProps extends InputTextProps, InputScannerQrProps {
}
export declare const InputScannerTextQr: ({ className, defaultValue, onChange, ...props }: InputScannerTextQrProps) => React.JSX.Element;
