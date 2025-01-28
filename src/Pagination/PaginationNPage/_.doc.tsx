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
            id: "options",
            type: "number[]",
            require: false,
            default: `[10, 20, 50, 100]`,
            description:
                "Lista de opciones para el número de elementos por página que se puede seleccionar.",
        },
        {
            id: "onChange",
            type: "(value: number) => void",
            require: false,
            default: "",
            description:
                "Función de callback que se llama cuando cambia la opción seleccionada en el menú desplegable.",
        },
    ],
    useExample: [
        {
            text: "Componente de selección de número de elementos por página con valor por defecto de 20",
            content: `<PaginationNPage />`,
        },
        {
            text: "Componente de selección de número de elementos por página con clases personalizadas",
            content: `<PaginationNPage className="custom-pagination-class" />`,
        },
        {
            text: "Componente con callback en cambio de selección",
            content: `<PaginationNPage onChange={(value) => console.log('Elementos por página:', value)} />`,
        },
    ],
};
