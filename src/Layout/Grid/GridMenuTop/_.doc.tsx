export default {
    id: "layout-grid-menu-top",
    idStorybook: "component-layout-grid-menu-top",
    name: "LayoutGridMenuTop",
    description:
        "El componente LayoutGridMenuTop es un diseño de cuadrícula que incluye un menú superior y permite gestionar una barra de progreso de página, mostrar alertas personalizadas y un indicador de carga.",
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
            id: "usePageProgress",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe mostrar la barra de progreso de página.",
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
    ],
    extras: [
        {
            id: "alert-functionality",
            title: "Funcionalidad de AlertHook",
            description:
                "Si 'useAlertHook' está habilitado, el componente de alerta (AlertHook) se renderiza con las propiedades proporcionadas en 'alertHookProps'.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<LayoutGridMenuTop />`,
        },
        {
            text: "Con menú superior",
            content: `<LayoutGridMenuTop menuTop={<div>Menú</div>} />`,
        },
        {
            text: "Con barra de progreso deshabilitada",
            content: `<LayoutGridMenuTop usePageProgress={false} />`,
        },
        {
            text: "Con alertas personalizadas",
            content: `<LayoutGridMenuTop useAlertHook={true} alertHookProps={{ message: 'Alerta' }} />`,
        },
    ],
};
