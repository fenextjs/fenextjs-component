export default {
    id: "input-number",
    idStorybook: "component-input-number",
    name: "InputNumber",
    description: "El componente InputNumber permite a los usuarios ingresar un valor numérico con opciones para aumentar o disminuir el valor usando botones, así como la posibilidad de validación.",
    props: [
        {
            id: "value",
            type: "number | ''",
            require: false,
            default: "''",
            description: "Valor actual del input. Puede ser un número o una cadena vacía.",
        },
        {
            id: "defaultValue",
            type: "number | ''",
            require: false,
            default: "''",
            description: "Valor inicial del input.",
        },
        {
            id: "onChange",
            type: "(v: number | '') => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al cambiar el valor del input.",
        },
        {
            id: "onChangeValidate",
            type: "(v: number | '') => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al perder el foco y después de validar el valor.",
        },
        {
            id: "min",
            type: "number",
            require: false,
            default: "undefined",
            description: "Valor mínimo permitido para el input.",
        },
        {
            id: "max",
            type: "number",
            require: false,
            default: "undefined",
            description: "Valor máximo permitido para el input.",
        },
        {
            id: "useBtnIncreaseDecrease",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si se deben mostrar los botones de aumento/disminución.",
        },
        {
            id: "disabledScroll",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita el desplazamiento del ratón en el input.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente.",
        },
        ...Object.keys(InputTextProps).map(key => ({
            id: key,
            type: typeof InputTextProps[key],
            require: false,
            default: InputTextProps[key].default || "undefined",
            description: `Propiedad del componente InputTextProps: ${key}`
        }))
    ],
    useExample: [
        {
            text: "Uso básico del componente InputNumber",
            content: `<InputNumber onChange={(value) => console.log(value)} />`
        },
        {
            text: "Uso de InputNumber con validación",
            content: `<InputNumber onChangeValidate={(value) => console.log('Validated:', value)} />`
        },
        {
            text: "Uso de InputNumber con límites",
            content: `<InputNumber min={0} max={100} onChange={(value) => console.log(value)} />`
        },
        {
            text: "Uso de InputNumber con botones de aumento/disminución",
            content: `<InputNumber useBtnIncreaseDecrease={true} onChange={(value) => console.log(value)} />`
        },
    ]
};
