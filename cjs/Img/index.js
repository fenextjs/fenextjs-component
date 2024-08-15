"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Img = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Line_1 = require("../Loader/Line");
const Img = ({ className = "", classNameImg = "", id, name = "", src, srcMin1920 = undefined, srcMin1680 = undefined, srcMin1440 = undefined, srcMin1024 = undefined, srcMin992 = undefined, srcMin768 = undefined, srcMin575 = undefined, imgIf404 = "", layers = [], onErrorImg: onErrorImg_, onClick, loader = false, }) => {
    const onErrorImg = (e) => {
        const img = e.target;
        img.src = imgIf404;
        onErrorImg_?.(e);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("picture", { className: `fenext-picture ${className} id-${id}`, onClick: onClick },
            srcMin1920 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin1920}`, media: "(min-width: 1920px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin1680 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin1680}`, media: "(min-width: 1680px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin1440 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin1440}`, media: "(min-width: 1440px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin1024 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin1024}`, media: "(min-width: 1024px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin992 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin992}`, media: "(min-width: 992px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin768 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin768}`, media: "(min-width: 768px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            srcMin575 ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("source", { srcSet: `${srcMin575}`, media: "(min-width: 575px)" }))) : (react_1.default.createElement(react_1.default.Fragment, null)),
            loader && react_1.default.createElement(Line_1.LoaderLine, null),
            react_1.default.createElement("img", { src: `${src}`, "data-src": `${src}`, alt: name, className: `fenext-img ${classNameImg}`, onError: onErrorImg }),
            layers?.map((e, i) => (react_1.default.createElement("div", { key: i, className: "fenext-img-layer", style: e }))))));
};
exports.Img = Img;
//# sourceMappingURL=index.js.map