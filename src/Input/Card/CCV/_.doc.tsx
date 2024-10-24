export default {
    id: "input-card-ccv",
    idStorybook: "component-input-card-ccv",
    name: "InputCardCCV",
    description: "El componente InputCardCCV es un campo de entrada diseñado para capturar el Código de Seguridad (CCV) de una tarjeta de crédito. Este componente asegura que solo se ingresen números y limita la longitud a 4 caracteres, facilitando una entrada de datos adecuada y segura para transacciones.",
    props: [
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "'XXX'",
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
            id: "optional",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo de entrada es opcional.",
        },
        {
            id: "onChange",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al cambiar el valor del campo de entrada.",
        },
        {
            id: "maxLength",
            type: "number",
            require: false,
            default: 4,
            description: "Longitud máxima permitida para la entrada, en este caso 4 caracteres. Se establece directamente en el componente.",
        },
        {
            id: "regExpReplace",
            type: "string",
            require: false,
            default: "''",
            description: "Cadena utilizada para reemplazar los valores no deseados. Se establece directamente en el componente.",
        },
        {
            id: "regExp",
            type: "RegExp",
            require: false,
            default: "/[^0-9]/g",
            description: "Expresión regular que se utiliza para validar la entrada, permitiendo solo números. Se establece directamente en el componente.",
        },
        {
            id: "inputMode",
            type: "string",
            require: false,
            default: "'numeric'",
            description: "Modo de entrada para facilitar el ingreso de datos numéricos en dispositivos móviles. Se establece directamente en el componente.",
        },
        {
            id: "type",
            type: "string",
            require: false,
            default: "'number'",
            description: "Tipo de entrada del campo, que se establece como número. Se establece directamente en el componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputCardCCV />`
        },
        {
            text: "InputCardCCV con texto de marcador de posición personalizado",
            content: `<InputCardCCV placeholder="Ingresa tu CCV" />`
        },
        {
            text: "InputCardCCV deshabilitado",
            content: `<InputCardCCV disabled={true} />`
        },
        {
            text: "InputCardCCV con función personalizada",
            content: `<InputCardCCV onChange={(e) => console.log(e.target.value)} />`
        }
    ]
};
