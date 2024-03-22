"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const Base_1 = require("../../Modal/Base");
const Upload_1 = require("../../Input/Upload");
const Button_1 = require("../../Button");
const GridGallery_1 = require("../../GridGallery");
const Page_1 = require("../Page");
const MediaInput = ({ className = "", titleView = "Upload Image", textView = "Click for select or upload Image.", iconView = undefined, defaultValue = undefined, multiple = false, onChange, ButtonUploadProps = {
    children: "Upload Image",
    full: true,
}, MediaPageProps = {}, ModalProps = {
    type: "full",
}, _t, }) => {
    const [modalActive, setModalActive] = (0, react_1.useState)(false);
    const { data, onChangeData, onDeleteData, setData } = (0, fenextjs_hook_1.useData)([defaultValue ?? []].flat(2), {
        onChangeDataAfter: (d) => {
            if (multiple) {
                onChange?.(d);
            }
            else {
                onChange?.(d?.[0]);
            }
        },
    });
    const onOpen = () => {
        setModalActive(true);
    };
    const onClose = () => {
        setModalActive(false);
    };
    const onAddImg = (data = []) => {
        const d = [data].flat(2).map((e) => ({
            ...e,
            name: `${new Date().getTime()}_${e.name}`,
        }));
        setData(d);
    };
    const onAcepteImg = (data) => {
        onAddImg(data);
        onClose();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-media ${className} ` },
            data == undefined || data.length == 0 ? (react_1.default.createElement("div", { onClick: onOpen, className: "fenext-media-element-show-modal" },
                react_1.default.createElement(Upload_1.InputUpload, { disabled: true, title: titleView, text: textView, icon: iconView, _t: _t }),
                react_1.default.createElement("div", { className: "fenext-media-btn-modal" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            react_1.default.createElement(GridGallery_1.GridGallery, { _t: _t, items: [data]
                    ?.flat(2)
                    .splice(0, multiple ? data.length : 1)
                    .map((item, i) => {
                    return (react_1.default.createElement(Upload_1.InputUpload, { key: `${i}-${JSON.stringify(item ?? {})}`, disabled: data === undefined, title: titleView, text: textView, defaultValue: {
                            fileData: item.src,
                            text: item.name,
                        }, onChange: (e) => {
                            if (e.fileData) {
                                onChangeData(i)({
                                    src: e.fileData,
                                    name: e.text,
                                });
                            }
                            else {
                                onDeleteData(i);
                            }
                        }, tagPreview: "img", _t: _t }));
                }) }),
            multiple ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Button_1.Button, { ...ButtonUploadProps, onClick: onOpen, _t: _t }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            react_1.default.createElement(Base_1.ModalBase, { ...ModalProps, onClose: onClose, active: modalActive },
                react_1.default.createElement(Page_1.MediaPage, { ...MediaPageProps, key: JSON.stringify(data), multiple: multiple, onChange: onAddImg, defaultValue: data, onAcepte: onAcepteImg, isPage: false, _t: _t })))));
};
exports.MediaInput = MediaInput;
//# sourceMappingURL=index.js.map