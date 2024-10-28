export default {
    id: "input-text-select",
    idStorybook: "input-inputtextselect",
    name: "InputTextSelect",
    description:
        "El componente InputTextSelect combina un campo de texto con un menú desplegable (select), permitiendo a los usuarios ingresar texto o seleccionar una opción predefinida de una lista. Ofrece gran flexibilidad y personalización en términos de etiquetas, placehoder y validaciones.",
    props: [
        {
            id: "label",
            type: "any",
            require: false,
            default: "undefined",
            description:
                "Texto de la etiqueta que se muestra para el campo de texto y select.",
        },
        {
            id: "placeholderSelect",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Texto que se muestra como placeholder en el campo select.",
        },
        {
            id: "placeholderText",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Texto que se muestra como placeholder en el campo de texto.",
        },
        {
            id: "defaultValue",
            type: "Partial<TextSelectProps>",
            require: false,
            default: "{}",
            description:
                "Valor predeterminado para el componente, incluyendo el texto y la opción seleccionada.",
        },
        {
            id: "value",
            type: "Partial<TextSelectProps>",
            require: false,
            default: "undefined",
            description:
                "Valor actual del componente, que puede ser controlado externamente. Incluye el texto y la opción seleccionada.",
        },
        {
            id: "onChange",
            type: "(data: Partial<TextSelectProps>) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al cambiar el valor del texto o del select. Recibe un objeto con las propiedades 'text' y 'select'.",
        },
        {
            id: "posSelect",
            type: "'left' | 'right'",
            require: false,
            default: "'left'",
            description:
                "Posición del campo select respecto al campo de texto.",
        },
        {
            id: "validator",
            type: "any",
            require: false,
            default: "undefined",
            description:
                "Validador personalizado para el campo de texto y select.",
        },
        {
            id: "errorWithIsChange",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se debe mostrar el mensaje de error cuando el valor cambia.",
        },
        {
            id: "error",
            type: "string | ReactNode",
            require: false,
            default: "undefined",
            description:
                "Mensaje de error que se muestra cuando la validación falla.",
        },
    ],
    useExample: [
        {
            text: "InputTextSelect básico",
            content: `<InputTextSelect />`,
        },
        {
            text: "InputTextSelect con placeholders",
            content: `<InputTextSelect placeholderText="Ingresa texto" placeholderSelect="Selecciona una opción" />`,
        },
        {
            text: "InputTextSelect con valores predeterminados",
            content: `<InputTextSelect defaultValue={{ text: "Texto inicial", select: { id: 1, text: "Opción 1" } }} />`,
        },
        {
            text: "InputTextSelect con onChange",
            content: `<InputTextSelect onChange={(data) => console.log(data)} />`,
        },
    ],
};
