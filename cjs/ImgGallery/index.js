"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgGallery = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Button_1 = require("../Button");
const GridGallery_1 = require("../GridGallery");
const Base_1 = require("../Modal/Base");
const Img_1 = require("../Img");
const ImgSlider_1 = require("../ImgSlider");
const ImgGallery = ({ className = "", imgs, buttonShowMoreImg = {
    children: "Show more pictures",
}, buttonHiddenMoreImg = {
    children: "Hidden pictures",
}, loader = false, nLoader = 5, _t, }) => {
    const [showAllImg, setShowAllImg] = (0, react_1.useState)(false);
    const [activeModal, setActiveModal] = (0, react_1.useState)(false);
    const [steps, setSteps] = (0, react_1.useState)(0);
    const onClickImg = (i) => () => {
        setActiveModal(true);
        setSteps(i);
    };
    const onClose = () => {
        setActiveModal(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-img-gallery ${className} ` },
            react_1.default.createElement(Base_1.ModalBase, { active: activeModal, onClose: onClose, type: "full", _t: _t },
                react_1.default.createElement(ImgSlider_1.ImgSlider, { imgs: imgs, step: steps, setStep: setSteps, _t: _t })),
            loader ? (react_1.default.createElement(GridGallery_1.GridGallery, { items: new Array(nLoader).fill(1).map((e, i) => {
                    return (react_1.default.createElement(Img_1.Img, { key: i * e, src: "", loader: true, _t: _t }));
                }), _t: _t })) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(GridGallery_1.GridGallery, { _t: _t, items: [...imgs]
                        .splice(0, showAllImg ? imgs.length + 1 : 5)
                        .map((e, i) => {
                        return (react_1.default.createElement(Img_1.Img, { key: i, ...e, onClick: onClickImg(i), _t: _t }));
                    }) }),
                imgs.length > 5 && !showAllImg ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `fenext-img-gallery-content-btn` },
                        react_1.default.createElement(Button_1.Button, { ...buttonShowMoreImg, onClick: () => {
                                setShowAllImg(true);
                            }, _t: _t })))) : (react_1.default.createElement(react_1.default.Fragment, null)),
                showAllImg && (react_1.default.createElement("div", { className: `fenext-img-gallery-content-btn` },
                    react_1.default.createElement(Button_1.Button, { ...buttonHiddenMoreImg, _t: _t, onClick: () => {
                            setShowAllImg(false);
                        } }))))))));
};
exports.ImgGallery = ImgGallery;
//# sourceMappingURL=index.js.map