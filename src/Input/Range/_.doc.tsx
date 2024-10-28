export default {
    id: "input-range",
    idStorybook: "component-input-range",
    name: "InputRange",
    description:
        "El componente InputRange permite la selección de un valor o rango de valores dentro de un intervalo definido. Se puede personalizar con clases CSS y manejar cambios en los valores mínimo, máximo o intermedio.",
    props: [
        {
            id: "value",
            type: "number",
            require: false,
            default: "0",
            description: "El valor actual del input.",
        },
        {
            id: "valueMin",
            type: "number",
            require: false,
            default: "-100",
            description: "El valor mínimo permitido para el input.",
        },
        {
            id: "valueMax",
            type: "number",
            require: false,
            default: "100",
            description: "El valor máximo permitido para el input.",
        },
        {
            id: "defaultValue",
            type: "number",
            require: false,
            default: "0",
            description: "El valor inicial del input.",
        },
        {
            id: "defaultValueMin",
            type: "number",
            require: false,
            default: "-100",
            description: "El valor mínimo inicial del input.",
        },
        {
            id: "defaultValueMax",
            type: "number",
            require: false,
            default: "100",
            description: "El valor máximo inicial del input.",
        },
        {
            id: "onChange",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando el valor del input cambia.",
        },
        {
            id: "onChangeRange",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando cambia el rango de valores del input.",
        },
        {
            id: "useRange",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe usar un rango de valores en lugar de un único valor.",
        },
        {
            id: "min",
            type: "number",
            require: false,
            default: "-100",
            description: "El valor mínimo permitido para el rango.",
        },
        {
            id: "max",
            type: "number",
            require: false,
            default: "100",
            description: "El valor máximo permitido para el rango.",
        },
        {
            id: "step",
            type: "number",
            require: false,
            default: "1",
            description: "El tamaño del paso para los valores del input.",
        },
        {
            id: "showNumber",
            type: "'top' | 'bottom' | 'none'",
            require: false,
            default: "'top'",
            description:
                "Posición en la que se muestra el valor numérico del input.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            description: "Clase CSS para personalizar el contenedor del input.",
        },
        {
            id: "classNameContentRange",
            type: "string",
            require: false,
            description: "Clase CSS para el contenedor del rango del input.",
        },
        {
            id: "classNameMin",
            type: "string",
            require: false,
            description: "Clase CSS para el valor mínimo del input.",
        },
        {
            id: "classNameMax",
            type: "string",
            require: false,
            description: "Clase CSS para el valor máximo del input.",
        },
        {
            id: "classNameCurrent",
            type: "string",
            require: false,
            description: "Clase CSS para el valor actual del input.",
        },
        {
            id: "classNameContentValue",
            type: "string",
            require: false,
            description: "Clase CSS para el contenedor del valor del input.",
        },
        {
            id: "classNameCircle",
            type: "string",
            require: false,
            description: "Clase CSS para los círculos del input.",
        },
        {
            id: "classNameLine",
            type: "string",
            require: false,
            description: "Clase CSS para las líneas del input.",
        },
    ],
    useExample: [
        {
            text: "InputRange básico",
            content: `<InputRange />`,
        },
        {
            text: "InputRange con rango activado",
            content: `<InputRange useRange={true} />`,
        },
        {
            text: "InputRange con valor personalizado",
            content: `<InputRange value={50} />`,
        },
    ],
};
