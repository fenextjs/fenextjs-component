"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chronometer = void 0;
const tslib_1 = require("tslib");
const fenextjs_functions_1 = require("fenextjs-functions");
const fenextjs_hook_1 = require("fenextjs-hook");
const react_1 = tslib_1.__importStar(require("react"));
const Chronometer = ({ className = "", time = 100, min = 0, onChange, optionsTimeToText = {
    days: false,
    hours: true,
    minutes: true,
    seconds: true,
}, }) => {
    const { data, setData } = (0, fenextjs_hook_1.useData)(time, {
        onChangeDataAfter: onChange,
    });
    const onReduce = (0, react_1.useCallback)(() => {
        setData(Math.max(data - 1, min));
    }, [data]);
    (0, react_1.useEffect)(() => {
        const intervalId = setInterval(onReduce, 1000);
        return () => clearInterval(intervalId);
    }, [data]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-chronometer ${className} ` }, (0, fenextjs_functions_1.getTimeToText)(new Date(0, 0, 0, 0, 0, data, 0), optionsTimeToText))));
};
exports.Chronometer = Chronometer;
//# sourceMappingURL=index.js.map