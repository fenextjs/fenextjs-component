export default {
    id: "tab",
    idStorybook: "component-tab",
    name: "Tab",
    description:
        "El componente Tab permite la creación de pestañas con contenidos asociados, personalizables en clases CSS y comportamiento.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "classNameContentHead",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el contenedor del encabezado del contenido de las pestañas.",
        },
        {
            id: "classNameHead",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el encabezado de la pestaña.",
        },
        {
            id: "classNameHeadItem",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para cada elemento del encabezado de la pestaña.",
        },
        {
            id: "classNameHeadItemActive",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el elemento activo del encabezado de la pestaña.",
        },
        {
            id: "classNameBody",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el contenedor del cuerpo de las pestañas.",
        },
        {
            id: "classNameBodyItem",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para cada elemento del cuerpo de la pestaña.",
        },
        {
            id: "items",
            type: "TabItemProps[]",
            require: false,
            default: "[]",
            description:
                "Lista de objetos que representan las pestañas con encabezado y cuerpo.",
        },
        {
            id: "defaultTab",
            type: "number",
            require: false,
            default: "0",
            description: "Índice de la pestaña a mostrar por defecto.",
        },
        {
            id: "activeTab",
            type: "number",
            require: false,
            default: "undefined",
            description: "Índice de la pestaña actualmente activa.",
        },
        {
            id: "onChange",
            type: "(item: TabItemProps) => void",
            require: false,
            default: "undefined",
            description: "Función a ejecutar al cambiar de pestaña.",
        },
        {
            id: "tabScrollActive",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si las pestañas deben estar en modo de desplazamiento al seleccionar.",
        },
        {
            id: "validataTabOneHiddenHeader",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Oculta el encabezado de las pestañas si solo hay una pestaña presente.",
        },
        {
            id: "useCount",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Permite mostrar un contador de elementos en el encabezado de la pestaña.",
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<Tab items={[{ id: "tab1", head: "Tab 1", body: "Contenido 1" }, { id: "tab2", head: "Tab 2", body: "Contenido 2" }]} />`,
        },
        {
            text: "Con clase personalizada y función de cambio",
            content: `<Tab className="custom-tab" onChange={(item) => console.log("Pestaña seleccionada:", item)} />`,
        },
        {
            text: "Con contador de elementos en el encabezado",
            content: `<Tab items={[{ id: "tab1", head: "Tab 1", body: "Contenido 1", useCount: true, count: 3, singular: "elemento", plural: "elementos" }]} useCount={true} />`,
        },
    ],
};
