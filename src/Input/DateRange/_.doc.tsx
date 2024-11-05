export default {
    id: "input-date-range",
    idStorybook: "component-input-date-range",
    name: "InputDateRange",
    description:
        "El componente InputDateRange permite a los usuarios seleccionar un rango de fechas utilizando dos campos de entrada de fecha. Es útil para formularios donde se requiere seleccionar un inicio y un final de un período de tiempo.",
    props: [
        {
            id: "defaultValue",
            type: "[Date, Date]",
            require: false,
            default: "undefined",
            description: "Valor predeterminado del rango de fechas.",
        },
        {
            id: "value",
            type: "[Date, Date]",
            require: false,
            default: "undefined",
            description:
                "Valor actual del rango de fechas. Si se proporciona, anula el valor predeterminado.",
        },
        {
            id: "onChange",
            type: "(value: [Date, Date]) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el rango de fechas cambia.",
        },
        {
            id: "propsStart",
            type: "InputDateBaseProps",
            require: false,
            default: "{}",
            description: "Props adicionales para el campo de fecha de inicio.",
        },
        {
            id: "propsEnd",
            type: "InputDateBaseProps",
            require: false,
            default: "{}",
            description: "Props adicionales para el campo de fecha de fin.",
        },
        {
            id: "label",
            type: "string",
            require: false,
            default: "''",
            description:
                "Etiqueta que se muestra para el campo de rango de fechas.",
        },
        {
            id: "classNameInputDateRange",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS adicional para el contenedor del rango de fechas.",
        },
        {
            id: "classNameInputDateRangeContentInputDate",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS adicional para el contenido del campo de fecha en el rango.",
        },
        {
            id: "optional",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo es opcional.",
        },
        {
            id: "optionalText",
            type: "string",
            require: false,
            default: "'(optional)'",
            description: "Texto que se muestra si el campo es opcional.",
        },
        {
            id: "required",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo es obligatorio.",
        },
        {
            id: "requiredText",
            type: "string",
            require: false,
            default: "'*'",
            description: "Texto que se muestra si el campo es obligatorio.",
        },
        {
            id: "min",
            type: "Date",
            require: false,
            default: "undefined",
            description: "Fecha mínima válida para ambos campos de fecha.",
        },
        {
            id: "max",
            type: "Date",
            require: false,
            default: "undefined",
            description: "Fecha máxima válida para ambos campos de fecha.",
        },
    ],
    useExample: [
        {
            text: "Selector de rango de fechas por defecto",
            content: `<InputDateRange 
    defaultValue={[new Date(), new Date()]} 
    onChange={(range) => console.log(range)} 
/>`,
        },
        {
            text: "Selector de rango de fechas con validación",
            content: `<InputDateRange 
    value={[startDate, endDate]} 
    onChange={(range) => validateRange(range)} 
/>`,
        },
        {
            text: "Selector de rango de fechas deshabilitado",
            content: `<InputDateRange 
    defaultValue={[new Date(), new Date()]} 
    disabled={true} 
/>`,
        },
    ],
};
