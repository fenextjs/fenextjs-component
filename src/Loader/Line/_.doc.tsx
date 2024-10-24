export default {
    id: "loaderLine",
    idStorybook: "component-loader-line",
    name: "LoaderLine",
    description: "El componente LoaderLine se utiliza para mostrar un indicador de carga en forma de línea. Se puede personalizar tanto su altura como su estilo utilizando una clase CSS específica.",
    props: [
        {
            id: "classNameLoaderLine",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el estilo de la línea del indicador de carga.",
        },
        {
            id: "height",
            type: "number",
            require: false,
            default: "20",
            description: "Altura de la línea del indicador de carga, en píxeles.",
        }
    ],
    extras: [],
    useExample: [
        {
            text: "LoaderLine básico",
            content: `<LoaderLine />`
        },
        {
            text: "LoaderLine con altura personalizada",
            content: `<LoaderLine height={30} />`
        },
        {
            text: "LoaderLine con clase personalizada",
            content: `<LoaderLine classNameLoaderLine="custom-loader-line" />`
        }
    ]
};
