import React, { ReactNode } from "react";
import { ModalBaseBaseProps, ModalBaseClassProps } from "../Base";
export interface ModalClassProps {
    classNameElementActionModalActive?: string;
    classNameModal?: ModalBaseClassProps;
}
export interface ModalProps extends Pick<ModalBaseBaseProps, "children" | "type" | "active" | "onClose" | "typeClose" | "disabledClose" | "useRender" | "name" | "closeComponent" | "nameLocalStorage">, ModalClassProps {
    ElementActionModalActive?: ReactNode;
    disabledElementActionModalActive?: boolean;
    onActive?: () => void;
    activeByNameLocalStorage?: boolean;
    activeByNameContentLocalStorage?: boolean;
}
export declare const Modal: ({ classNameElementActionModalActive, classNameModal, ElementActionModalActive, disabledElementActionModalActive, children, active: activeProps, disabledClose, onClose: onCloseProps, onActive: onActiveProps, type, typeClose, useRender, name, nameLocalStorage, activeByNameLocalStorage, activeByNameContentLocalStorage, closeComponent, }: ModalProps) => React.JSX.Element;
