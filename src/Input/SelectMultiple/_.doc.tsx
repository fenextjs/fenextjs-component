export default {
    id: "input-select-multiple",
    idStorybook: "component-input-select-multiple",
    name: "InputSelectMultiple",
    description:
        "El componente InputSelectMultiple permite seleccionar múltiples opciones de una lista de elementos. Ofrece funcionalidades avanzadas como validación personalizada, eliminación de opciones seleccionadas y selección de estilo de visualización.",
    props: [
        {
            id: "classNameSelectMultiple",
            type: "string",
            require: false,
            description: "Clase CSS personalizada para el componente `select-multiple`.",
            default: '""',
        },
        {
            id: "classNameSelectMultipleList",
            type: "string",
            require: false,
            description: "Clase CSS personalizada para la lista de opciones.",
            default: '""',
        },
        {
            id: "defaultValue",
            type: "InputSelectItemOptionBaseProps<T>[]",
            require: false,
            description: "Opciones predeterminadas seleccionadas al iniciar el componente.",
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
            description: "Función que se ejecuta cuando el valor seleccionado cambia.",
        },
        {
            id: "onChangeData",
            type: "(v?: T[]) => void",
            require: false,
            description: "Función que se ejecuta cuando los datos seleccionados cambian.",
        },
        {
            id: "onChangeValidate",
            type: "(e: InputSelectItemOptionBaseProps<T>[]) => Promise<any> | any",
            require: false,
            description: "Función de validación personalizada que se ejecuta cuando el valor cambia.",
        },
        {
            id: "iconDelete",
            type: "ReactNode",
            require: false,
            description: "Icono personalizado para eliminar una opción seleccionada.",
            default: "<Trash />",
        },
        {
            id: "typeSelectMultipleStyle",
            type: "'normal' | 'checkbox'",
            require: false,
            description: "Define el estilo del select múltiple. Puede ser `normal` o con casillas de verificación (`checkbox`).",
            default: "'normal'",
        },
        {
            id: "CustomOptionsSelected",
            type: "typeof InputSelectOption<T>",
            require: false,
            description: "Componente personalizado para renderizar las opciones seleccionadas.",
        },
        {
            id: "validatorData",
            type: "FenextjsValidatorClass<T[]>",
            require: false,
            description: "Instancia de `FenextjsValidatorClass` para validar los datos seleccionados.",
        }
    ],
    useExample: [
        {
            text: "Uso básico de InputSelectMultiple",
            content: `
<InputSelectMultiple
    defaultValue={[{ label: "Option 1", value: 1 }, { label: "Option 2", value: 2 }]}
    onChange={(selected) => console.log(selected)}
/>`,
        },
        {
            text: "InputSelectMultiple con validación personalizada",
            content: `
<InputSelectMultiple
    onChangeValidate={async (selected) => {
        if (selected.length > 5) {
            throw new Error("No puedes seleccionar más de 5 opciones.");
        }
    }}
    onChangeData={(data) => console.log("Datos seleccionados:", data)}
/>`,
        }
    ]
};
