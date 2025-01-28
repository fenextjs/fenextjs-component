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
            id: "PaginationItemPageProps",
            type: "PaginationItemPageProps",
            require: true,
            default: "",
            description:
                "Objeto de configuracion para PaginationItemPage.",
        },
        {
            id: "PaginationNPageProps",
            type: "PaginationNPageProps",
            require: false,
            default: "{}",
            description:
                "Objeto de configuracion para PaginationNPage.",
        },
        {
            id: "paginationName",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Nombre unico para el uso de usePagination.",
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
