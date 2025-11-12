"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderUser = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Line_1 = require("../Line");
const LoaderUser = ({ classNameLoaderUser = "", classNameLoaderUserImg = "", classNameLoaderUserName = "", classNameLoaderUserEmail = "", }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-loader-user ${classNameLoaderUser}` },
            react_1.default.createElement(Line_1.LoaderLine, { classNameLoaderLine: `fenext-loader-user-img ${classNameLoaderUserImg}` }),
            react_1.default.createElement(Line_1.LoaderLine, { classNameLoaderLine: `fenext-loader-user-name ${classNameLoaderUserName}` }),
            react_1.default.createElement(Line_1.LoaderLine, { classNameLoaderLine: `fenext-loader-user-email ${classNameLoaderUserEmail}` }))));
};
exports.LoaderUser = LoaderUser;
