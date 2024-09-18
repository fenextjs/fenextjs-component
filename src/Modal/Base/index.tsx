import React, { PropsWithChildren, ReactNode, useMemo } from "react";
import { Close } from "fenextjs-svg/cjs/Close";
import { useModalPos } from "./useModalPos";
/**
 * Properties for the base ModalBase component.
 */
export interface ModalBaseBaseProps extends PropsWithChildren {
    /**
     * If active modal.
     */
    active?: boolean;
    /**
     * If active modal.
     */
    activeName?: boolean | null;
    /**
     * If active modal.
     */
    activeNameLast?: boolean | null;
    /**
     * If active modal.
     */
    childrenUseActiveForShowHidden?: boolean;
    /**
     * If disabled close modal.
     */
    disabledClose?: boolean;
    /**
     * If disabled close modal.
     */
    useRender?: boolean;
    /**
     * Type of modal.
     */
    type?:
        | "top"
        | "left"
        | "right"
        | "bottom"
        | "center"
        | "full"
        | "layout-grid"
        | "top-right"
        | "top-left"
        | "bottom-right"
        | "bottom-left";
    /**
     * Type of btn close for modal.
     */
    typeClose?: "out" | "inset" | "none";
    /**
     * onClose ModalBase.
     */
    onClose?: () => void;
    /**
     * name of Modal.
     */
    name?: string;
    /**
     * nameLocalStorage of Modal.
     */
    nameLocalStorage?: string;
    /**
     * closeComponent of Modal.
     */
    closeComponent?: ReactNode;
}

/**
 * Properties for the class of the ModalBase component.
 */
export interface ModalBaseClassProps {
    /**
     * The class name for the component.
     */
    className?: string;
    /**
     * The class name for Bg the component.
     */
    classNameBg?: string;
    /**
     * The class name for Icon Close the component.
     */
    classNameClose?: string;
    /**
     * The class name for Content the component.
     */
    classNameContent?: string;
}

/**
 * Properties for the ModalBase component.
 */
export interface ModalBaseProps
    extends ModalBaseBaseProps,
        ModalBaseClassProps {}

export const ModalBase = ({
    className = "",
    classNameBg = "",
    classNameContent = "",
    classNameClose = "",

    active = false,
    activeName,
    activeNameLast,

    childrenUseActiveForShowHidden = false,
    disabledClose = false,
    type = "center",
    typeClose = "out",
    onClose,
    children,
    useRender = false,
    name,
    closeComponent = <Close />,
}: ModalBaseProps) => {
    const uuid = useMemo(() => new Date().getTime(), [active]);

    const CLOSECOMPONENTE = useMemo(() => {
        return (
            <>
                <div
                    onClick={disabledClose ? () => {} : onClose}
                    className={`fenext-modal-base-close fenext-modal-base-close-${type}  fenext-modal-base-close-${
                        active ? "active" : "inactive"
                    } ${classNameClose}`}
                >
                    {closeComponent}
                </div>
            </>
        );
    }, [onClose, type, active, classNameClose, disabledClose, closeComponent]);

    const CONTENT = useMemo(() => {
        return (
            <>
                <dialog
                    open={active}
                    className={`
                        fenext-modal-base-dialog
                        fenext-modal-base-dialog-close-${typeClose}
                        fenext-modal-base-dialog-${active ? "active" : "inactive"}
                        fenext-modal-base-dialog-name-${activeName ? "active" : "inactive"}
                        fenext-modal-base-dialog-name-last-${activeNameLast ? "active" : "inactive"}
                        fenext-modal-base-dialog-disabled-close-${disabledClose ? "active" : "inactive"}
                    `}
                    data-name={name}
                >
                    <div
                        className={`fenext-modal-base-bg fenext-modal-base-bg-${
                            active ? "active" : "inactive"
                        } ${classNameBg} `}
                    ></div>
                    <div
                        className={`fenext-modal-base fenext-modal-base-bg-close fenext-modal-base-bg-close-${uuid} fenext-modal-base-${
                            active ? "active" : "inactive"
                        } fenext-modal-base-${type} ${className} `}
                        onClick={(e) => {
                            const ele = e.target as HTMLDivElement;
                            if (
                                ele.classList.value.includes(
                                    `fenext-modal-base-bg-close-${uuid}`,
                                ) &&
                                !disabledClose
                            ) {
                                onClose?.();
                            }
                        }}
                    >
                        <div
                            className={`fenext-modal-base-content ${classNameContent} `}
                        >
                            {CLOSECOMPONENTE}
                            {((childrenUseActiveForShowHidden && active) ||
                                !childrenUseActiveForShowHidden) &&
                                children}
                        </div>
                    </div>
                    {CLOSECOMPONENTE}
                </dialog>
            </>
        );
    }, [
        CLOSECOMPONENTE,
        childrenUseActiveForShowHidden,
        active,
        activeName,
        activeNameLast,
        children,
        uuid,
        classNameContent,
        className,
        type,
        classNameBg,
        disabledClose,
        typeClose,
    ]);

    useModalPos({
        id: "fenext-modal",
        children: <>{useRender && CONTENT}</>,
    });

    return <>{!useRender && CONTENT}</>;
};
