export default {
    id: "input-code",
    idStorybook: "component-input-code",
    name: "InputCode",
    description:
        "El componente InputCode es un campo de entrada diseñado para ingresar códigos de verificación o códigos de un solo uso. Presenta un diseño que resalta cada carácter ingresado, ideal para situaciones como la autenticación de dos factores.",
    props: [
        {
            id: "maxLength",
            type: "number",
            require: true,
            default: "1",
            description:
                "Número máximo de caracteres que se pueden ingresar en el input.",
        },
        {
            id: "defaultValue",
            type: "string",
            require: false,
            default: "''",
            description:
                "Valor predeterminado del input cuando se renderiza por primera vez.",
        },
        {
            id: "onChange",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando se cambia el valor del input.",
        },
        {
            id: "placeholder",
            type: "string[]",
            require: false,
            default: "[]",
            description:
                "Array de placeholders que se muestran en cada campo del input.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS adicional para el input.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el input está deshabilitado.",
        },
        {
            id: "type",
            type: "'text'",
            require: false,
            default: "'text'",
            description: "Tipo del input, debe ser 'text'.",
        },
        // Agrega más propiedades si hay más en InputTextBaseProps que quieras incluir
    ],
    useExample: [
        {
            text: "Código de verificación",
            content: `<InputCode maxLength={6} placeholder={['0', '0', '0', '0', '0', '0']} />`,
        },
        {
            text: "Input deshabilitado",
            content: `<InputCode maxLength={4} disabled={true} placeholder={['A', 'B', 'C', 'D']} />`,
        },
    ],
};
