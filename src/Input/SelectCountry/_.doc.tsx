export default {
    id: "input-select-country",
    idStorybook: "component-input-select-country",
    name: "InputSelectCountry",
    description: "El componente InputSelectCountry permite seleccionar un país de una lista de países, con la posibilidad de personalizar las clases CSS.",
    props: [
        {
            id: "...props",
            type: "InputSelectTProps<CountryProps>",
            require: false,
            description: "Propiedades adicionales que extienden de InputSelectTProps, como eventos o configuraciones del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `
<InputSelectCountry />`,
        },
        {
            text: "InputSelectCountry con opciones personalizadas",
            content: `
<InputSelectCountry
    classNameSelect="custom-select"
    classNameList="custom-list"
/>`,
        },
        {
            text: "InputSelectCountry con estilos CSS personalizados",
            content: `
<InputSelectCountry
    classNameSelect="custom-select-class"
/>`,
        }
    ]
};
