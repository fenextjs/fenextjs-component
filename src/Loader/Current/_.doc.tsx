export default {
    id: "loader",
    idStorybook: "component-loader",
    name: "Loader",
    description:
        "El componente Loader se utiliza para mostrar un indicador de carga. Se puede personalizar utilizando una clase CSS específica para adaptar su estilo.",
    props: [
        {
            id: "classNameLoader",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el estilo del indicador de carga.",
        },
    ],
    extras: [],
    useExample: [
        {
            text: "Loader básico",
            content: `<Loader />`,
        },
        {
            text: "Loader con clase personalizada",
            content: `<Loader classNameLoader="custom-loader" />`,
        },
    ],
};
