export default {
    id: "input-select-multiple-t",
    idStorybook: "component-input-select-multiple-t",
    name: "InputSelectMultipleT",
    description:
        "El componente `InputSelectMultipleT` es una variante de `InputSelectMultiple` que permite seleccionar múltiples opciones de un tipo genérico `T`. Incluye la funcionalidad de conversión personalizada para manejar los datos y su representación en el select.",
    props: [
        {
            id: "defaultValue",
            type: "T[]",
            require: false,
            description: "Valores por defecto seleccionados en el select.",
        },
        {
            id: "value",
            type: "T[]",
            require: false,
            description: "Valores actualmente seleccionados.",
        },
        {
            id: "options",
            type: "T[]",
            require: true,
            description: "Lista de opciones disponibles para seleccionar.",
        },
        {
            id: "onChange",
            type: "(v?: T[]) => void",
            require: false,
            description:
                "Función que se ejecuta cuando cambian los valores seleccionados.",
        },
        {
            id: "onParse",
            type: "(v?: T) => InputSelectItemOptionBaseProps<T>",
            require: true,
            description:
                "Función utilizada para convertir cada valor del tipo `T` en una opción seleccionable para el componente `InputSelectMultiple`.",
        },
    ],
    useExample: [
        {
            text: "Uso básico de InputSelectMultipleT",
            content: `
const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
];

<InputSelectMultipleT
    options={options}
    onParse={(option) => ({ label: option.name, value: option.id })}
    onChange={(selected) => console.log(selected)}
/>`,
        },
        {
            text: "InputSelectMultipleT con valores por defecto",
            content: `
const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
];

<InputSelectMultipleT
    defaultValue={[options[0], options[1]]}
    options={options}
    onParse={(option) => ({ label: option.name, value: option.id })}
    onChange={(selected) => console.log(selected)}
/>`,
        },
    ],
};
