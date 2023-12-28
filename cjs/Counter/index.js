"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const NumberCount_1 = require("fenextjs-functions/cjs/parse/NumberCount");
const fenextjs_functions_1 = require("fenextjs-functions");
const Counter = ({ className = "", classNameNumber = "", classNameText = "", number = 0, text = undefined, time = 1000, decimal = 2, parseNumber = NumberCount_1.parseNumberCount, _t, }) => {
    const [numberShow, setNumberShow] = (0, react_1.useState)(0);
    const onIncrementeNumber = async () => {
        const dis = number - numberShow;
        const inc = dis / (time / 50);
        for (let i = 0; i < Math.abs(dis); i += Math.abs(inc)) {
            setNumberShow((pre) => pre + inc);
            await new Promise((r) => setTimeout(r, 50));
        }
        setNumberShow(number);
    };
    (0, react_1.useEffect)(() => {
        onIncrementeNumber();
    }, [number]);
    const formatNumber = (n) => {
        if (n % 1 === 0) {
            return n;
        }
        return parseFloat(n.toFixed(decimal));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-counter ${className} ` },
            text && (react_1.default.createElement("div", { className: `fenext-counter-text ${classNameText} ` }, (0, fenextjs_functions_1._tValidate)(text, _t))),
            react_1.default.createElement("div", { className: `fenext-counter-number ${classNameNumber} ` },
                react_1.default.createElement("span", { className: `fenext-counter-number-rel ` }, parseNumber(formatNumber(number))),
                react_1.default.createElement("span", { className: `fenext-counter-number-abs ` }, parseNumber(formatNumber(numberShow)))))));
};
exports.Counter = Counter;
//# sourceMappingURL=index.js.map