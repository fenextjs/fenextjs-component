export default {
    id: "input-date",
    idStorybook: "component-input-date",
    name: "InputDate",
    description:
        "El componente InputDate permite a los usuarios seleccionar una fecha utilizando un campo de entrada de fecha. Puede manejar diferentes tipos de entrada de fecha, como fecha, mes, semana y hora, y es útil en formularios donde se requiere la selección de fechas.",
    props: [
        {
            id: "defaultValue",
            type: "Date | undefined",
            require: false,
            default: "undefined",
            description: "Valor predeterminado del campo de entrada de fecha.",
        },
        {
            id: "value",
            type: "Date | undefined",
            require: false,
            default: "undefined",
            description:
                "Valor actual del campo de entrada de fecha. Si se proporciona, anula el valor predeterminado.",
        },
        {
            id: "type",
            type: "TypeDate",
            require: false,
            default: "'date'",
            description:
                "Tipo de campo de entrada. Puede ser 'date', 'month', 'week', o 'time'.",
        },
        {
            id: "min",
            type: "Date | undefined",
            require: false,
            default: "undefined",
            description: "Fecha mínima válida que se puede seleccionar.",
        },
        {
            id: "max",
            type: "Date | undefined",
            require: false,
            default: "undefined",
            description: "Fecha máxima válida que se puede seleccionar.",
        },
        {
            id: "onChange",
            type: "(date: Date | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando la fecha seleccionada cambia.",
        },
        {
            id: "classNameInputDate",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS adicional para el campo de entrada de fecha.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<SVGDate />",
            description:
                "Ícono que se muestra junto al campo de entrada de fecha.",
        },
        {
            id: "iconPos",
            type: "'left' | 'right'",
            require: false,
            default: "'left'",
            description: "Posición del ícono respecto al campo de entrada.",
        },
        {
            id: "validator",
            type: "Validator",
            require: false,
            default: "undefined",
            description: "Validador opcional para validar la fecha ingresada.",
        },
    ],
    useExample: [
        {
            text: "Selector de fecha por defecto",
            content: `<InputDate defaultValue={new Date()} onChange={(date) => console.log(date)} />`,
        },
        {
            text: "Selector de mes",
            content: `<InputDate type="month" onChange={(date) => console.log(date)} />`,
        },
        {
            text: "Selector de hora",
            content: `<InputDate type="time" onChange={(date) => console.log(date)} />`,
        },
        {
            text: "Selector de fecha deshabilitado",
            content: `<InputDate defaultValue={new Date()} disabled={true} />`,
        },
    ],
};
