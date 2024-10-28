export default {
    id: "pagination-item-page",
    idStorybook: "component-paginationitempage",
    name: "PaginationItemPage",
    description: "Componente de paginación que permite navegar entre páginas de una lista de elementos, con opciones de personalización para los iconos y las clases CSS.",
    props: [
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor principal de la paginación.",
        },
        {
            id: "classNameUp",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el botón 'Go Up'.",
        },
        {
            id: "classNamePre",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el botón de página anterior.",
        },
        {
            id: "classNameCurrent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el número de la página actual.",
        },
        {
            id: "classNameCurrentItem",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el elemento de la página actual.",
        },
        {
            id: "classNameNext",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el botón de la página siguiente.",
        },
        {
            id: "classNameDown",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el botón 'Go Down'.",
        },
        {
            id: "icons",
            type: "object",
            require: false,
            default: `{ up: <PaginationUp />, pre: <PaginationPre />, next: <PaginationNext />, down: <PaginationDown /> }`,
            description: "Objetos de iconos personalizados para cada botón de la paginación.",
        },
        {
            id: "defaultPage",
            type: "number",
            require: false,
            default: "0",
            description: "Página por defecto a mostrar al montar el componente.",
        },
        {
            id: "nItems",
            type: "number",
            require: true,
            default: "",
            description: "Número total de elementos a paginar.",
        },
        {
            id: "nItemsPage",
            type: "number",
            require: false,
            default: "10",
            description: "Número de elementos a mostrar por página.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita la navegación del componente si se establece en true.",
        },
        {
            id: "hiddenIfNItemsSmallerThanOrEqualNItemsPage",
            type: "boolean",
            require: false,
            default: "true",
            description: "Oculta la paginación si el número de elementos es menor o igual que los elementos por página.",
        },
        {
            id: "onChangePage",
            type: "(page: number) => void",
            require: false,
            default: "",
            description: "Función de callback que se llama cuando cambia la página.",
        }
    ],
    useExample: [
        {
            text: "Paginación básica con 50 elementos y 10 elementos por página",
            content: `<PaginationItemPage nItems={50} />`
        },
        {
            text: "Paginación con estilos personalizados y deshabilitada",
            content: `<PaginationItemPage nItems={50} classNameContent="custom-class" disabled />`
        },
        {
            text: "Paginación con callback en cambio de página",
            content: `<PaginationItemPage nItems={50} onChangePage={(page) => console.log('Página actual:', page)} />`
        }
    ]
};
