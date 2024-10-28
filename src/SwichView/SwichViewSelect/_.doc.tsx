export default {
    id: "swichviewselect",
    idStorybook: "component-swichviewselect",
    name: "SwichViewSelect",
    description:
        "El componente SwichViewSelect permite al usuario alternar entre diferentes vistas de selección mediante opciones visuales, representadas por íconos específicos para cada vista de selección.",
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
            type: '"fenext-swich-view-select-box" | "fenext-swich-view-select-list" | "fenext-swich-view-select-normal"',
            require: false,
            default: '"fenext-swich-view-select-normal"',
            description:
                "Valor predeterminado de la vista de selección inicial.",
        },
        {
            id: "onChange",
            type: "(e?: SwichViewSelectType) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al seleccionar una nueva vista.",
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<SwichViewSelect />`,
        },
        {
            text: "Con valor predeterminado y función de cambio",
            content: `<SwichViewSelect defaultValue="fenext-swich-view-select-box" onChange={(e) => console.log("Vista seleccionada:", e)} />`,
        },
        {
            text: "Aplicando una clase personalizada",
            content: `<SwichViewSelect className="custom-class" />`,
        },
    ],
};
