export default {
    id: "grid-cols",
    idStorybook: "component-grid-cols",
    name: "GridCols",
    description:
        "El componente GridCols permite organizar elementos en una cuadrícula flexible, con la posibilidad de definir diferentes configuraciones de columnas según el tamaño de la pantalla.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido o elementos que se mostrarán dentro de la cuadrícula.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS adicional para personalizar el contenedor de la cuadrícula.",
        },
        {
            id: "cols",
            type: "string",
            require: false,
            default: "'1fr'",
            description: "Configuración de columnas por defecto usando CSS Grid.",
        },
        {
            id: "colsMin1920",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 1920px.",
        },
        {
            id: "colsMin1680",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 1680px.",
        },
        {
            id: "colsMin1440",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 1440px.",
        },
        {
            id: "colsMin1024",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 1024px.",
        },
        {
            id: "colsMin992",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 992px.",
        },
        {
            id: "colsMin768",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 768px.",
        },
        {
            id: "colsMin575",
            type: "string",
            require: false,
            default: "undefined",
            description: "Configuración de columnas para pantallas con un ancho mínimo de 575px.",
        }
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<GridCols><div>Item 1</div><div>Item 2</div></GridCols>`,
        },
        {
            text: "GridCols con diferentes columnas",
            content: `<GridCols cols="repeat(3, 1fr)"><div>Item 1</div><div>Item 2</div><div>Item 3</div></GridCols>`,
        },
        {
            text: "GridCols con configuración responsiva",
            content: `<GridCols colsMin768="repeat(2, 1fr)" colsMin1024="repeat(3, 1fr)"><div>Item 1</div><div>Item 2</div><div>Item 3</div></GridCols>`,
        },
    ],
};
