export default {
    id: "input-checkbox",
    idStorybook: "input-inputcheckbox",
    name: "InputCheckbox",
    description:
        "El componente InputCheckbox es un campo de entrada de tipo checkbox que permite al usuario seleccionar o deseleccionar una opción. Puede mostrar etiquetas y manejar validaciones, así como valores personalizados para las opciones activas e inactivas.",
    props: [
        {
            id: "label",
            type: "ReactNode",
            require: false,
            default: "''",
            description: "Etiqueta que se muestra al lado del checkbox.",
        },
        {
            id: "labelPosition",
            type: "'right' | 'left'",
            require: false,
            default: "'right'",
            description: "Posición de la etiqueta en relación con el checkbox.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description: "Atributo name del elemento input checkbox.",
        },
        {
            id: "onChange",
            type: "(checked: boolean) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando se alterna el checkbox, recibe un valor booleano que indica si está seleccionado.",
        },
        {
            id: "defaultValue",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Valor predeterminado del checkbox cuando se renderiza por primera vez.",
        },
        {
            id: "value",
            type: "boolean",
            require: false,
            default: "undefined",
            description: "Valor controlado del checkbox.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el checkbox está deshabilitado.",
        },
        {
            id: "onValidateCheck",
            type: "() => Promise<void> | void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta para validar el checkbox.",
        },
        {
            id: "optional",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el checkbox es opcional.",
        },
        {
            id: "optionalText",
            type: "string",
            require: false,
            default: "'(optional)'",
            description: "Texto que se muestra si el checkbox es opcional.",
        },
        {
            id: "required",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el checkbox es obligatorio.",
        },
        {
            id: "requiredText",
            type: "string",
            require: false,
            default: "'*'",
            description: "Texto que se muestra si el checkbox es obligatorio.",
        },
        {
            id: "onActive",
            type: "() => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el checkbox se activa.",
        },
        {
            id: "onInactive",
            type: "() => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el checkbox se desactiva.",
        },
        {
            id: "valueActive",
            type: "VT",
            require: false,
            default: "undefined",
            description: "Valor a pasar cuando el checkbox se activa.",
        },
        {
            id: "valueInactive",
            type: "VF",
            require: false,
            default: "undefined",
            description: "Valor a pasar cuando el checkbox se desactiva.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<Check />",
            description: "Ícono que se muestra junto al checkbox.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputCheckbox label="Acepto los términos y condiciones" />`,
        },
        {
            text: "Checkbox deshabilitado",
            content: `<InputCheckbox label="No puedo seleccionar este" disabled={true} />`,
        },
        {
            text: "Checkbox obligatorio",
            content: `<InputCheckbox label="Este checkbox es obligatorio" required={true} />`,
        },
        {
            text: "Checkbox opcional con texto",
            content: `<InputCheckbox label="Este es opcional" optional={true} optionalText="(opcional)" />`,
        },
    ],
};
