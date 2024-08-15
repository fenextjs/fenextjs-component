import { InputTextProps } from "../../Text";
import React from "react";
import { InputScannerQrProps } from "../Qr";
/**
 * Props for InputScannerTextQr component.
 */
export interface InputScannerTextQrProps extends InputTextProps, InputScannerQrProps {
}
export declare const InputScannerTextQr: ({ className, defaultValue, onChange, ...props }: InputScannerTextQrProps) => React.JSX.Element;
