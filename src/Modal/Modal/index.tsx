import React, { ReactNode, useMemo, useState } from "react";

import { ModalBaseBaseProps, ModalBaseClassProps, ModalBase } from "../Base";
import { _tValidate } from "fenextjs-functions";

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
            "children" | "type" | "active" | "onClose" | "_t"
        >,
        ModalClassProps {
    /**
     * The element with onClick for active modal.
     */
    ElementActionModalActive?: ReactNode;
    /**
     * onActive Modal.
     */
    onActive?: () => void;
}

export const Modal = ({
    classNameElementActionModalActive = "",
    classNameModal = {},

    ElementActionModalActive,
    children,

    active: activeProps = undefined,

    onClose: onCloseProps,
    onActive: onActiveProps,
    type = "center",
    _t,
}: ModalProps) => {
    const [activeValue, setActiveValue] = useState(false);

    const active = useMemo(
        () => activeProps ?? activeValue,
        [activeProps, activeValue],
    );

    const onActive = () => {
        setActiveValue(true);
        onActiveProps?.();
    };
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
                {_tValidate(ElementActionModalActive, _t)}
            </div>
            <ModalBase
                {...classNameModal}
                onClose={onClose}
                active={active}
                type={type}
                _t={_t}
            >
                {children}
            </ModalBase>
        </>
    );
};
