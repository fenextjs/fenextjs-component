export default {
    id: "container",
    idStorybook: "component-container",
    name: "ContainerScrollLeft",
    description:
        "El componente ContainerScrollLeft es un contenedor flexible que permite ajustar el tamaño personalizado y aplicar padding de forma opcional, proporcionando una estructura para organizar contenido.",
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
            content: `<ContainerScrollLeft><div>Contenido</div></ContainerScrollLeft>`,
        },
        {
            text: "ContainerScrollLeft con tamaño personalizado",
            content: `<ContainerScrollLeft customSize={48}><div>Contenido</div></ContainerScrollLeft>`,
        },
        {
            text: "ContainerScrollLeft sin padding",
            content: `<ContainerScrollLeft usePaddingInline={false}><div>Contenido</div></ContainerScrollLeft>`,
        },
    ],
};
