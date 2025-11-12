"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGallery = void 0;
const tslib_1 = require("tslib");
const GridGallery_1 = require("../../GridGallery");
const Button_1 = require("../../Button");
const Img_1 = require("../Img");
const react_1 = tslib_1.__importStar(require("react"));
const fenextjs_hook_1 = require("fenextjs-hook");
const InputGallery = ({ className = "", classNameContentButton = "", classNameButton = {}, textBtn = "Add More Images", defaultValue = [
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
    {
        fileData: "",
        text: "",
    },
], value = undefined, onChange, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
    const [items_, setItems] = (0, react_1.useState)(defaultValue);
    const onChangeItem = (i) => (data) => {
        setItems((pre) => {
            const n = [...pre];
            n[i] = data;
            onChange?.(n);
            return n;
        });
    };
    const onAddItem = () => {
        setItems((pre) => {
            const n = [
                ...pre,
                {
                    fileData: "",
                    text: "",
                },
            ];
            onChange?.(n);
            return n;
        });
    };
    const onRemoveItem = (i) => () => {
        setItems((pre) => {
            const n = [...pre].filter((e, j) => e && i != j);
            onChange?.(n);
            return n;
        });
    };
    const items = (0, react_1.useMemo)(() => {
        return (value ?? items_).map((item, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Img_1.InputImg, { ...props, defaultValue: item, onChange: onChangeItem(i), onRemove: onRemoveItem(i), _t: _t })));
        });
    }, [items_, value, _t]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-input-gallery ${className} ` },
            react_1.default.createElement(GridGallery_1.GridGallery, { items: [
                    ...items,
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("div", { className: `fenext-input-gallery-content-btn ${classNameContentButton}` },
                            react_1.default.createElement(Button_1.Button, { ...classNameButton, className: `fenext-input-gallery-btn-add ${classNameButton.className}`, onClick: onAddItem }, _t(textBtn)))),
                ], _t: _t }))));
};
exports.InputGallery = InputGallery;
