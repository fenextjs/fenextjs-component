import React, { ReactNode, useCallback, useMemo, useState } from "react";

import { ModalBaseBaseProps, ModalBaseClassProps, ModalBase } from "../Base";

/**
 * Properties for the class of the Modal component.
 */
export interface ModalClassProps {
    /**
     * The class name for the component.
     */
    classNameElementActionModalActive?: string;
    /**
     * Objet for className Modal.
     */
    classNameModal?: ModalBaseClassProps;
}

/**
 * Properties for the Modal component.
 */
export interface ModalProps
    extends Pick<
            ModalBaseBaseProps,
            | "children"
            | "type"
            | "active"
            | "onClose"
            | "typeClose"
            | "disabledClose"
        >,
        ModalClassProps {
    /**
     * The element with onClick for active modal.
     */
    ElementActionModalActive?: ReactNode;
    /**
     * If The element with onClick for active modal is disabled.
     */
    disabledElementActionModalActive?: boolean;
    /**
     * onActive Modal.
     */
    onActive?: () => void;
}

export const Modal = ({
    classNameElementActionModalActive = "",
    classNameModal = {},

    ElementActionModalActive,
    disabledElementActionModalActive = false,
    children,

    active: activeProps = undefined,
    disabledClose = false,

    onClose: onCloseProps,
    onActive: onActiveProps,
    type = "center",
    typeClose = "out",
}: ModalProps) => {
    const [activeValue, setActiveValue] = useState(false);

    const active = useMemo(
        () => activeProps ?? activeValue,
        [activeProps, activeValue],
    );

    const onActive = useCallback(() => {
        if (disabledElementActionModalActive) {
            return;
        }
        setActiveValue(true);
        onActiveProps?.();
    }, [disabledElementActionModalActive]);

    const onClose = () => {
        setActiveValue(false);
        onCloseProps?.();
    };
    return (
        <>
            <div
                onClick={onActive}
                className={`fenext-modal-element-active ${classNameElementActionModalActive}`}
            >
                {ElementActionModalActive}
            </div>
            <ModalBase
                {...classNameModal}
                onClose={onClose}
                active={active}
                type={type}
                typeClose={typeClose}
                disabledClose={disabledClose}
            >
                {children}
            </ModalBase>
        </>
    );
};
