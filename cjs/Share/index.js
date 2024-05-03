"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Modal_1 = require("../Modal");
const Button_1 = require("../Button");
const Title_1 = require("../Title");
const Whatsapp_1 = require("fenextjs-svg/cjs/Whatsapp");
const Facebook_1 = require("fenextjs-svg/cjs/Facebook");
const Twitter_1 = require("fenextjs-svg/cjs/Twitter");
const Email_1 = require("fenextjs-svg/cjs/Email");
const Copy_1 = require("fenextjs-svg/cjs/Copy");
const Copy_2 = require("../Copy");
const fenextjs_functions_1 = require("fenextjs-functions");
const Share = ({ className = "", share = "", ButtonProps = {
    children: "Share",
}, TitleProps = {
    children: "Share",
    tag: "h2",
}, shareList = ["whatsapp", "facebook", "twitter", "email", "copy"], showShareCopy = false, _t, }) => {
    const LISTSHARE = {
        whatsapp: {
            urlShare: "https://web.whatsapp.com/share?url=",
            icon: react_1.default.createElement(Whatsapp_1.WhatsappBox, null),
        },
        facebook: {
            urlShare: "https://www.facebook.com/sharer/sharer.php?u=",
            icon: react_1.default.createElement(Facebook_1.FacebookBox, null),
        },
        twitter: {
            urlShare: "https://x.com/share?text=",
            icon: react_1.default.createElement(Twitter_1.TwitterBox, null),
        },
        email: {
            urlShare: "mailto:?body=",
            icon: react_1.default.createElement(Email_1.EmailBox, null),
        },
        copy: {
            urlShare: "",
            icon: react_1.default.createElement(Copy_1.SvgCopyBox, null),
        },
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-share ${className} ` },
            react_1.default.createElement(Modal_1.Modal, { ElementActionModalActive: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Button_1.Button, { ...ButtonProps })) },
                react_1.default.createElement(Title_1.Title, { ...TitleProps, _t: _t }),
                react_1.default.createElement("div", { className: "fenext-share-items" }, shareList.map((e, i) => {
                    const key = e;
                    const item = LISTSHARE[key];
                    if (key === "copy") {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(Copy_2.Copy, { key: i, className: `fenext-share-item fenext-share-item-${key}`, text: share, _t: _t }, item.icon)));
                    }
                    return (react_1.default.createElement("a", { href: `${item.urlShare}${share}`, key: i, className: `fenext-share-item fenext-share-item-${key}`, target: "_blank" }, (0, fenextjs_functions_1._tValidate)(item.icon, _t)));
                })),
                showShareCopy && (react_1.default.createElement("div", { className: "fenext-share-copy" },
                    react_1.default.createElement(Copy_2.Copy, { className: `fenext-share-copy`, text: share, _t: _t }, share)))))));
};
exports.Share = Share;
//# sourceMappingURL=index.js.map