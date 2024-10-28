export default {
    id: "input-card-number",
    idStorybook: "component-input-card-number",
    name: "InputCardNumber",
    description:
        "El componente InputCardNumber es un campo de entrada diseñado para capturar el número de una tarjeta de crédito. Este componente formatea automáticamente la entrada del número en grupos de cuatro dígitos y muestra el icono correspondiente al tipo de tarjeta detectada.",
    props: [
        {
            id: "defaultValue",
            type: "string",
            require: false,
            default: "''",
            description:
                "Valor predeterminado del componente, que representa el número de tarjeta.",
        },
        {
            id: "value",
            type: "string",
            require: false,
            default: "''",
            description:
                "Valor controlado del componente, que representa el número de tarjeta.",
        },
        {
            id: "onChange",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el valor del componente cambia, proporcionando el número de tarjeta como cadena.",
        },
        {
            id: "maxNumberLength",
            type: "number",
            require: false,
            default: 19,
            description:
                "Longitud máxima permitida para la entrada del número de tarjeta. El valor mínimo es 15.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo de entrada está deshabilitado.",
        },
        {
            id: "required",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo de entrada es obligatorio.",
        },
        {
            id: "error",
            type: "string | undefined",
            require: false,
            default: "undefined",
            description:
                "Mensaje de error que se muestra si la validación falla.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el estilo del componente.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputCardNumber />`,
        },
        {
            text: "InputCardNumber con valor predeterminado",
            content: `<InputCardNumber defaultValue="1234 5678 9012 3456" />`,
        },
        {
            text: "InputCardNumber controlado",
            content: `<InputCardNumber value="4111 1111 1111 1111" onChange={(number) => console.log(number)} />`,
        },
        {
            text: "InputCardNumber deshabilitado",
            content: `<InputCardNumber disabled={true} />`,
        },
    ],
};
