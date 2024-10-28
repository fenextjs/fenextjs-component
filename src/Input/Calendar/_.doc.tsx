export default {
    id: "input-calendar",
    idStorybook: "component-input-calendar",
    name: "InputCalendar",
    description:
        "El componente InputCalendar permite seleccionar fechas o rangos de fechas a través de un calendario desplegable. Se puede configurar para mostrar múltiples meses y admite validaciones.",
    props: [
        {
            id: "nMonthShow",
            type: "number",
            require: false,
            default: "1",
            description:
                "Cantidad de meses que se mostrarán simultáneamente en el calendario.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<SvgDate />",
            description:
                "Icono que se mostrará en el campo de entrada del calendario.",
        },
        {
            id: "type",
            type: "'normal' | 'range'",
            require: false,
            default: "'normal'",
            description:
                "Define si el calendario es para una selección única ('normal') o un rango de fechas ('range').",
        },
        {
            id: "defaultValue",
            type: "Date",
            require: false,
            description:
                "La fecha predeterminada seleccionada para el modo 'normal'.",
        },
        {
            id: "value",
            type: "Date",
            require: false,
            description:
                "La fecha seleccionada actualmente en el modo 'normal'.",
        },
        {
            id: "defaultValueRange",
            type: "Date[]",
            require: false,
            description:
                "El rango de fechas predeterminado para el modo 'range'.",
        },
        {
            id: "valueRange",
            type: "Date[]",
            require: false,
            description:
                "El rango de fechas seleccionado actualmente en el modo 'range'.",
        },
        {
            id: "onChange",
            type: "(d: Date | undefined) => void",
            require: false,
            description:
                "Función que se ejecuta cuando se selecciona una fecha en el modo 'normal'.",
        },
        {
            id: "onChangeRange",
            type: "(d: Date[]) => void",
            require: false,
            description:
                "Función que se ejecuta cuando se selecciona un rango de fechas en el modo 'range'.",
        },
        {
            id: "validator",
            type: "any",
            require: false,
            description:
                "Validador personalizado que permite agregar reglas para validar las fechas seleccionadas.",
        },
        {
            id: "errorWithIsChange",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si los errores de validación deben mostrarse al cambiar la fecha.",
        },
        {
            id: "min",
            type: "Date",
            require: false,
            description: "Fecha mínima seleccionable.",
        },
        {
            id: "max",
            type: "Date",
            require: false,
            description: "Fecha máxima seleccionable.",
        },
    ],
    useExample: [
        {
            text: "Calendario básico",
            content: `<InputCalendar defaultValue={new Date()} onChange={(date) => console.log(date)} />`,
        },
        {
            text: "Calendario con selección de rango",
            content: `<InputCalendar type="range" defaultValueRange={[new Date(), new Date()]} onChangeRange={(range) => console.log(range)} />`,
        },
        {
            text: "Calendario mostrando múltiples meses",
            content: `<InputCalendar nMonthShow={3} defaultValue={new Date()} onChange={(date) => console.log(date)} />`,
        },
    ],
};
