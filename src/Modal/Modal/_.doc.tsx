export default {
    id: "modal",
    idStorybook: "component-modal",
    name: "Modal",
    description:
        "El componente Modal permite crear una ventana modal personalizable con opciones de activación, cierre y renderizado condicional, heredando propiedades de ModalBase.",
    props: [
        {
            id: "ElementActionModalActive",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Elemento que activa el modal al hacer clic.",
        },
        {
            id: "disabledElementActionModalActive",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el elemento activador del modal está deshabilitado.",
        },
        {
            id: "onActive",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el modal se activa.",
        },
        {
            id: "activeByNameLocalStorage",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el estado activo del modal se almacena en localStorage.",
        },
        {
            id: "activeByNameContentLocalStorage",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si el contenido del modal activo se almacena en localStorage.",
        },
        {
            id: "classNameElementActionModalActive",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el elemento activador del modal.",
        },
        {
            id: "classNameModal",
            type: "ModalBaseClassProps",
            require: false,
            default: "{}",
            description:
                "Objeto que contiene las clases CSS personalizables del modal.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido o elementos a mostrar dentro del modal.",
        },
        {
            id: "active",
            type: "boolean",
            require: false,
            default: "undefined",
            description: "Determina si el modal está activo.",
        },
        {
            id: "onClose",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al cerrar el modal.",
        },
        {
            id: "type",
            type: "'top' | 'left' | 'right' | 'bottom' | 'center' | 'full' | 'layout-grid' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
            require: false,
            default: "'center'",
            description: "Define el tipo o la posición del modal.",
        },
        {
            id: "typeClose",
            type: "'out' | 'inset' | 'none'",
            require: false,
            default: "'out'",
            description: "Especifica el tipo de botón de cierre para el modal.",
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
            require: true,
            default: "false",
            description: "Determina si el modal usa renderizado condicional.",
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
            description:
                "Clave de almacenamiento en localStorage para el estado del modal.",
        },
        {
            id: "closeComponent",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Componente personalizado de cierre para el modal.",
        },
    ],
    useExample: [
        {
            text: "Modal básico",
            content: `<Modal active={true}>Contenido del modal</Modal>`,
        },
        {
            text: "Modal con cierre deshabilitado",
            content: `<Modal active={true} disabledClose={true} />`,
        },
        {
            text: "Modal con activador personalizado",
            content: `<Modal ElementActionModalActive={<button>Abrir Modal</button>} />`,
        },
        {
            text: "Modal con posición superior derecha",
            content: `<Modal active={true} type="top-right" />`,
        },
    ],
};
