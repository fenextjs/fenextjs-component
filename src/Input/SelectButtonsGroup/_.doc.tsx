export default {
    id: "input-select-buttons-group",
    idStorybook: "input-select-buttons-group",
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
            type: "InputSelectItemOptionBaseProps<T>[]",
            require: false,
            description:
                "Opciones predeterminadas seleccionadas al iniciar el componente.",
            default: "[]",
        },
        {
            id: "value",
            type: "InputSelectItemOptionBaseProps<T>[]",
            require: false,
            description: "Opciones seleccionadas actualmente.",
        },
        {
            id: "onChange",
            type: "(v?: InputSelectItemOptionBaseProps<T>[]) => void",
            require: false,
            description:
                "Función que se ejecuta cuando el valor seleccionado cambia.",
        },
        {
            id: "onChangeData",
            type: "(v?: T[]) => void",
            require: false,
            description:
                "Función que se ejecuta cuando los datos seleccionados cambian.",
        },
        {
            id: "validatorData",
            type: "FenextjsValidatorClass<T[]>",
            require: false,
            description:
                "Instancia de `FenextjsValidatorClass` para validar los datos seleccionados.",
        },
        {
            id: "validator",
            type: "(e: InputSelectItemOptionBaseProps<T>[]) => Promise<any> | any",
            require: false,
            description:
                "Función de validación personalizada que se ejecuta cuando el valor cambia.",
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
            type: "InputSelectItemOptionBaseProps<T>[]",
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
    defaultValue={[{ label: "Opción 1", value: 1 }, { label: "Opción 2", value: 2 }]}
    options={[
        { label: "Opción 1", value: 1 },
        { label: "Opción 2", value: 2 },
        { label: "Opción 3", value: 3 },
    ]}
    onChange={(selected) => console.log(selected)}
/>`,
        },
        {
            text: "InputSelectButtonsGroup con selección multiple",
            content: `
<InputSelectButtonsGroup
    isMultiple={true}
    options={[
        { label: "Opción 1", value: 1 },
        { label: "Opción 2", value: 2 },
        { label: "Opción 3", value: 3 },
    ]}
    onChange={(selected) => console.log("Opciónes seleccionadas:", selected)}
/>`,
        },
    ],
};