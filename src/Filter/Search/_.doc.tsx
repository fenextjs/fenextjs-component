export default {
    id: "filter-search",
    idStorybook: "filter-search",
    name: "FilterSearch",
    description:
        "El componente FilterSearch permite filtrar datos por busquedas.",
    props: [
        {
            id: "nameFilter",
            type: "string",
            require: false,
            description:
                "Nombre único para el filtro, utilizado en el contexto global.",
            default: "undefined",
        },
        {
            id: "defaultValue",
            type: "SearchDataProps",
            require: false,
            default: "{}",
            description: "Valor inicial del filtro de busqueda.",
        },
        {
            id: "onChange",
            type: "(data: SearchDataProps) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando cambia el valor del busqueda.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor principal.",
        },
        {
            id: "classNameSearch",
            type: "InputSearchClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar el InputSearch.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<FilterSearch />`,
        },
        {
            text: "Con valores iniciales",
            content: `<FilterSearch defaultValue={{ search:"" }} />`,
        },
    ],
};
