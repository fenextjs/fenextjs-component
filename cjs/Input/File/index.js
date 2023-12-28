"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFile = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const env_log_1 = require("fenextjs-functions/cjs/env_log");
const File_1 = require("fenextjs-functions/cjs/parse/File");
const useData_1 = require("fenextjs-hook/cjs/useData");
const fenextjs_functions_1 = require("fenextjs-functions");
const InputFile = ({ defaultValue = {
    fileData: "",
    text: "",
}, className = "", classNameLabel = "", classNameContent = "", classNameInput = "", classNameError = "", onChange = (v) => {
    (0, env_log_1.env_log)(v, {
        name: "onChange File",
    });
}, accept = [], children, clearAfterUpload = false, MAX_SIZE_FILE = 5000000, _t = (e) => e, parseProgress = (e) => e, onChangeProgress, onChangeError, disabled = false, textMaxSizeFile = "File max size", ...props }) => {
    const onUploadFile = async (data) => {
        if (props?.onUploadFile) {
            const r = await props?.onUploadFile(data);
            if (r) {
                return r;
            }
        }
        const fileData = await (0, File_1.parseFile)(data.file, {
            updateProgress: data.setProgress,
        });
        return {
            fileData,
            text: data.nameFile,
            extend: data.extend,
        };
    };
    const { data: error, setData: setError } = (0, useData_1.useData)(undefined, {
        onChangeDataAfter: onChangeError,
    });
    const ref = (0, react_1.useRef)(null);
    const { setData } = (0, useData_1.useData)(defaultValue, {
        onChangeDataAfter: onChange,
    });
    const { data: progress, setData: setProgress } = (0, useData_1.useData)(-1, {
        onChangeDataAfter: onChangeProgress,
    });
    const validateAccept = (nameFile) => {
        const extend = nameFile.split(".").pop()?.toLowerCase();
        if (accept.length != 0 &&
            extend &&
            !accept.map((e) => e.toLowerCase()).includes(extend)) {
            throw "File Invalid";
        }
        return extend;
    };
    const uploadFile = async (e) => {
        try {
            setError(undefined);
            const file = e.target.files[0];
            if (!file) {
                setProgress(-2);
                setData({
                    fileData: "",
                    text: "",
                });
                return;
            }
            if (file?.size > MAX_SIZE_FILE) {
                throw `${(0, fenextjs_functions_1._tValidate)(textMaxSizeFile, _t)} ${MAX_SIZE_FILE / 1000000}mb`;
            }
            const nameFile = e.target.value.split("\\").pop();
            (0, env_log_1.env_log)(nameFile, {
                name: "nameFile",
            });
            const extend = validateAccept(nameFile);
            const result = await onUploadFile({
                file,
                setFileData: setData,
                nameFile,
                setProgress,
                extend: extend ?? "",
            });
            setData(result);
            if (clearAfterUpload) {
                e.target.value = null;
                e.target.type = "text";
                setTimeout(() => {
                    e.target.type = "file";
                }, 100);
                if (ref?.current) {
                    ref.current.value = null;
                }
            }
        }
        catch (e) {
            setError({
                message: `${e}`,
                data: e,
            });
            setProgress(-2);
            setData({
                fileData: "",
                text: "",
            });
            (0, env_log_1.env_log)(e, {
                name: "error upload file",
                color: "red",
            });
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-file ${className}` },
            react_1.default.createElement("label", { className: `fenext-input-file-label ${classNameLabel}` },
                react_1.default.createElement("div", { className: `fenext-input-file-content ${classNameContent}` }, children),
                react_1.default.createElement("input", { ref: ref, type: "file", className: `fenext-input-file-input ${classNameInput}`, onChange: uploadFile, accept: accept.map((e) => `.${e}`).join(","), disabled: disabled })),
            progress > 0 && progress < 100 && parseProgress(progress),
            error && (react_1.default.createElement("div", { className: `fenext-error ${classNameError}` }, error.message)))));
};
exports.InputFile = InputFile;
//# sourceMappingURL=index.js.map