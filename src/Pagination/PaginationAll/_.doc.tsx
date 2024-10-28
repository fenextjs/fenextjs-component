export default {
    id: "pagination",
    idStorybook: "pagination-pagination",
    name: "Pagination",
    description:
        "El componente Pagination permite la navegación de contenido paginado y ofrece opciones de personalización de estilo para adaptarse a diferentes diseños y temas.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor principal de la paginación.",
        },
        {
            id: "classNameItemPage",
            type: "PaginationItemPageClassProps",
            require: false,
            default: "{}",
            description:
                "Objeto con las clases CSS para personalizar el componente de cada página.",
        },
        {
            id: "classNameNPage",
            type: "PaginationNPageClassProps",
            require: false,
            default: "{}",
            description:
                "Objeto con las clases CSS para personalizar el componente de selección de número de página.",
        },
        {
            id: "showItemPage",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Determina si se debe mostrar el componente de cada página en la paginación.",
        },
        {
            id: "showNPage",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Determina si se debe mostrar el componente de selección de número de página en la paginación.",
        },
        {
            id: "listNpage",
            type: "Array<{ id: string; text: string }>",
            require: false,
            default: `[
                { id: "10", text: "10" },
                { id: "20", text: "20" },
                { id: "50", text: "50" },
                { id: "100", text: "100" },
                { id: "all", text: "All" }
            ]`,
            description:
                "Lista de opciones de número de página para mostrar en la selección de paginación.",
        },
    ],
    useExample: [
        {
            text: "Paginación básica",
            content: `<Pagination />`,
        },
        {
            text: "Paginación con selección de número de página oculta",
            content: `<Pagination showNPage={false} />`,
        },
        {
            text: "Paginación personalizada",
            content: `<Pagination className="mi-clase-personalizada" />`,
        },
    ],
};
