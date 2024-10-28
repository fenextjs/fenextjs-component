export default {
    id: "layout-grid-menu-left",
    idStorybook: "component-layout-grid-menu-left",
    name: "LayoutGridMenuLeft",
    description:
        "El componente LayoutGridMenuLeft organiza el contenido en un diseño de cuadrícula, con un menú a la izquierda que puede mostrarse u ocultarse. Además, admite alertas, carga de página y otros elementos opcionales.",
    props: [
        {
            id: "useAlertHook",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe renderizar el componente de alerta (AlertHook).",
        },
        {
            id: "alertHookProps",
            type: "AlertHookProps",
            require: false,
            default: "{}",
            description: "Propiedades para configurar el AlertHook.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si la página está en estado de carga, mostrando un indicador de carga.",
        },
        {
            id: "menuLeft",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido que se renderiza en el menú izquierdo del layout.",
        },
        {
            id: "menuLeftActive",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si el menú izquierdo está activo.",
        },
        {
            id: "menuLeftMovilActive",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el menú izquierdo está activo en dispositivos móviles.",
        },
        {
            id: "useHeaderButtonMenu",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Permite mostrar un botón en el encabezado para alternar el menú.",
        },
        {
            id: "usePageProgress",
            type: "boolean",
            require: false,
            default: "true",
            description: "Habilita una barra de progreso de la página.",
        },
        {
            id: "target",
            type: "string",
            require: false,
            default: "'fenext-btn-menu-checkbox'",
            description: "El objetivo del botón en el menú.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente principal.",
        },
        {
            id: "classNameMenuLeft",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el menú izquierdo.",
        },
        {
            id: "classNameMenuLeftContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenido del menú izquierdo.",
        },
        {
            id: "classNameChildren",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor de los hijos del componente.",
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<LayoutGridMenuLeft />`,
        },
        {
            text: "Con menú personalizado",
            content: `<LayoutGridMenuLeft menuLeft={<CustomMenu />} />`,
        },
        {
            text: "Con estado de carga",
            content: `<LayoutGridMenuLeft loader={true} />`,
        },
    ],
};
