export default {
    id: "input-google-autocomplete",
    idStorybook: "component-input-google-autocomplete",
    name: "InputGoogleAutocomplete",
    description:
        "El componente InputGoogleAutocomplete permite la entrada de direcciones utilizando la funcionalidad de autocompletado de Google, con validaciones y manejo de errores.",
    props: [
        {
            id: "defaultValueJsonString",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Valor predeterminado en formato JSON string para la dirección.",
        },
        {
            id: "valueJsonString",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Valor actual en formato JSON string para la dirección.",
        },
        {
            id: "onChangeJsonString",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el valor en formato JSON string cambia.",
        },
        {
            id: "defaultValue",
            type: "AddressGoogle | undefined",
            require: false,
            default: "undefined",
            description: "El valor predeterminado del input.",
        },
        {
            id: "value",
            type: "AddressGoogle | undefined",
            require: false,
            default: "undefined",
            description: "El valor actual del input.",
        },
        {
            id: "onChange",
            type: "(value: AddressGoogle | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando cambia el valor de la dirección.",
        },
        {
            id: "parseJson_to_String",
            type: "(value: AddressGoogle | undefined) => string",
            require: false,
            default: "parseAddress_to_String",
            description:
                "Función que convierte el objeto de dirección a string.",
        },
        {
            id: "parseString_to_Json",
            type: "(value: string) => AddressGoogle | undefined",
            require: false,
            default: "parseString_to_Address",
            description:
                "Función que convierte un string a un objeto de dirección.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del input.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass<AddressGoogle>",
            require: false,
            default: "undefined",
            description:
                "Instancia de FenextjsValidator para validaciones personalizadas del input.",
        },
    ],
    useExample: [
        {
            text: "InputGoogleAutocomplete básico",
            content: `<InputGoogleAutocomplete />`,
        },
        {
            text: "InputGoogleAutocomplete con validación",
            content: `<InputGoogleAutocomplete validator={customValidator} />`,
        },
        {
            text: "InputGoogleAutocomplete con valor predeterminado",
            content: `<InputGoogleAutocomplete defaultValueJsonString='{"formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA"}' />`,
        },
        {
            text: "InputGoogleAutocomplete con función personalizada",
            content: `<InputGoogleAutocomplete onChangeJsonString={(value) => console.log(value)} />`,
        },
    ],
};
