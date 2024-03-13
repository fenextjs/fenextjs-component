import React, { ReactNode, useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { useData } from "fenextjs-hook";
import { Qr } from "fenextjs-svg/cjs/Qr";

/**
 * Props for InputScannerQr component.
 */
export interface InputScannerQrProps {
    className?: string;
    onChange?: (v: string) => void;
    buttonContent?: ReactNode;
}

export const InputScannerQr = ({
    className = "",
    onChange,
    buttonContent = <Qr />,
}: InputScannerQrProps) => {
    const ref = useRef<HTMLVideoElement>(null);
    const [showScanner, setShowScanner] = useState(false);
    const [qrScanner, setQrScanner] = useState<QrScanner | undefined>(
        undefined,
    );

    const onStoptScan = () => {
        setShowScanner(false);
        qrScanner?.stop();
        // setQrScanner(undefined);
    };

    const onScan = (v?: string) => {
        if(v){
            onChange?.(v);
            onStoptScan()
        }
    };
    const onStartScan = () => {
        setShowScanner(true);
        if (ref.current) {
            const qrScanner = new QrScanner(ref.current, onScan);
            qrScanner.start();
            setQrScanner(qrScanner);
        } else {
            setTimeout(onStartScan, 500);
        }
    };


    return (
        <>
            <div
                className={`
                    fenext-input-scanner-qr
                    fenext-input-scanner-qr-${showScanner ? "show" : "hidden"}
                    ${className ?? ""}
                `}
            >
                <Button onClick={onStartScan}>{buttonContent}</Button>
                <Modal active={showScanner} type="full" onClose={onStoptScan}>
                    <video
                        ref={ref}
                        className="fenext-input-scanner-qr-video"
                    ></video>
                </Modal>
            </div>
        </>
    );
};
