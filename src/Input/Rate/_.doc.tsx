export default {
    id: "input-rate",
    idStorybook: "component-input-rate",
    name: "InputRate",
    description: "El componente InputRate permite seleccionar una calificación de 0 a 5 utilizando estrellas interactivas. Es altamente personalizable y puede gestionar valores predeterminados o seleccionados por el usuario.",
    props: [
        {
            id: "value",
            type: "number",
            require: false,
            default: "undefined",
            description: "Valor actual de la calificación. Se espera un número entre 0 y 5.",
        },
        {
            id: "defaultValue",
            type: "number",
            require: false,
            default: "0",
            description: "Valor predeterminado de la calificación cuando no se proporciona 'value'.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor principal del componente.",
        },
        {
            id: "classNameContentStar",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de las estrellas.",
        },
        {
            id: "classNameStar",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar las estrellas.",
        },
        {
            id: "classNameStarActive",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar las estrellas activas (calificadas).",
        },
        {
            id: "classNameNumber",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la visualización del número de calificación.",
        },
        {
            id: "onChange",
            type: "(star: number) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando cambia la calificación seleccionada.",
        }
    ],
    useExample: [
        {
            text: "Calificación básica",
            content: `<InputRate />`
        },
        {
            text: "Calificación con valor predeterminado",
            content: `<InputRate defaultValue={3} />`
        },
        {
            text: "Calificación con valor controlado",
            content: `<InputRate value={4} onChange={(value) => console.log(value)} />`
        },
        {
            text: "Calificación con personalización de clases",
            content: `<InputRate className="custom-class" classNameStar="custom-star" />`
        }
    ]
};
