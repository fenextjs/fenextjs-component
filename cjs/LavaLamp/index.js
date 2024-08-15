"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LavaLamp = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const LavaLamp = ({ className = "", nItems = 20, styles = {
    width: "100%",
    height: "500px",
    background: `linear-gradient(45deg,var(--fenext-color-blue) 0%,var(--fenext-color-teal) 100%)`,
}, stylesElement = [
    {
        width: "150px",
        aspectRatio: "2/1.5",
        borderRadius: "30% 70% 70% 30% / 68% 30% 70% 32% ",
        background: `linear-gradient(45deg,var(--fenext-color-blue) 0%,var(--fenext-color-teal) 100%)`,
        animationTimingFunction: "ease",
    },
    {
        width: "100px",
        aspectRatio: "1 / 1",
        borderRadius: "30% 70% 44% 56% / 23% 46% 54% 77% ",
        background: `linear-gradient(75deg,var(--fenext-color-info) 0%,var(--fenext-color-indigo) 100%)`,
        animationTimingFunction: "ease-out",
    },
    {
        width: "100px",
        aspectRatio: "1 / 1",
        borderRadius: "87% 13% 65% 35% / 46% 46% 54% 54% ",
        background: `linear-gradient(135deg,var(--fenext-color-cyan) 0%,var(--fenext-color-purple) 100%)`,
        animationTimingFunction: "linear",
    },
], ranges = {}, }) => {
    const getNumberRandom = ({ min, max }) => {
        return Math.trunc(Math.random() * (max - min) + min);
    };
    const getPosRandom = () => {
        const pos = {
            top: `${getNumberRandom(ranges?.top ?? { min: 20, max: 80 })}%`,
            left: `${getNumberRandom(ranges?.left ?? { min: 20, max: 80 })}%`,
        };
        return pos;
    };
    const getVarRandom = () => {
        return {
            ["--scale"]: getNumberRandom(ranges?.scale ?? { min: 50, max: 100 }) / 10,
            ["--move-X"]: `${getNumberRandom(ranges?.moveX ?? { min: -300, max: 300 })}%`,
            ["--move-Y"]: `${getNumberRandom(ranges?.moveY ?? { min: -300, max: 300 })}%`,
            ["--time"]: `${getNumberRandom(ranges?.time ?? { min: 30, max: 50 }) / 10}s`,
        };
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-lava-lamp ${className} `, style: styles }, new Array(nItems).fill(1).map((e, i) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: e * i, className: "fenext-lava-lamp-item", style: {
                        ...stylesElement[Math.trunc(i % stylesElement.length)],
                        ...getPosRandom(),
                        ...getVarRandom(),
                    } })));
        }))));
};
exports.LavaLamp = LavaLamp;
//# sourceMappingURL=index.js.map