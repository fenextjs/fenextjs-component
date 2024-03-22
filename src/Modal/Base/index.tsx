import React, { PropsWithChildren, useMemo } from "react";
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
    childrenUseActiveForShowHidden?: boolean;
    /**
     * If disabled close modal.
     */
    disabledClose?: boolean;
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
        | "layout-grid";
    /**
     * Type of btn close for modal.
     */
    typeClose?: "out" | "inset" | "none";
    /**
     * onClose ModalBase.
     */
    onClose?: () => void;
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
    childrenUseActiveForShowHidden = false,
    disabledClose = false,
    type = "center",
    typeClose = "out",
    onClose,
    children,
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
                    <Close />
                </div>
            </>
        );
    }, [onClose, type, active, classNameClose, disabledClose]);

    useModalPos({
        id: "fenext-modal",
        children: (
            <>
                <dialog
                    open={active}
                    className={`fenext-modal-base-dialog fenext-modal-base-dialog-close-${typeClose} fenext-modal-base-dialog-${
                        active ? "active" : "inactive"
                    } fenext-modal-base-dialog-disabled-close-${
                        disabledClose ? "active" : "inactive"
                    }`}
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
                            {((childrenUseActiveForShowHidden && active) ||
                                !childrenUseActiveForShowHidden) &&
                                children}
                            {CLOSECOMPONENTE}
                        </div>
                    </div>
                    {CLOSECOMPONENTE}
                </dialog>
            </>
        ),
    });

    return <></>;
};
