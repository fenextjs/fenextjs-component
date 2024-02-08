"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Pagination_1 = require("fenextjs-svg/cjs/Pagination");
const fenextjs_functions_1 = require("fenextjs-functions");
const Slider = ({ className = "", classNameContent = "", classNameItem = "", classNameDogs = "", classNameDog = "", classNameArrows = "", classNameArrowPre = "", classNameArrowNext = "", items = [], nItemsDesktop = 3, nItemsTable = 2, nItemsPhone = 1, timeDelay = 4000, timeAnimation = 500, loop = true, separationItems = 16, _t, }) => {
    const SliderRef = (0, react_1.useRef)(null);
    const [currentDog, setCurrentDog] = (0, react_1.useState)(0);
    const [isHover, setIsHover] = (0, react_1.useState)(false);
    const getIsHover = () => SliderRef.current?.classList.value.includes("fenext-slider-content-hover");
    const getNItems = () => {
        let nItems = nItemsDesktop;
        if (window.innerWidth <= 991) {
            nItems = nItemsTable;
        }
        if (window.innerWidth <= 575) {
            nItems = nItemsPhone;
        }
        return nItems;
    };
    const getSizeElement = () => {
        return (SliderRef.current?.clientWidth ?? 0) / getNItems();
    };
    const onSetCurrentDog = (f) => (pre) => {
        const max = items.length - getNItems();
        const min = 0;
        const m = f(pre);
        let n = Math.max(min, Math.min(m, max));
        if (loop) {
            if (m > max) {
                n = 0;
            }
            if (m < 0) {
                n = max;
            }
        }
        SliderRef.current?.scrollTo?.(n * getSizeElement(), 0);
        return n;
    };
    const onScrollAdd = (add) => {
        setCurrentDog(onSetCurrentDog((pre) => pre + add));
    };
    const onScrollTo = (to) => {
        setCurrentDog(onSetCurrentDog(() => to));
    };
    const onScroll = (m) => () => {
        onScrollTo(m);
    };
    const onScrollToNext = () => {
        onScrollAdd(1);
    };
    const onScrollToPre = () => {
        onScrollAdd(-1);
    };
    const onLoop = async () => {
        if (loop) {
            await new Promise((r) => setTimeout(r, timeDelay));
            if (!getIsHover()) {
                onScrollToNext();
            }
            onLoop();
        }
    };
    const onLoadLoop = () => {
        onLoop();
    };
    const onLoadSlider = () => {
        if (SliderRef.current) {
            // onLoadTouchScroll(SliderRef.current);
            onLoadLoop();
        }
        else {
            setTimeout(onLoadSlider, 100);
        }
    };
    (0, react_1.useEffect)(onLoadSlider, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: `fenext-slider ${className} ${loop ? "fenext-slider-loop" : ""}`, onMouseEnter: () => {
                setIsHover(true);
            }, onMouseLeave: () => {
                setIsHover(false);
            }, style: {
                ["--nItems"]: items.length,
                ["--nItemsDesktop"]: nItemsDesktop,
                ["--nItemsTable"]: nItemsTable,
                ["--nItemsPhone"]: nItemsPhone,
                ["--timeDelay"]: timeDelay,
                ["--timeAnimation"]: timeAnimation,
                ["--separationItems"]: `${separationItems / 16}rem`,
            } },
            react_1.default.createElement("div", { ref: SliderRef, className: `fenext-slider-content fenext-slider-content-${isHover ? "hover" : ""} ${classNameContent}` }, items?.map?.((item, i) => {
                return (react_1.default.createElement("div", { key: i, className: `fenext-slider-item ${classNameItem}`, style: {
                        ["--i"]: i + 1,
                    } }, (0, fenextjs_functions_1._tValidate)(item, _t)));
            })),
            react_1.default.createElement("div", { className: `fenext-slider-dogs ${classNameDogs}` }, new Array(Math.max(1, Math.ceil(items.length - getNItems() + 1)))
                .fill(1)
                .map((e, i) => {
                const n = e * i;
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { onClick: onScroll(n), className: `fenext-slider-dog ${classNameDog} ${currentDog == i ? "active" : ""}` })));
            })),
            react_1.default.createElement("div", { onClick: onScrollToPre, className: `fenext-slider-arrow fenext-slider-arrow-pre ${classNameArrows} ${classNameArrowPre}` },
                react_1.default.createElement(Pagination_1.PaginationPre, null)),
            react_1.default.createElement("div", { onClick: onScrollToNext, className: `fenext-slider-arrow fenext-slider-arrow-next ${classNameArrows} ${classNameArrowNext}` },
                react_1.default.createElement(Pagination_1.PaginationNext, null)))));
};
exports.Slider = Slider;
//# sourceMappingURL=index.js.map