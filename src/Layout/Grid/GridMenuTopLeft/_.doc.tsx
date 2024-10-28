export default {
    id: "layout-grid-menu-top-left",
    idStorybook: "component-layout-grid-menu-top-left",
    name: "LayoutGridMenuTopLeft",
    description:
        "Este componente combina el diseño de menú superior y el menú lateral izquierdo, permitiendo una estructura flexible para mostrar contenido, alertas y un indicador de progreso de página.",
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
            description: "Propiedades para el componente AlertHook.",
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
            id: "menuTop",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Elemento del menú superior dentro del layout.",
        },
        {
            id: "menuLeft",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Elemento del menú lateral izquierdo dentro del layout.",
        },
        {
            id: "menuLeftActive",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si el menú lateral izquierdo está activo.",
        },
        {
            id: "menuLeftMovilActive",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el menú lateral izquierdo está activo en dispositivos móviles.",
        },
        {
            id: "useHeaderButtonMenu",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el botón del menú en el header está habilitado.",
        },
        {
            id: "usePageProgress",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe mostrar la barra de progreso de la página.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenedor del layout.",
        },
        {
            id: "classNameLoader",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el indicador de carga.",
        },
        {
            id: "classNameChildren",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenido de los hijos.",
        },
        {
            id: "classNameMenuTop",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el menú superior.",
        },
        {
            id: "classNameMenuLeft",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el menú lateral izquierdo.",
        },
        {
            id: "classNameMenuLeftContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenido del menú lateral izquierdo.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<LayoutGridMenuTopLeft />`,
        },
        {
            text: "Con menú superior y lateral",
            content: `<LayoutGridMenuTopLeft menuTop={<div>Menú Top</div>} menuLeft={<div>Menú Izquierdo</div>} />`,
        },
        {
            text: "Con barra de progreso deshabilitada",
            content: `<LayoutGridMenuTopLeft usePageProgress={false} />`,
        },
        {
            text: "Con alertas personalizadas",
            content: `<LayoutGridMenuTopLeft useAlertHook={true} alertHookProps={{ message: 'Alerta' }} />`,
        },
    ],
};
