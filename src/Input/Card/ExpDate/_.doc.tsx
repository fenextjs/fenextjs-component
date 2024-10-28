export default {
    id: "input-card-exp-date",
    idStorybook: "component-input-card-exp-date",
    name: "InputCardExpDate",
    description: "El componente InputCardExpDate es un campo de entrada diseñado para capturar la fecha de expiración de una tarjeta de crédito en el formato MM/YY. Este componente asegura que la entrada sea válida y maneja la lógica para convertir entre el texto ingresado y los datos estructurados de mes y año.",
    props: [
        {
            id: "defaultValue",
            type: "InputCardExpDateDataProps",
            require: false,
            default: "{}",
            description: "Valor predeterminado del componente, que incluye el mes y el año de expiración de la tarjeta.",
        },
        {
            id: "value",
            type: "InputCardExpDateDataProps",
            require: false,
            default: "{}",
            description: "Valor controlado del componente, que debe incluir el mes y el año de expiración.",
        },
        {
            id: "onChange",
            type: "(data: InputCardExpDateDataProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando los datos del componente cambian, proporcionando el mes y el año como objeto.",
        },
        {
            id: "maxExpDateLength",
            type: "number",
            require: false,
            default: 4,
            description: "Longitud máxima permitida para la entrada de la fecha de expiración. Se establece como 4 para MMYY.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "'MM/YY'",
            description: "Texto que se muestra como marcador de posición en el campo de entrada.",
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
            description: "Mensaje de error que se muestra si la validación falla.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el estilo del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputCardExpDate />`
        },
        {
            text: "InputCardExpDate con valor predeterminado",
            content: `<InputCardExpDate defaultValue={{ month: 12, year: 23 }} />`
        },
        {
            text: "InputCardExpDate controlado",
            content: `<InputCardExpDate value={{ month: 11, year: 25 }} onChange={(data) => console.log(data)} />`
        },
        {
            text: "InputCardExpDate deshabilitado",
            content: `<InputCardExpDate disabled={true} />`
        }
    ]
};
