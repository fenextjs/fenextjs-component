export default {
    id: "cols",
    idStorybook: "component-cols",
    name: "Cols",
    description: "El componente Cols permite organizar elementos en múltiples columnas, con opciones para controlar la cantidad de columnas y la propiedad de ruptura interna de los elementos.",
    props: [
        {
            id: "nCols",
            type: "number | string",
            require: false,
            default: "2",
            description: "Número de columnas en las que se organizarán los elementos. Puede ser un valor numérico o una cadena.",
        },
        {
            id: "breakInside",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si se debe aplicar la propiedad 'break-inside' para evitar la ruptura interna de los elementos dentro de las columnas.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido o elementos que se mostrarán dentro de las columnas.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de las columnas.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Cols><div>Item 1</div><div>Item 2</div></Cols>`
        },
        {
            text: "Cols con 3 columnas",
            content: `<Cols nCols={3}><div>Item 1</div><div>Item 2</div><div>Item 3</div></Cols>`
        },
        {
            text: "Cols con breakInside deshabilitado",
            content: `<Cols breakInside={false}><div>Item 1</div><div>Item 2</div></Cols>`
        }
    ]
};
