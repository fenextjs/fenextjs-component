export default {
    id: "input-unit-weight",
    idStorybook: "component-input-unit-weight",
    name: "InputUnitWeight",
    description: "El componente InputUnitWeight permite al usuario seleccionar y gestionar unidades de peso, ofreciendo opciones predeterminadas y personalizadas. Está basado en `InputUnitBase` y extiende su funcionalidad con opciones específicas de peso.",
    props: [
        {
            id: "defaultValue",
            type: "Partial<InputUnitWeightValue>",
            require: false,
            default: "undefined",
            description: "Valor predeterminado para el componente, que incluye el valor y la unidad seleccionados.",
        },
        {
            id: "value",
            type: "Partial<InputUnitWeightValue>",
            require: false,
            default: "undefined",
            description: "Valor actual del componente, que incluye el valor numérico y la unidad seleccionada.",
        },
        {
            id: "onChange",
            type: "(data: Partial<InputUnitWeightValue>) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al cambiar el valor o la unidad, devolviendo los datos actualizados.",
        },
        {
            id: "options",
            type: "Unit_Weight[]",
            require: false,
            default: "Object.keys(Unit_Weight).map((e) => Unit_Weight[e])",
            description: "Opciones de unidades de peso disponibles para seleccionar.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el estilo del componente.",
        },
        {
            id: "classNameDisabled",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el estado deshabilitado del componente.",
        },
        {
            id: "classNameInput",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el campo de entrada de texto.",
        }
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<InputUnitWeight />`
        },
        {
            text: "Con valor predeterminado",
            content: `<InputUnitWeight defaultValue={{ value: 5, unit: "kilograms" }} />`
        },
        {
            text: "Con función onChange",
            content: `<InputUnitWeight onChange={(data) => console.log(data)} />`
        }
    ]
};
