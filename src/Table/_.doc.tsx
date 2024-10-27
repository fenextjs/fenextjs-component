export default {
    id: "table",
    idStorybook: "component-table",
    name: "Table",
    description: "El componente Table permite mostrar una tabla de datos con funcionalidades avanzadas como paginación, selección de elementos, ordenación, y más.",
    props: [
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el contenedor principal de la tabla.",
        },
        {
            id: "classNameContentTable",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el contenedor del elemento de la tabla.",
        },
        {
            id: "classNameTable",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el elemento de la tabla.",
        },
        {
            id: "classNameTHead",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el encabezado de la tabla.",
        },
        {
            id: "classNameTBody",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el cuerpo de la tabla.",
        },
        {
            id: "classNameThr",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para las filas del encabezado de la tabla.",
        },
        {
            id: "classNameTr",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para las filas de la tabla.",
        },
        {
            id: "classNameTh",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para las celdas del encabezado de la tabla.",
        },
        {
            id: "classNameTd",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para las celdas del cuerpo de la tabla.",
        },
        {
            id: "classNameContentPagination",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el contenedor de la paginación.",
        },
        {
            id: "classNameLoader",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el elemento del cargador.",
        },
        {
            id: "name",
            type: "string",
            require: true,
            description: "Nombre de la tabla.",
        },
        {
            id: "items",
            type: "T[]",
            require: true,
            description: "Arreglo de datos a mostrar en la tabla.",
        },
        {
            id: "header",
            type: "TableHeader<T>",
            require: true,
            description: "Configuración del encabezado de la tabla.",
        },
        {
            id: "pagination",
            type: "PaginationProps",
            require: false,
            description: "Propiedades opcionales de la paginación de la tabla.",
        },
        {
            id: "showPagination",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si se debe mostrar la paginación en la tabla.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Muestra un cargador mientras se cargan los datos de la tabla.",
        },
        {
            id: "typeLoader",
            type: "\"spinner\" | \"line\"",
            require: false,
            default: "\"line\"",
            description: "Tipo de cargador a mostrar.",
        },
        {
            id: "useCheckbox",
            type: "boolean",
            require: false,
            default: "true",
            description: "Si se deben incluir casillas de verificación en la tabla.",
        },
        {
            id: "onChecked",
            type: "(items: T[]) => void",
            require: false,
            description: "Función a ejecutar al seleccionar elementos de la tabla.",
        },
        {
            id: "onOrderBy",
            type: "(order: { id: keyof T; order: \"ASC\" | \"DESC\" }) => void",
            require: false,
            description: "Función a ejecutar para ordenar los datos de la tabla.",
        },
        {
            id: "onShowHidden",
            type: "(showHidden: { id: keyof T; showHidden: \"SHOW\" | \"HIDDEN\" }) => void",
            require: false,
            description: "Función para mostrar u ocultar columnas de la tabla.",
        },
        {
            id: "notResult",
            type: "ReactNode",
            require: false,
            default: "<div>There is not results</div>",
            description: "Componente a mostrar cuando no hay resultados en la tabla.",
        },
        {
            id: "actionsCheckbox",
            type: "Omit<TableActionCheckboxProps<T>, \"actionAllCheckbox\" | \"data\">",
            require: false,
            description: "Propiedades para las acciones de selección múltiple de la tabla.",
        },
        {
            id: "actionsCheckboxSelectAll",
            type: "ReactNode",
            require: false,
            default: "\"Select All\"",
            description: "Componente para seleccionar todas las casillas de verificación.",
        }
    ],
    useExample: [
        {
            text: "Tabla básica con datos",
            content: `<Table name="sampleTable" items={[{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]} header={[{ id: "id", th: "ID" }, { id: "name", th: "Name" }]} />`
        },
        {
            text: "Tabla con paginación y selección múltiple",
            content: `<Table name="paginatedTable" items={[{ id: 1, name: "Item A" }, { id: 2, name: "Item B" }]} header={[{ id: "id", th: "ID" }, { id: "name", th: "Name" }]} pagination={{ current: 1, total: 10 }} useCheckbox={true} />`
        },
        {
            text: "Tabla con ordenación y cargador",
            content: `<Table name="sortableTable" items={[{ id: 1, name: "Alpha" }, { id: 2, name: "Beta" }]} header={[{ id: "id", th: "ID", parse: (item) => \`#\${item}\` }, { id: "name", th: "Name" }]} loader={true} typeLoader="spinner" />`
        }
    ]
};
