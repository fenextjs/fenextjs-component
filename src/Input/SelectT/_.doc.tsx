export default {
    id: "input-select-t",
    idStorybook: "component-input-select-t",
    name: "InputSelectT",
    description:
        "El componente `InputSelectT` es un select customizable que permite pasar opciones y valores de un tipo genérico `T`. Implementa funciones para manejar la conversión de los elementos seleccionados y permite personalizar la representación de los datos.",
    props: [
        {
            id: "defaultValue",
            type: "T",
            require: false,
            description: "Valor por defecto seleccionado en el select.",
        },
        {
            id: "value",
            type: "T",
            require: false,
            description: "Valor actualmente seleccionado.",
        },
        {
            id: "options",
            type: "T[]",
            require: true,
            description: "Lista de opciones disponibles para seleccionar.",
        },
        {
            id: "onChange",
            type: "(v?: T) => void",
            require: false,
            description:
                "Función que se ejecuta cuando cambia el valor seleccionado.",
        },
        {
            id: "onParse",
            type: "(v?: T) => InputSelectItemOptionBaseProps<T>",
            require: true,
            description:
                "Función utilizada para convertir el valor del tipo `T` en una opción seleccionable para el componente `InputSelect`.",
        },
    ],
    useExample: [
        {
            text: "Uso básico de InputSelectT",
            content: `
const options = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }];

<InputSelectT
    options={options}
    onParse={(option) => ({ label: option.name, value: option.id })}
    onChange={(selected) => console.log(selected)}
/>`,
        },
        {
            text: "InputSelectT con valor por defecto",
            content: `
const options = [{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }];

<InputSelectT
    defaultValue={options[0]}
    options={options}
    onParse={(option) => ({ label: option.name, value: option.id })}
/>`,
        },
    ],
};
