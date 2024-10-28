export default {
    id: "input-unit-volumen",
    idStorybook: "component-input-unit-volumen",
    name: "InputUnitVolumen",
    description:
        "El componente InputUnitVolumen permite al usuario seleccionar y gestionar unidades de volumen, ofreciendo opciones predeterminadas y personalizadas. Está basado en `InputUnitBase` y extiende su funcionalidad con opciones específicas de volumen.",
    props: [
        {
            id: "defaultValue",
            type: "Partial<InputUnitVolumenValue>",
            require: false,
            default: "undefined",
            description:
                "Valor predeterminado para el componente, que incluye el valor y la unidad seleccionados.",
        },
        {
            id: "value",
            type: "Partial<InputUnitVolumenValue>",
            require: false,
            default: "undefined",
            description:
                "Valor actual del componente, que incluye el valor numérico y la unidad seleccionada.",
        },
        {
            id: "onChange",
            type: "(data: Partial<InputUnitVolumenValue>) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al cambiar el valor o la unidad, devolviendo los datos actualizados.",
        },
        {
            id: "options",
            type: "Unit_Volumen[]",
            require: false,
            default: "Object.keys(Unit_Volumen).map((e) => Unit_Volumen[e])",
            description:
                "Opciones de unidades de volumen disponibles para seleccionar.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el estilo del componente.",
        },
        {
            id: "classNameDisabled",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el estado deshabilitado del componente.",
        },
        {
            id: "classNameInput",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el campo de entrada de texto.",
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<InputUnitVolumen />`,
        },
        {
            text: "Con valor predeterminado",
            content: `<InputUnitVolumen defaultValue={{ value: 10, unit: "liters" }} />`,
        },
        {
            text: "Con función onChange",
            content: `<InputUnitVolumen onChange={(data) => console.log(data)} />`,
        },
    ],
};
