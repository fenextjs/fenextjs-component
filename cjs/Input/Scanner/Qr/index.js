"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputScannerQr = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const qr_scanner_1 = tslib_1.__importDefault(require("qr-scanner"));
const Button_1 = require("../../../Button");
const Modal_1 = require("../../../Modal");
const Qr_1 = require("fenextjs-svg/cjs/Qr");
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_hook_1 = require("fenextjs-hook");
const fenextjs_svg_1 = require("fenextjs-svg");
const InputScannerQr = ({ className = "", onChange, buttonScannerContent = react_1.default.createElement(Qr_1.SvgQr, null), buttonChangeCameraContent = react_1.default.createElement(fenextjs_svg_1.SvgCameraChange, null), buttonToggleFlashContent = react_1.default.createElement(fenextjs_svg_1.SvgBolt, null), }) => {
    const uuid = (0, react_1.useMemo)(() => (0, fenextjs_functions_1.generateRandomID)(), []);
    const ref = (0, react_1.useRef)(null);
    const [showScanner, setShowScanner] = (0, react_1.useState)(false);
    const [hasFlash, setHasFlash] = (0, react_1.useState)(false);
    const [nCamera, setNCamera] = (0, react_1.useState)(0);
    const [listCamera, setListCamera] = (0, react_1.useState)(undefined);
    const [qrScanner, setQrScanner] = (0, react_1.useState)(undefined);
    const onStoptScan = (0, react_1.useCallback)(() => {
        setShowScanner(false);
        qrScanner?.stop();
    }, [qrScanner]);
    const onStartScan = (0, react_1.useCallback)(() => {
        setShowScanner(true);
        qrScanner?.start();
    }, [qrScanner]);
    const onToggleFlash = (0, react_1.useCallback)(() => {
        qrScanner?.toggleFlash();
    }, [qrScanner]);
    const onChangeCamera = (0, react_1.useCallback)(() => {
        setNCamera((p) => {
            let n = p + 1;
            if (n >= (listCamera?.length ?? 0)) {
                n = 0;
            }
            if (listCamera?.[n]?.id) {
                qrScanner?.setCamera(listCamera?.[n]?.id);
            }
            return n;
        });
    }, [qrScanner, listCamera]);
    const onScan = (0, react_1.useCallback)((v) => {
        if (v) {
            onChange?.(v);
            onStoptScan();
        }
    }, [qrScanner]);
    const { onAction } = (0, fenextjs_hook_1.useAction)({
        name: `input-scanner-qr-${uuid}`,
        onActionExecute: onScan,
    });
    const onLoad = () => {
        if (ref.current) {
            const qrScanner = new qr_scanner_1.default(ref.current, onAction);
            qrScanner.stop();
            setQrScanner(qrScanner);
            (async () => {
                setListCamera(await qr_scanner_1.default.listCameras());
                setHasFlash(await qr_scanner_1.default.hasCamera());
            })();
        }
        else {
            setTimeout(onStartScan, 500);
        }
    };
    (0, react_1.useEffect)(onLoad, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `
                    fenext-input-scanner-qr
                    fenext-input-scanner-qr-n-camera-${nCamera}
                    fenext-input-scanner-qr-${showScanner ? "show" : "hidden"}
                    ${className ?? ""}
                ` },
            react_1.default.createElement(Button_1.Button, { className: "fenext-input-scanner-qr-btn-scanner", onClick: onStartScan }, buttonScannerContent),
            react_1.default.createElement(Modal_1.Modal, { active: showScanner, type: "full", onClose: onStoptScan },
                react_1.default.createElement("video", { ref: ref, className: "fenext-input-scanner-qr-video" }),
                listCamera && listCamera.length > 1 && (react_1.default.createElement(Button_1.Button, { className: "fenext-input-scanner-qr-btn-change-camera", onClick: onChangeCamera }, buttonChangeCameraContent)),
                hasFlash && (react_1.default.createElement(Button_1.Button, { className: "fenext-input-scanner-qr-btn-flash", onClick: onToggleFlash }, buttonToggleFlashContent))))));
};
exports.InputScannerQr = InputScannerQr;
//# sourceMappingURL=index.js.map