export default {
    id: "pagination-n-page",
    idStorybook: "pagination-paginationnpage",
    name: "PaginationNPage",
    description:
        "Componente de selección de elementos por página para la paginación, permitiendo seleccionar el número de elementos a mostrar en cada página.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor principal del componente de paginación.",
        },
        {
            id: "defaultValue",
            type: "string | number",
            require: false,
            default: "",
            description:
                "Valor por defecto de la opción seleccionada en el menú desplegable.",
        },
        {
            id: "listNpage",
            type: "Array<{ id: string | number; text: string }>",
            require: false,
            default: `[{ id: "10", text: "10" }, { id: "20", text: "20" }, { id: "50", text: "50" }, { id: "100", text: "100" }, { id: "all", text: "All" }]`,
            description:
                "Lista de opciones para el número de elementos por página que se puede seleccionar.",
        },
        {
            id: "onChangeNPage",
            type: "(value: string | number) => void",
            require: false,
            default: "",
            description:
                "Función de callback que se llama cuando cambia la opción seleccionada en el menú desplegable.",
        },
    ],
    useExample: [
        {
            text: "Componente de selección de número de elementos por página con valor por defecto de 20",
            content: `<PaginationNPage defaultValue="20" />`,
        },
        {
            text: "Componente de selección de número de elementos por página con clases personalizadas",
            content: `<PaginationNPage className="custom-pagination-class" />`,
        },
        {
            text: "Componente con callback en cambio de selección",
            content: `<PaginationNPage onChangeNPage={(value) => console.log('Elementos por página:', value)} />`,
        },
    ],
};
