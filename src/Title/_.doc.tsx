export default {
    id: "title",
    idStorybook: "component-title",
    name: "Title",
    description:
        "El componente Title representa un título de encabezado con soporte para diferentes niveles (`h1` a `h6`), opcionalmente muestra un loader y permite personalización mediante clases CSS.",
    props: [
        {
            id: "tag",
            type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
            require: false,
            default: "'h1'",
            description:
                "Define el nivel de encabezado que se utiliza para el componente.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando un indicador de carga.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del título.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: true,
            default: "undefined",
            description: "Contenido o texto que se muestra dentro del título.",
        },
    ],
    useExample: [
        {
            text: "Título básico",
            content: `<Title>Mi título</Title>`,
        },
        {
            text: "Título con nivel h2",
            content: `<Title tag="h2">Subtítulo</Title>`,
        },
        {
            text: "Título con loader",
            content: `<Title loader={true}>Cargando...</Title>`,
        },
        {
            text: "Título personalizado con clase",
            content: `<Title className="custom-title">Título personalizado</Title>`,
        },
    ],
};
