"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputUpload = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const File_1 = require("../File");
const Title_1 = require("../../Title");
const Button_1 = require("../../Button");
const Text_1 = require("../../Text");
const Upload_1 = require("fenextjs-svg/cjs/Upload");
const useData_1 = require("fenextjs-hook/cjs/useData");
const close_1 = require("fenextjs-svg/cjs/close");
const Collapse_1 = require("../../Collapse");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputUpload = ({ className = "", classNameBtn = {}, classNameContentIcon = "", classNameText = {}, classNamePreview = "", classNameTitle = {
    tag: "h2",
}, classNameUp = "", classNameProgress = "", classNameRemove = "", btn = "Choose File", icon = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Upload_1.Upload2, null))), text = "Drag and drop your file or template here.", title = "Drag and drop here", textPreview = "Preview File", defaultValue = {
    fileData: "",
    text: "",
}, parseProgress = (e) => `Uploading . . . ${e.toFixed(0)}%`, onChange, tagPreview = "iframe", _t, ...props }) => {
    const { data, setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const [progress, setProgress] = (0, react_1.useState)(-1);
    const { data: error, setData: setError } = (0, useData_1.useData)(undefined);
    const TAGPREVIEW = (0, react_1.useMemo)(() => {
        if (data.extend) {
            if (["png", "jpeg", "jpg", "gif", "webp"].includes(data.extend)) {
                return "img";
            }
        }
        return tagPreview;
    }, [tagPreview, data]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-upload ${className} ${progress > 0 && progress < 100
                ? "fenext-input-upload-in-progress"
                : ""} ${data?.fileData && data?.fileData != ""
                ? "fenext-input-upload-ok"
                : ""} ${error ? "fenext-input-upload-error" : ""}` }, data.fileData && data.fileData != "" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `fenext-input-upload-up ${classNameUp}` },
                react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-upload-title ${classNameTitle.className}` }, (0, fenextjs_functions_1._tValidate)(data?.text, _t)),
                react_1.default.createElement(Collapse_1.Collapse, { header: react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(Text_1.Text, { ...classNameText, className: `fenext-input-upload-text ${classNameText.className}` }, (0, fenextjs_functions_1._tValidate)(textPreview, _t))) },
                    react_1.default.createElement(TAGPREVIEW, { src: data.fileData, className: `fenext-input-upload-preview ${classNamePreview}` })),
                !props.disabled && (react_1.default.createElement("div", { className: `fenext-input-upload-remove ${classNameRemove}`, onClick: () => {
                        setData({
                            fileData: "",
                            text: "",
                        });
                    } },
                    react_1.default.createElement(close_1.Close, null)))))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(File_1.InputFile, { onChange: setData, parseProgress: () => "", onChangeProgress: setProgress, onChangeError: setError, ...props, _t: _t },
                react_1.default.createElement("div", { className: `fenext-input-upload-up ${classNameUp}` },
                    progress > 0 && progress < 100 ? (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-upload-progress ${classNameProgress}` }, parseProgress(progress))) : (react_1.default.createElement(Title_1.Title, { ...classNameTitle, className: `fenext-input-upload-title ${classNameTitle.className}` }, (0, fenextjs_functions_1._tValidate)(title, _t))),
                    react_1.default.createElement("div", { className: `fenext-input-upload-content-icon ${classNameContentIcon}` }, icon),
                    react_1.default.createElement(Button_1.Button, { ...classNameBtn, className: `fenext-input-upload-btn ${classNameBtn.className}` }, (0, fenextjs_functions_1._tValidate)(btn, _t)),
                    react_1.default.createElement(Text_1.Text, { ...classNameText, className: `fenext-input-upload-text ${classNameText.className}` }, (0, fenextjs_functions_1._tValidate)(text, _t)))))))));
};
exports.InputUpload = InputUpload;
//# sourceMappingURL=index.js.map