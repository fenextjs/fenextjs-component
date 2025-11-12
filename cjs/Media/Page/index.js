"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Img_1 = require("../../Img");
const Upload_1 = require("../../Input/Upload");
const Title_1 = require("../../Title");
const Text_1 = require("../../Text");
const Button_1 = require("../../Button");
const Loader_1 = require("../../Loader");
const Base64ToImgData_1 = require("fenextjs-functions/cjs/parse/Img/Base64ToImgData");
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const Trash_1 = require("fenextjs-svg/cjs/Trash");
const Save_1 = require("fenextjs-svg/cjs/Save");
const fenextjs_hook_2 = require("fenextjs-hook");
const MediaPage = ({ className = "", multiple = false, onChange, onUploadImg, onDeleteImg, onAcepte, HeaderPage = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Title_1.Title, { tag: "h3" }, "Media"),
    react_1.default.createElement(Text_1.Text, null, "Upload or Select Imagen."))), defaultValue, images = [], loaderImages = false, disabledSelectImg = false, InputUploadProps = {
    accept: ["png", "jpg", "jpeg", "webp"],
    title: "Upload Imagen",
    text: "Click for select or upload Imagen.",
}, ButtonAcceptProps = {
    children: "Acepte",
}, ButtonCancelProps = {
    children: "Cancel",
}, isPage = true, extraContentImgs = undefined, onRenderImg = undefined, ...props }) => {
    const { _t } = (0, fenextjs_hook_2.use_T)({ ...props });
    const [keyInputUpload, setKeyInputUpload] = (0, react_1.useState)(0);
    const { data, onConcatData, onDeleteData, setData } = (0, fenextjs_hook_1.useData)([defaultValue ?? []].flat(2), {
        onChangeDataAfter: (d) => {
            if (multiple) {
                onChange?.(d);
            }
            else {
                onChange?.(d?.[0]);
            }
        },
    });
    const onSelectImg = (i) => () => {
        if (disabledSelectImg) {
            return;
        }
        const selected = images[i];
        const indexDelete = data.findIndex((e) => e.src == selected.src);
        if (indexDelete > -1) {
            onDeleteData(indexDelete);
            return;
        }
        if (multiple) {
            onConcatData([selected]);
        }
        else {
            setData([selected]);
        }
    };
    const onUploadImgFile = async (v) => {
        setKeyInputUpload(new Date().getTime());
        const img = await (0, Base64ToImgData_1.parseBase64ToImgData)({
            base64: v.fileData,
            name: v.text,
            quality: 0.7,
        });
        (0, env_log_1.env_log)(img, {
            name: "Img upload",
        });
        onUploadImg?.(img);
    };
    const onClickAcepte = () => {
        if (multiple) {
            onAcepte?.(data);
        }
        else {
            onAcepte?.(data?.[0]);
        }
    };
    const onClickCancel = () => {
        setData([]);
    };
    const LISTIMAGES = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement(react_1.default.Fragment, null, images.map((img, i) => {
            const active = data.find((e) => e.src == img.src) !== undefined;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: `${i}-${img.src}-${img?.id ?? ""}`, className: `fenext-media-page-img fenext-media-page-img-${active ? "active" : ""}`, onClick: onSelectImg(i) },
                    react_1.default.createElement("div", { className: `fenext-media-page-img-element` }, (onRenderImg ? (onRenderImg(img)) : (react_1.default.createElement(Img_1.Img, { ...img }))) ?? react_1.default.createElement(Img_1.Img, { ...img })),
                    react_1.default.createElement("div", { className: `fenext-media-page-img-capa` }),
                    react_1.default.createElement("div", { className: `fenext-media-page-img-actions` },
                        react_1.default.createElement("a", { className: `fenext-media-page-img-action fenext-media-page-img-download`, href: img.src, download: img.name ?? "download.png", target: "_blank" },
                            react_1.default.createElement(Save_1.SvgSave, null)),
                        react_1.default.createElement("div", { className: `fenext-media-page-img-action fenext-media-page-img-delete`, onClick: () => {
                                onDeleteImg?.(img);
                            } },
                            react_1.default.createElement(Trash_1.SvgTrash, null))))));
        })));
    }, [images, onRenderImg, onSelectImg, onDeleteImg, _t]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-media-page ${className} ` },
            react_1.default.createElement("div", { className: `fenext-media-page-top` },
                react_1.default.createElement("div", { className: `fenext-media-page-top-header` }, _t(HeaderPage)),
                react_1.default.createElement("div", { className: `fenext-media-page-top-btn-acepte` }, data.length != 0 && !isPage && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Button_1.Button, { ...ButtonCancelProps, onClick: onClickCancel, _t: _t }),
                    react_1.default.createElement(Button_1.Button, { ...ButtonAcceptProps, onClick: onClickAcepte, _t: _t }))))),
            react_1.default.createElement("div", { className: `fenext-media-page-upload` },
                react_1.default.createElement(Upload_1.InputUpload, { ...InputUploadProps, key: keyInputUpload, onChange: onUploadImgFile, clearAfterUpload: true, _t: _t })),
            react_1.default.createElement("div", { className: `fenext-media-page-imgs` },
                loaderImages ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `fenext-media-page-img fenext-media-page-img-loader` },
                        react_1.default.createElement(Loader_1.LoaderSpinner, null)))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                LISTIMAGES,
                extraContentImgs && (react_1.default.createElement("div", { className: `fenext-media-page-extra-content-imgs` }, _t(extraContentImgs)))))));
};
exports.MediaPage = MediaPage;
