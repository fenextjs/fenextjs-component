export default {
    id: "input-color",
    idStorybook: "component-input-color",
    name: "InputColor",
    description:
        "El componente InputColor permite a los usuarios seleccionar un color mediante un selector de color. Es útil para aplicaciones que requieren la personalización de colores, como editores de imágenes, personalización de temas y formularios de diseño.",
    props: [
        {
            id: "defaultValue",
            type: "string",
            require: false,
            default: "''",
            description:
                "Valor predeterminado del selector de color cuando se renderiza por primera vez.",
        },
        {
            id: "value",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Valor del selector de color, si se proporciona, anula el valor predeterminado.",
        },
        {
            id: "onChange",
            type: "(color: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el color seleccionado cambia.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS adicional para el contenedor del selector de color.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el selector de color está deshabilitado.",
        },
    ],
    useExample: [
        {
            text: "Selector de color por defecto",
            content: `<InputColor defaultValue="#ff0000" onChange={(color) => console.log(color)} />`,
        },
        {
            text: "Selector de color deshabilitado",
            content: `<InputColor defaultValue="#00ff00" disabled={true} />`,
        },
    ],
};
