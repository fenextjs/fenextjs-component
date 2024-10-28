export default {
    id: "swichviewtable",
    idStorybook: "swichview-table",
    name: "SwichViewTable",
    description:
        "El componente SwichViewTable permite a los usuarios alternar entre diferentes vistas de tabla mediante iconos específicos para cada opción de visualización.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "defaultValue",
            type: '"fenext-swich-view-table-box" | "fenext-swich-view-table-list"',
            require: false,
            default: '"fenext-swich-view-table-list"',
            description:
                "Vista de tabla predeterminada que se muestra al cargar el componente.",
        },
        {
            id: "onChange",
            type: "(e?: SwichViewTableType) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando se selecciona una nueva vista de tabla.",
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<SwichViewTable />`,
        },
        {
            text: "Con valor predeterminado y función de cambio",
            content: `<SwichViewTable defaultValue="fenext-swich-view-table-box" onChange={(e) => console.log("Vista de tabla seleccionada:", e)} />`,
        },
        {
            text: "Aplicando una clase personalizada",
            content: `<SwichViewTable className="custom-table-class" />`,
        },
    ],
};
