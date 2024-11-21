export default {
    id: "input-phone",
    idStorybook: "input-inputphone",
    name: "InputPhone",
    description:
        "El componente InputPhone permite ingresar y validar números de teléfono, incluyendo un campo de selección de código de país y el número de teléfono propiamente dicho.",
    props: [
        {
            id: "classNameSelectCode",
            type: "InputSelectClassProps",
            require: false,
            default: "undefined",
            description:
                "Clase CSS para personalizar el contenedor del campo de selección del código de país.",
        },
        {
            id: "classNameInputNumber",
            type: "InputTextClassProps",
            require: false,
            default: "undefined",
            description:
                "Clase CSS para personalizar el contenedor del campo de número de teléfono.",
        },
        {
            id: "classNamePhone",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal del componente InputPhone.",
        },
        {
            id: "classNamePhoneCode",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del código de país.",
        },
        {
            id: "classNamePhoneLabel",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el label del componente InputPhone.",
        },
        {
            id: "classNamePhoneNumber",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del número de teléfono.",
        },
        {
            id: "classNameError",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del mensaje de error.",
        },
        {
            id: "disabledSelectCode",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita la selección del código de país.",
        },
        {
            id: "placeholderCode",
            type: "string",
            require: false,
            default: "'+57'",
            description: "Placeholder para el campo del código de país.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "'xxx-xx-xx-xxxx'",
            description: "Placeholder para el campo del número de teléfono.",
        },
        {
            id: "defaultCode",
            type: "string",
            require: false,
            default: "'+57'",
            description: "Código de país por defecto.",
        },
        {
            id: "defaultValue",
            type: "Partial<PhoneProps>",
            require: false,
            default: "undefined",
            description: "Valor por defecto para el número de teléfono.",
        },
        {
            id: "value",
            type: "Partial<PhoneProps>",
            require: false,
            default: "undefined",
            description: "Valor controlado del número de teléfono.",
        },
        {
            id: "onChange",
            type: "function",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al cambiar el valor del número de teléfono.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass<PhoneProps>",
            require: false,
            default: "undefined",
            description: "Validador personalizado para el número de teléfono.",
        },
        {
            id: "parseCountrys",
            type: "(data: CountryProps[]) => CountryProps[]",
            require: false,
            default: "undefined",
            description:
                "Function para mapear, ordenar, filtrar, etc, los países del selector de codigo de telefono.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputPhone />`,
        },
        {
            text: "Con valor por defecto",
            content: `<InputPhone defaultValue={{ code: '+57', number: '1234567890' }} />`,
        },
        {
            text: "Con validación personalizada",
            content: `<InputPhone validator={myPhoneValidator} />`,
        },
    ],
};
