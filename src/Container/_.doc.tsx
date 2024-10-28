export default {
    id: "container",
    idStorybook: "component-container",
    name: "Container",
    description:
        "El componente Container es un contenedor flexible que permite ajustar el tamaño personalizado y aplicar padding de forma opcional, proporcionando una estructura para organizar contenido.",
    props: [
        {
            id: "customSize",
            type: "number",
            require: false,
            default: "undefined",
            description:
                "Tamaño personalizado del contenedor, calculado como customSize / 16 * rem.",
        },
        {
            id: "usePaddingInline",
            type: "boolean",
            require: false,
            default: "true",
            description: "Determina si se aplica padding en el contenedor.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido o elementos que se mostrarán dentro del contenedor.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Container><div>Contenido</div></Container>`,
        },
        {
            text: "Container con tamaño personalizado",
            content: `<Container customSize={48}><div>Contenido</div></Container>`,
        },
        {
            text: "Container sin padding",
            content: `<Container usePaddingInline={false}><div>Contenido</div></Container>`,
        },
    ],
};
