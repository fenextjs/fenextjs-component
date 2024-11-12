export default {
    id: "input-password",
    idStorybook: "component-input-password",
    name: "InputPassword",
    description:
        "El componente InputPassword es un campo de entrada de contraseña que permite alternar entre la visibilidad del texto y el modo de contraseña mediante un ícono de ojo.",
    props: [
        {
            id: "id",
            type: "string",
            require: false,
            default: "''",
            description: "ID del campo de entrada.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description: "Nombre del campo de entrada.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass",
            require: false,
            default: "undefined",
            description:
                "Clase de validador de Fenextjs para la validación de la entrada.",
        },
        {
            id: "label",
            type: "ReactNode",
            require: false,
            default: "''",
            description:
                "Texto de etiqueta que se muestra para el campo de entrada.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "''",
            description:
                "Texto que se muestra en el campo de entrada cuando está vacío.",
        },
        {
            id: "defaultValue",
            type: "string | undefined | null",
            require: false,
            default: "undefined",
            description:
                "Valor predeterminado para establecer en el campo de entrada.",
        },
        {
            id: "onChange",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al cambiar el valor del input.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Ícono utilizado para alternar entre el texto visible y la contraseña.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "classNameContentEye",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el ícono de alternancia.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si el input está deshabilitado.",
        },
        {
            id: "autoFocus",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si el input debe recibir foco automáticamente al cargarse.",
        },
    ],
    extras: [
        {
            id: "alternancia-visibilidad",
            title: "Alternancia de visibilidad",
            description:
                "El componente incluye un ícono que permite alternar entre mostrar el texto de la contraseña o mantenerlo oculto. El estado de visibilidad cambia entre 'text' y 'password' al hacer click en el ícono.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputPassword placeholder="Enter your password" />`,
        },
        {
            text: "Con valor inicial",
            content: `<InputPassword value="mySecretPassword" />`,
        },
        {
            text: "Personalización de clase",
            content: `<InputPassword className="custom-input" />`,
        },
    ],
};
