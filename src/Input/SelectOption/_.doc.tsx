export default {
    id: "input-select-option",
    idStorybook: "input-inputselectoption",
    name: "InputSelectOption",
    description:
        "El componente InputSelectOption permite mostrar opciones seleccionables con texto, imágenes o íconos, además de proporcionar funcionalidades adicionales como la eliminación de opciones y la personalización de eventos.",
    props: [
        {
            id: "id",
            type: "string | number",
            require: true,
            default: "undefined",
            description:
                "ID de la opción, que puede ser un string o un número.",
        },
        {
            id: "text",
            type: "string",
            require: true,
            default: "undefined",
            description: "Texto que se mostrará en la opción.",
        },
        {
            id: "img",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "URL de la imagen que se mostrará en la opción, si es proporcionada.",
        },
        {
            id: "imgComponent",
            type: "ImgProps",
            require: false,
            default: "undefined",
            description:
                "Propiedades para personalizar el componente de imagen (Img).",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Icono que se mostrará junto al texto de la opción.",
        },
        {
            id: "type",
            type: "'div' | 'option' | 'multiple'",
            require: false,
            default: "'div'",
            description:
                "Define el tipo de opción que se renderiza: div, option, o multiple.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si la opción está deshabilitada.",
        },
        {
            id: "selected",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si la opción está seleccionada.",
        },
        {
            id: "hidden",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si la opción está oculta.",
        },
        {
            id: "onClick",
            type: "(item: InputSelectOptionBaseProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al hacer clic en la opción.",
        },
        {
            id: "onDelete",
            type: "(item: InputSelectOptionBaseProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al eliminar la opción.",
        },
        {
            id: "isBtn",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si la opción se debe comportar como un botón.",
        },
        {
            id: "data",
            type: "T",
            require: false,
            default: "undefined",
            description: "Datos personalizados asociados con la opción.",
        },
        {
            id: "iconDelete",
            type: "ReactNode",
            require: false,
            default: "<Trash />",
            description:
                "Icono personalizado para la eliminación de la opción.",
        },
        {
            id: "classNameOption",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la opción.",
        },
        {
            id: "classNameOptionImg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la imagen de la opción.",
        },
        {
            id: "classNameOptionDelete",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el botón de eliminar de la opción.",
        },
    ],
    useExample: [
        {
            text: "Opción básica",
            content: `<InputSelectOption id={1} text="Opción 1" />`,
        },
        {
            text: "Opción con imagen",
            content: `<InputSelectOption id={2} text="Opción 2" img="/path/to/img.jpg" />`,
        },
        {
            text: "Opción con acción personalizada",
            content: `<InputSelectOption id={3} text="Opción 3" onClick={(item) => console.log(item)} />`,
        },
        {
            text: "Opción deshabilitada",
            content: `<InputSelectOption id={4} text="Opción 4" disabled={true} />`,
        },
    ],
};
