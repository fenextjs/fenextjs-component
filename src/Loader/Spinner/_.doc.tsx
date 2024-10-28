export default {
    id: "loaderSpinner",
    idStorybook: "component-loader-spinner",
    name: "LoaderSpinner",
    description: "El componente LoaderSpinner se utiliza para mostrar un indicador de carga en forma de spinner o círculo giratorio. Se puede personalizar su estilo utilizando una clase CSS específica.",
    props: [
        {
            id: "classNameLoaderSpinner",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el estilo del spinner.",
        }
    ],
    extras: [],
    useExample: [
        {
            text: "LoaderSpinner básico",
            content: `<LoaderSpinner />`
        },
        {
            text: "LoaderSpinner con clase personalizada",
            content: `<LoaderSpinner classNameLoaderSpinner="custom-loader-spinner" />`
        }
    ]
};
