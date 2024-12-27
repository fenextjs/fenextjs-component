import React, {
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { SvgArrow } from "fenextjs-svg";
import { Loader } from "../Loader";
import { Portal } from "../Portal";
import { useActionDropDown } from "fenextjs-hook";

/**
 * Properties for the DropDown component.
 */
export interface DropDownClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    classNameContentHeader?: string;
    classNameContentIcon?: string;
    classNameBody?: string;
}

/**
 * Properties for the DropDown component.
 */
export interface DropDownProps extends DropDownClassProps {
    /**
     * Indicates whether the Collapse is currently in the loading state.
     */
    loader?: boolean;
    /**
     * Indicates whether the Collapse is disabled or not.
     */
    disabled?: boolean;
    /**
     * Indicates whether the Collapse is defaultActive for show.
     */
    defaultActive?: boolean;
    /**
     * Indicates whether the Collapse is active for show.
     */
    active?: boolean;
    /**
     * The name for the component.
     */
    name?: string;
    /**
     * Header of Collapse.
     */
    header: ReactNode;
    /**
     * onChange of Collapse.
     */
    onChange?: (value: boolean) => void;
    /**
     * iconArrow of Collapse.
     * @default ArrowCollapse
     */
    iconArrow?: ReactNode;

    /**
     * children of Collapse.
     */
    children?: ReactNode;

    /**
     * rotateIcon of Collapse.
     */
    rotateIcon?: boolean;
    /**
     * type of show content collapse.
     */
    type?: "checked" | "focus";
}

export const DropDown = ({
    className = "",
    classNameBody = "",
    classNameContentHeader = "",
    classNameContentIcon = "",

    header,
    active: activeProps,
    defaultActive,
    disabled,
    loader,
    onChange: onChangeProps,
    iconArrow = <SvgArrow />,
    rotateIcon = true,
    name,
    children,
    type = "focus",
}: DropDownProps) => {
    const [tlrb, settlrb] = useState<{
        top: string;
        left: string;
        right: string;
        bottom: string;
    }>({
        top: "inherit",
        left: "inherit",
        right: "inherit",
        bottom: "inherit",
    });
    const refDropDownHeader = useRef<HTMLDivElement>(null);
    const refDropDownBody = useRef<HTMLDivElement>(null);
    const [isChange, setIsChange] = useState(false);
    const [active_, setActive] = useState(defaultActive);

    const active = useMemo(
        () => activeProps ?? active_,
        [activeProps, active_],
    );

    const onChange = (b?: boolean) => {
        if (disabled) {
            return;
        }
        setActive(b ?? !active);
        onChangeProps?.(b ?? !active);
        setIsChange(true);
    };
    useActionDropDown({
        name,
        onChange: (e) => {
            setTimeout(() => {
                onChange(e);
            }, 50);
        },
    });

    const onClick: React.MouseEventHandler<HTMLDivElement> = () => {
        if (disabled) {
            return;
        }
        onChange();

        const element = refDropDownHeader?.current as HTMLDivElement;

        const selectRect = element?.getBoundingClientRect?.();
        const { top, left, right, bottom } = selectRect;

        const swForTop = top > window.innerHeight - bottom;
        const swForLeft = left > window.innerWidth - right;

        settlrb({
            top: swForTop ? "inherit" : `${bottom}px`,
            bottom: !swForTop ? "inherit" : `${window.innerHeight - top}px`,
            left: swForLeft ? "inherit" : `${left}px`,
            right: !swForLeft ? "inherit" : `${window.innerWidth - right}px`,
        });
    };

    const onClickClose = useCallback<
        (this: GlobalEventHandlers, ev: MouseEvent) => any
    >(
        (ev) => {
            if (active) {
                const element = ev.target as HTMLDivElement;
                if (
                    refDropDownHeader.current?.contains(element) ||
                    refDropDownBody.current?.contains(element)
                ) {
                    return;
                }
                onChange();
            }
        },
        [active, refDropDownBody, refDropDownHeader],
    );

    useEffect(() => {
        if (type == "focus") {
            window.addEventListener("click", onClickClose);
            return () => {
                window.removeEventListener("click", onClickClose);
            };
        }
        return;
    }, [type, active, refDropDownBody, refDropDownHeader]);

    return (
        <>
            <div
                ref={refDropDownHeader}
                data-component={"fenext-dropdown"}
                className={`
                    fenext-dropdown 
                    fenext-dropdown-${active ? "active" : "inactive"}
                    fenext-dropdown-rotate-icon-${rotateIcon ? "yes" : "no"}
                    ${className}
                `}
                onClick={onClick}
            >
                <div
                    className={`fenext-dropdown-header-content ${classNameContentHeader}`}
                >
                    {header}
                </div>
                <div
                    className={`fenext-dropdown-header-icon ${classNameContentIcon}`}
                >
                    {loader ? (
                        <>
                            <Loader />
                        </>
                    ) : (
                        <>{iconArrow}</>
                    )}
                </div>
            </div>
            <Portal>
                <div
                    ref={refDropDownBody}
                    data-component={"fenext-dropdown-body"}
                    className={`
                        fenext-dropdown-body
                        fenext-dropdown-body-${isChange ? "change" : "no-change"}
                        fenext-dropdown-body-${active ? "active" : "inactive"}
                        ${classNameBody}
                    `}
                    style={
                        {
                            ["--fenext-dropdown-top"]: tlrb.top,
                            ["--fenext-dropdown-left"]: tlrb.left,
                            ["--fenext-dropdown-right"]: tlrb.right,
                            ["--fenext-dropdown-bottom"]: tlrb.bottom,
                        } as React.CSSProperties
                    }
                >
                    {children}
                </div>
            </Portal>
        </>
    );
};
