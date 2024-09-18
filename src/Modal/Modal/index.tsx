import React, { ReactNode } from "react";

import { ModalBaseBaseProps, ModalBaseClassProps, ModalBase } from "../Base";
import { useModal } from "fenextjs-hook";

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
            | "useRender"
            | "name"
            | "closeComponent"
            | "nameLocalStorage"
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
    /**
     * onActive Modal.
     */
    activeByNameLocalStorage?: boolean;
    activeByNameContentLocalStorage?: boolean;
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
    useRender = false,
    name,
    nameLocalStorage,
    activeByNameLocalStorage = false,
    activeByNameContentLocalStorage = false,
    closeComponent,
}: ModalProps) => {
    const { active, onActive, onClose, activeName, activeNameLast } = useModal({
        active: activeProps,
        disabled: disabledElementActionModalActive,
        onActive: onActiveProps,
        onClose: onCloseProps,
        name,
        activeByNameLocalStorage,
        activeByNameContentLocalStorage,
        nameLocalStorage,
    });
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
                closeComponent={closeComponent}
                onClose={onClose}
                active={active}
                activeName={activeName}
                activeNameLast={activeNameLast}
                type={type}
                typeClose={typeClose}
                disabledClose={disabledClose}
                useRender={useRender}
                name={name}
                nameLocalStorage={nameLocalStorage}
            >
                {children}
            </ModalBase>
        </>
    );
};
