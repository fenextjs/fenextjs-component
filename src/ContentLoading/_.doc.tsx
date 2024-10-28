export default {
    id: "content-loading",
    idStorybook: "component-content-loading",
    name: "ContentLoading",
    description: "El componente ContentLoading es una envoltura que muestra un contenido cargando o el contenido completo, dependiendo de si el estado de carga está activado o no. Es útil para manejar la visualización condicional de contenido mientras se espera una carga.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "El contenido que se mostrará cuando no esté en estado de carga.",
        },
        {
            id: "componentLoader",
            type: "ReactNode",
            require: false,
            default: "<LoaderSpinner />",
            description: "Componente que se muestra mientras el contenido está en estado de carga.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el componente está en estado de carga, mostrando el componente loader.",
        },
        {
            id: "isPage",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si el componente debe comportarse como una página en carga.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<ContentLoading><div>Contenido cargado</div></ContentLoading>`
        },
        {
            text: "ContentLoading con loader activado",
            content: `<ContentLoading loader={true}><div>Contenido cargado</div></ContentLoading>`
        },
        {
            text: "ContentLoading como página",
            content: `<ContentLoading isPage={true}><div>Contenido cargado</div></ContentLoading>`
        }
    ]
};
