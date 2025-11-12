"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputImg = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const File_1 = require("../File");
const Title_1 = require("../../Title");
const Text_1 = require("../../Text");
const Img_1 = require("fenextjs-svg/cjs/Img");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Close_1 = require("fenextjs-svg/cjs/Close");
const fenextjs_hook_1 = require("fenextjs-hook");
const InputImg = ({ className = "", classNameContentIcon = "", classNameText = {}, classNameTitle = {
    tag: "h2",
}, classNameUp = "", classNameProgress = "", classNameRemove = "", classNameImg = "", icon = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Img_1.SvgImg, null))), text = "Drag Image", title = "Add Image", defaultValue = {
    fileData: "",
    text: "",
}, parseProgress = (e) => `Imging . . . ${e.toFixed(0)}%`, onChange, onRemove, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const { data, setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const [progress, setProgress] = (0, react_1.useState)(-1);
    const { data: error, setData: setError } = (0, useData_1.useData)(undefined);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-img ${className} ${progress > 0 && progress < 100
                ? "fenext-input-img-in-progress"
                : ""} ${data?.fileData && data?.fileData != ""
                ? "fenext-input-img-ok"
                : ""} ${error ? "fenext-input-img-error" : ""}` }, data.fileData && data.fileData != "" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `fenext-input-img-up ${classNameUp}` },
                react_1.default.createElement("img", { src: data.fileData, className: `fenext-input-img-img ${classNameImg}` }),
                react_1.default.createElement("div", { className: `fenext-input-img-remove ${classNameRemove}`, onClick: () => {
                        setData({
                            fileData: "",
                            text: "",
                        });
                        onRemove?.();
                    } },
                    react_1.default.createElement(Close_1.SvgClose, null))))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(File_1.InputFile, { onChange: setData, parseProgress: () => "", onChangeProgress: setProgress, onChangeError: setError, accept: [
                    "jpg",
                    "jpeg",
                    "png",
                    "gif",
                    "svg",
                    "bmp",
                    "webp",
                ], ...props, _t: _t },
                react_1.default.createElement("div", { className: `fenext-input-img-up ${classNameUp}` },
                    react_1.default.createElement("div", { className: `fenext-input-img-content-icon ${classNameContentIcon}` }, icon),
                    progress > 0 && progress < 100 ? (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-img-progress ${classNameProgress}` }, parseProgress(progress))) : (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-img-title ${classNameTitle.className}` }, _t(title))),
                    react_1.default.createElement(Text_1.Text, { ...classNameText, className: `fenext-input-img-text ${classNameText.className}` }, _t(text)))))))));
};
exports.InputImg = InputImg;
