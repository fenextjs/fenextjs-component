import React, { ReactNode } from "react";
export interface InputScannerQrProps {
    className?: string;
    onChange?: (v: string) => void;
    buttonScannerContent?: ReactNode;
    buttonChangeCameraContent?: ReactNode;
    buttonToggleFlashContent?: ReactNode;
}
export declare const InputScannerQr: ({ className, onChange, buttonScannerContent, buttonChangeCameraContent, buttonToggleFlashContent, }: InputScannerQrProps) => React.JSX.Element;
