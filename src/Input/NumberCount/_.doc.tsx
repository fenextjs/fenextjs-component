export default {
    id: "input-number-count",
    idStorybook: "component-input-number-count",
    name: "InputNumberCount",
    description:
        "El componente InputNumberCount permite la entrada de números con soporte para validaciones, símbolos de inicio y final, y controles de mínimo y máximo.",
    props: [
        {
            id: "symbolInit",
            type: "string",
            require: false,
            default: "'$'",
            description:
                "El símbolo que se muestra al inicio del valor numérico en el campo.",
        },
        {
            id: "symbolFinal",
            type: "string",
            require: false,
            default: "''",
            description:
                "El símbolo que se muestra al final del valor numérico en el campo.",
        },
        {
            id: "defaultValue",
            type: "number | ''",
            require: false,
            default: "''",
            description: "El valor predeterminado del input.",
        },
        {
            id: "value",
            type: "number | ''",
            require: false,
            default: "undefined",
            description: "El valor actual del input.",
        },
        {
            id: "onChange",
            type: "(v: number | '') => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el valor del input cambia.",
        },
        {
            id: "min",
            type: "number",
            require: false,
            default: "-Infinity",
            description: "El valor mínimo permitido para el input.",
        },
        {
            id: "max",
            type: "number",
            require: false,
            default: "Infinity",
            description: "El valor máximo permitido para el input.",
        },
        {
            id: "aplyMin",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si se debe aplicar la restricción mínima.",
        },
        {
            id: "aplyMax",
            type: "boolean",
            require: false,
            default: "true",
            description: "Si se debe aplicar la restricción máxima.",
        },
        {
            id: "minError",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Mensaje de error cuando el valor es menor que el mínimo permitido.",
        },
        {
            id: "maxError",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Mensaje de error cuando el valor es mayor que el máximo permitido.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass<number>",
            require: false,
            default: "undefined",
            description:
                "Instancia de FenextjsValidator para validaciones personalizadas.",
        },
        {
            id: "optionsParseNumber",
            type: "Intl.NumberFormatOptions",
            require: false,
            default: "undefined",
            description: "Opciones para formatear el número.",
        },
        {
            id: "optionsParseNumberDefault",
            type: "Intl.NumberFormatOptions",
            require: false,
            default: "undefined",
            description:
                "Opciones para formatear el número inicialmente que se proporciona por defultValue.",
        },
    ],
    useExample: [
        {
            text: "InputNumberCount básico",
            content: `<InputNumberCount />`,
        },
        {
            text: "InputNumberCount con símbolos personalizados",
            content: `<InputNumberCount symbolInit="€" symbolFinal="EUR" />`,
        },
        {
            text: "InputNumberCount con valores mínimo y máximo",
            content: `<InputNumberCount min={10} max={100} />`,
        },
        {
            text: "InputNumberCount con validación personalizada",
            content: `<InputNumberCount validator={customValidator} />`,
        },
    ],
};
