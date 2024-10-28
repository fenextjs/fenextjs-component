export default {
    id: "input-select-number",
    idStorybook: "component-input-select-number",
    name: "InputSelectNumber",
    description:
        "El componente `InputSelectNumber` permite la selección de un valor numérico de una lista de números dentro de un rango definido. Ofrece funcionalidades adicionales como la personalización del texto a mostrar para cada número.",
    props: [
        {
            id: "onChange",
            type: "(n?: number) => void",
            require: false,
            description:
                "Función que se ejecuta cuando el valor seleccionado cambia.",
        },
        {
            id: "defaultValue",
            type: "number",
            require: false,
            description: "Valor numérico por defecto seleccionado.",
        },
        {
            id: "min",
            type: "number",
            require: false,
            defaultValue: "0",
            description: "El valor mínimo permitido en el rango de selección.",
        },
        {
            id: "max",
            type: "number",
            require: false,
            defaultValue: "100",
            description: "El valor máximo permitido en el rango de selección.",
        },
        {
            id: "parseText",
            type: "(e: number) => string",
            require: false,
            defaultValue: "(e) => `${e}`",
            description:
                "Función utilizada para convertir el número seleccionado en una cadena de texto personalizada a mostrar en el select.",
        },
    ],
    useExample: [
        {
            text: "Uso básico de InputSelectNumber",
            content: `
<InputSelectNumber
    min={1}
    max={10}
    defaultValue={5}
    onChange={(n) => console.log("Valor seleccionado:", n)}
/>`,
        },
        {
            text: "InputSelectNumber con formato personalizado",
            content: `
<InputSelectNumber
    min={1}
    max={20}
    parseText={(n) => \`Número: \${n}\`}
    onChange={(n) => console.log("Número seleccionado:", n)}
/>`,
        },
    ],
};
