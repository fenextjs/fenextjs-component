"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFileStatus = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const File_1 = require("../File");
const Title_1 = require("../../Title");
const Button_1 = require("../../Button");
const Text_1 = require("../../Text");
const Upload_1 = require("fenextjs-svg/cjs/Upload");
const Check_1 = require("fenextjs-svg/cjs/Check");
const useData_1 = require("fenextjs-hook/cjs/useData");
const Close_1 = require("fenextjs-svg/cjs/Close");
const fenextjs_hook_1 = require("fenextjs-hook");
const Loader_1 = require("../../Loader");
const Error_1 = require("../../Error");
const Link_1 = require("../../Link");
const InputFileStatus = ({ className = "", btn = "Choose File", icon = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Upload_1.SvgUpload2, null))), text = "Drag and drop your file or template here.", title = "Drag and drop here", defaultValue = {
    fileData: "",
    text: "",
}, onChange, iconLoader = react_1.default.createElement(Loader_1.LoaderSpinner, null), onUploadFile, contentByStatus: contentByStatusProps = {}, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const contentByStatus = (0, react_1.useMemo)(() => ({
        APPROVED: {
            title: "Approved!",
            tag: "Accepted",
            icon: react_1.default.createElement(Check_1.SvgCheck, null),
        },
        REFUSED: {
            title: "Refused! go up again",
            tag: "Denied",
            icon: react_1.default.createElement(Upload_1.SvgUpload2, null),
        },
        PENDING: {
            title: "Pending",
            tag: "Pending",
            icon: react_1.default.createElement(Upload_1.SvgUpload2, null),
        },
        ...contentByStatusProps,
    }), [contentByStatusProps]);
    const { data, setData, dataError, onSubmitData, loaderSubmit } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
        onSubmitData: onUploadFile,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-file-status fenext-input-file-status-${data?.status ?? "NONE"} ${className}` }, !dataError &&
            !loaderSubmit &&
            data?.fileData &&
            data?.fileData != "" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `fenext-input-file-status-up ` },
                react_1.default.createElement(Title_1.Title, { className: `fenext-input-file-status-title ` }, _t(contentByStatus?.[data?.status ?? "NONE"]
                    ?.title ?? title)),
                react_1.default.createElement("div", { className: `fenext-input-file-status-content-icon` }, contentByStatus?.[data?.status ?? "NONE"]
                    ?.icon ?? icon),
                react_1.default.createElement("div", { className: `fenext-input-file-status-tag` },
                    react_1.default.createElement(Text_1.Text, null, _t(contentByStatus?.[data?.status ?? "NONE"]?.tag))),
                react_1.default.createElement(Link_1.Link, { href: data?.url ?? data?.base64 ?? data?.fileData, target: "_blank", className: `fenext-input-file-status-link ` }, data.text),
                !props.disabled && (react_1.default.createElement("div", { className: `fenext-input-file-status-remove `, onClick: () => {
                        setData({
                            fileData: "",
                            text: "",
                        });
                    } },
                    react_1.default.createElement(Close_1.SvgClose, null)))))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(File_1.InputFile, { onChange: (e) => {
                    onSubmitData({
                        data: e,
                        onSaveData: ({ result }) => {
                            return result;
                        },
                    });
                }, parseProgress: () => "", ...props, _t: _t },
                react_1.default.createElement("div", { className: `fenext-input-file-status-up ` },
                    react_1.default.createElement(Title_1.Title, { className: `fenext-input-file-status-title ` }, _t(title)),
                    react_1.default.createElement("div", { className: `fenext-input-file-status-content-icon` }, loaderSubmit ? iconLoader : icon),
                    react_1.default.createElement(Button_1.Button, { className: `fenext-input-file-status-btn ` }, _t(btn)),
                    react_1.default.createElement(Text_1.Text, { className: `fenext-input-file-status-text ` }, _t(text)),
                    dataError && (react_1.default.createElement(Error_1.ErrorComponent, { error: dataError })))))))));
};
exports.InputFileStatus = InputFileStatus;
