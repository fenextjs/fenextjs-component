import React, {
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import QrScanner from "qr-scanner";
import { Button } from "../../../Button";
import { Modal } from "../../../Modal";
import { Qr } from "fenextjs-svg/cjs/Qr";
import { generateRandomID } from "fenextjs-functions";
import { useAction } from "fenextjs-hook";
import { Bolt, CameraChange } from "fenextjs-svg";

/**
 * Props for InputScannerQr component.
 */
export interface InputScannerQrProps {
    className?: string;
    onChange?: (v: string) => void;
    buttonScannerContent?: ReactNode;
    buttonChangeCameraContent?: ReactNode;
    buttonToggleFlashContent?: ReactNode;
}

export const InputScannerQr = ({
    className = "",
    onChange,
    buttonScannerContent = <Qr />,
    buttonChangeCameraContent = <CameraChange />,
    buttonToggleFlashContent=<Bolt/>
}: InputScannerQrProps) => {
    const uuid = useMemo(() => generateRandomID(), []);
    const ref = useRef<HTMLVideoElement>(null);
    const [showScanner, setShowScanner] = useState(false);
    const [hasFlash, setHasFlash] = useState(false)
    const [nCamera, setNCamera] = useState(0)
    const [listCamera, setListCamera] = useState<
        QrScanner.Camera[] | undefined
    >(undefined);
    const [qrScanner, setQrScanner] = useState<QrScanner | undefined>(
        undefined,
    );
    const onStoptScan = useCallback(() => {
        setShowScanner(false);
        qrScanner?.stop();
    }, [qrScanner]);

    const onStartScan = useCallback(() => {
        setShowScanner(true);
        qrScanner?.start();
    }, [qrScanner]);
    const onToggleFlash = useCallback(() => {
        qrScanner?.toggleFlash();
    }, [qrScanner]);
    const onChangeCamera = useCallback(() => {
        setNCamera(p=>{
            let n = p + 1
            if(n >=( listCamera?.length ?? 0)){
                n = 0 
            }
            if(listCamera?.[n]?.id){
                qrScanner?.setCamera(listCamera?.[n]?.id)
            }
            return n
        })
    }, [qrScanner,listCamera]);

    const onScan = useCallback(
        (v?: string) => {
            if (v) {
                onChange?.(v);
                onStoptScan();
            }
        },
        [qrScanner],
    );

    const { onAction } = useAction<string>({
        name: `input-scanner-qr-${uuid}`,
        onActionExecute: onScan,
    });

    const onLoad = () => {
        if (ref.current) {
            const qrScanner = new QrScanner(ref.current, onAction);
            qrScanner.stop();
            setQrScanner(qrScanner);
            (async () => {
                setListCamera( await QrScanner.listCameras());
                setHasFlash( await QrScanner.hasCamera())
            })();
        } else {
            setTimeout(onStartScan, 500);
        }
    };

    useEffect(onLoad, []);

    return (
        <>
            <div
                className={`
                    fenext-input-scanner-qr
                    fenext-input-scanner-qr-n-camera-${nCamera}
                    fenext-input-scanner-qr-${showScanner ? "show" : "hidden"}
                    ${className ?? ""}
                `}
            >
                <Button
                    className="fenext-input-scanner-qr-btn-scanner"
                    onClick={onStartScan}
                >
                    {buttonScannerContent}
                </Button>
                <Modal active={showScanner} type="full" onClose={onStoptScan}>
                    <video
                        ref={ref}
                        className="fenext-input-scanner-qr-video"
                    ></video>
                    {
                        listCamera && listCamera.length > 1 &&
                        <Button
                            className="fenext-input-scanner-qr-btn-change-camera"
                            onClick={onChangeCamera}
                        >
                            {buttonChangeCameraContent}
                        </Button>
                    }
                    {
                        hasFlash && 
                        <Button
                            className="fenext-input-scanner-qr-btn-flash"
                            onClick={onToggleFlash}
                        >
                            {buttonToggleFlashContent}
                        </Button>
                    }
                </Modal>
            </div>
        </>
    );
};
