"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Img_1 = require("../Img");
const User_1 = require("../Loader/User");
const fenextjs_img_placeholder_1 = require("fenextjs-img-placeholder");
const User = ({ className = "", classNameEmail = "", classNamePicture = "", classNameImg = "", classNameName = "", classNameLoader = {}, user, loader = false, }) => {
    if (loader) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(User_1.LoaderUser, { ...classNameLoader })));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-user ${className} ` },
            react_1.default.createElement(Img_1.Img, { src: "", ...user?.img, className: `fenext-user-picture ${classNamePicture}`, classNameImg: `fenext-user-img ${classNameImg}`, imgIf404: fenextjs_img_placeholder_1.FenextImgUserPlaceholder }),
            react_1.default.createElement("div", { className: `fenext-user-name ${classNameName} ` }, user?.name),
            react_1.default.createElement("div", { className: `fenext-user-email ${classNameEmail} ` }, user?.email))));
};
exports.User = User;
//# sourceMappingURL=index.js.map