export default {
    id: "modal-base",
    idStorybook: "component-modal-base",
    name: "ModalBase",
    description: "El componente ModalBase proporciona una base flexible para modales con diferentes posiciones, tipos de cierre y opciones de visibilidad.",
    props: [
        {
            id: "active",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el modal está activo.",
        },
        {
            id: "activeName",
            type: "boolean | null",
            require: false,
            default: "undefined",
            description: "Indica si el nombre específico del modal está activo.",
        },
        {
            id: "activeNameLast",
            type: "boolean | null",
            require: false,
            default: "undefined",
            description: "Indica si el último nombre activo del modal está activo.",
        },
        {
            id: "childrenUseActiveForShowHidden",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si los elementos secundarios utilizan el estado activo para mostrarse u ocultarse.",
        },
        {
            id: "disabledClose",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el cierre del modal está deshabilitado.",
        },
        {
            id: "useRender",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si el modal utiliza renderización condicional.",
        },
        {
            id: "type",
            type: "'top' | 'left' | 'right' | 'bottom' | 'center' | 'full' | 'layout-grid' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
            require: false,
            default: "'center'",
            description: "Define el tipo de modal o la posición en la que se muestra.",
        },
        {
            id: "typeClose",
            type: "'out' | 'inset' | 'none'",
            require: false,
            default: "'out'",
            description: "Especifica el tipo de botón de cierre para el modal.",
        },
        {
            id: "onClose",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al cerrar el modal.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "undefined",
            description: "Nombre identificador del modal.",
        },
        {
            id: "nameLocalStorage",
            type: "string",
            require: false,
            default: "undefined",
            description: "Nombre clave en localStorage para el modal.",
        },
        {
            id: "closeComponent",
            type: "ReactNode",
            require: false,
            default: "<Close />",
            description: "Componente personalizado de cierre para el modal.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del modal.",
        },
        {
            id: "classNameBg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el fondo del modal.",
        },
        {
            id: "classNameClose",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el icono de cierre del modal.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenido del modal.",
        }
    ],
    useExample: [
        {
            text: "Modal básico",
            content: `<ModalBase active={true} />`
        },
        {
            text: "Modal con contenido personalizado",
            content: `<ModalBase active={true}>Contenido del modal</ModalBase>`
        },
        {
            text: "Modal con botón de cierre deshabilitado",
            content: `<ModalBase active={true} disabledClose={true} />`
        },
        {
            text: "Modal con posición superior derecha",
            content: `<ModalBase active={true} type="top-right" />`
        }
    ]
};
