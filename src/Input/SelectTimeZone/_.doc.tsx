export default {
    id: "input-select-time-zone",
    idStorybook: "component-input-select-time-zone",
    name: "InputSelectTimeZone",
    description: "El componente InputSelectTimeZone permite a los usuarios seleccionar una zona horaria de una lista predefinida de zonas horarias, con opciones de personalización tanto para la apariencia como para el comportamiento.",
    props: [
        {
            id: "useTOption",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se debe usar la opción traducida en lugar de los valores predeterminados para las zonas horarias.",
        },
        {
            id: "id",
            type: "string",
            require: false,
            default: "undefined",
            description: "ID del input select.",
        },
        {
            id: "label",
            type: "string",
            require: false,
            default: "undefined",
            description: "Etiqueta para el campo de selección de zona horaria.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del input.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "undefined",
            description: "Texto de marcador de posición que aparece cuando no hay selección.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el selector de zona horaria está deshabilitado.",
        },
        {
            id: "value",
            type: "TimeZoneProps",
            require: false,
            default: "undefined",
            description: "Valor seleccionado actualmente en el selector de zona horaria.",
        },
        {
            id: "onChange",
            type: "(value: TimeZoneProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el valor seleccionado cambia.",
        },
        {
            id: "isClearable",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se puede limpiar el campo de selección.",
        }
    ],
    useExample: [
        {
            text: "InputSelectTimeZone básico",
            content: `<InputSelectTimeZone />`,
        },
        {
            text: "InputSelectTimeZone con valor preseleccionado",
            content: `<InputSelectTimeZone value={selectedTimeZone} />`,
        },
        {
            text: "InputSelectTimeZone con cambio de zona horaria",
            content: `<InputSelectTimeZone onChange={(zone) => console.log(zone)} />`,
        },
        {
            text: "InputSelectTimeZone deshabilitado",
            content: `<InputSelectTimeZone disabled={true} />`,
        }
    ]
};
