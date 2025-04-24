export default {
    id: "input-select-buttons-group",
    idStorybook: "input-inputselectbuttonsgroup",
    name: "InputSelectButtonsGroup",
    description:
        "El componente InputSelectButtonsGroup permite seleccionar múltiples opciones de una lista de elementos. Ofrece funcionalidades avanzadas como validación personalizada, deshabilitación de opciones y selección de estilo de visualización.",
    props: [
        {
            id: "classNameSelectButtonsGroup",
            type: "string",
            require: false,
            description:
                "Clase CSS personalizada para el contenedor principal del grupo de botones select.",
            default: '""',
        },
        {
            id: "classNameSelectButtonsGroupList",
            type: "string",
            require: false,
            description:
                "Clase CSS personalizada para la lista de opciones del grupo de botones select.",
            default: '""',
        },
        {
            id: "defaultValue",
            type: "T[]",
            require: false,
            description:
                "Opciones predeterminadas seleccionadas al iniciar el componente.",
            default: "[]",
        },
        {
            id: "value",
            type: "T[]",
            require: false,
            description: "Opciones seleccionadas actualmente.",
        },
        {
            id: "onChange",
            type: "(v?: T[]) => void",
            require: false,
            description:
                "Función que se ejecuta cuando los datos seleccionados cambian.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass<T[]>",
            require: false,
            description:
                "Instancia de `FenextjsValidatorClass` para validar los datos seleccionados.",
        },
        {
            id: "CustomOptionsSelected",
            type: "typeof InputSelectOption<T>",
            require: false,
            description:
                "Componente personalizado para renderizar las opciones seleccionadas.",
        },
        {
            id: "options",
            type: "T[]",
            require: false,
            description: "Lista de opciones disponibles para seleccionar.",
        },
        {
            id: "label",
            type: "string",
            require: false,
            description: "Etiqueta para el grupo de botones select.",
        },
        {
            id: "optional",
            type: "boolean",
            require: false,
            description: "Indica si el campo es opcional.",
        },
        {
            id: "optionalText",
            type: "string",
            require: false,
            description: "Texto que se muestra cuando el campo es opcional.",
        },
        {
            id: "required",
            type: "boolean",
            require: false,
            description: "Indica si el campo es obligatorio.",
        },
        {
            id: "requiredText",
            type: "string",
            require: false,
            description: "Texto que se muestra cuando el campo es obligatorio.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            description: "Indica si el componente está deshabilitado.",
        },
        {
            id: "isMultiple",
            type: "boolean",
            require: false,
            description:
                "Indica si se pueden seleccionar múltiples opciones. Si es `false`, solo se puede seleccionar una opción.",
            default: "false",
        },
    ],
    useExample: [
        {
            text: "Uso básico de InputSelectButtonsGroup",
            content: `
<InputSelectButtonsGroup
    defaultValue={["Opción 1","Opción 2"]}
    options={["Opción 1","Opción 2", "Opción 3", ]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    onChange={(selected) => console.log(selected)}
/>`,
        },
        {
            text: "InputSelectButtonsGroup con selección múltiple",
            content: `
<InputSelectButtonsGroup
    isMultiple={true}
    options={["Opción 1","Opción 2", "Opción 3", ]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    onChange={(selected) => console.log("Opciones seleccionadas:", selected)}
/>`,
        },
        {
            text: "InputSelectButtonsGroup con validación personalizada",
            content: `
<InputSelectButtonsGroup
    options={["Opción 1","Opción 2", "Opción 3", ]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    isMultiple={true}
    validator={FV().isArray(
        FV().isString("string").isCustom(e => e === "Opción 1" ? new ErrorFenextjs({ message: "No puedes seleccionar esta opción" }) : true)
    ).isMinOrEqual(3, "mínimo 3 elementos").isMaxOrEqual(5, "máximo 5 elementos")}
    onChange={(selected) => console.log("Opciones seleccionadas:", selected)}
/>`,
        },
    ],
};
