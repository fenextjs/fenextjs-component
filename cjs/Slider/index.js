"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const PaginationPre_1 = require("fenextjs-svg/cjs/PaginationPre");
const PaginationNext_1 = require("fenextjs-svg/cjs/PaginationNext");
const fenextjs_hook_1 = require("fenextjs-hook");
const Slider = ({ className = "", classNameContent = "", classNameItem = "", classNameDogs = "", classNameDog = "", classNameArrows = "", classNameArrowPre = "", classNameArrowNext = "", items = [], nItemsDesktop = 3, nItemsTable = 2, nItemsPhone = 1, timeDelay = 4000, timeAnimation = 500, loop = true, separationItems = 16, ...props }) => {
    const { _t } = (0, fenextjs_hook_1.use_T)({ ...props });
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
                    } }, _t(item)));
            })),
            react_1.default.createElement("div", { className: `fenext-slider-dogs ${classNameDogs}` }, new Array(Math.max(1, Math.ceil(items.length - getNItems() + 1)))
                .fill(1)
                .map((e, i) => {
                const n = e * i;
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { onClick: onScroll(n), className: `fenext-slider-dog ${classNameDog} ${currentDog == i ? "active" : ""}` })));
            })),
            react_1.default.createElement("div", { onClick: onScrollToPre, className: `fenext-slider-arrow fenext-slider-arrow-pre ${classNameArrows} ${classNameArrowPre}` },
                react_1.default.createElement(PaginationPre_1.SvgPaginationPre, null)),
            react_1.default.createElement("div", { onClick: onScrollToNext, className: `fenext-slider-arrow fenext-slider-arrow-next ${classNameArrows} ${classNameArrowNext}` },
                react_1.default.createElement(PaginationNext_1.SvgPaginationNext, null)))));
};
exports.Slider = Slider;
