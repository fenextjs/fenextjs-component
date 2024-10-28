export default {
    id: "input-select-country-multiple",
    idStorybook: "input-inputselectcountrymultiple",
    name: "InputSelectCountryMultiple",
    description:
        "El componente InputSelectCountryMultiple permite seleccionar múltiples países de una lista de opciones, con posibilidad de personalización adicional a través de las propiedades del componente.",
    props: [
        {
            id: "...props",
            type: "InputSelectMultipleTProps<CountryProps>",
            require: false,
            description:
                "Propiedades adicionales que extienden de InputSelectMultipleTProps, como eventos o configuraciones del componente.",
        },
    ],
    useExample: [
        {
            text: "Selección múltiple de países",
            content: `
<InputSelectCountryMultiple />`,
        },
        {
            text: "InputSelectCountryMultiple con estilos personalizados",
            content: `
<InputSelectCountryMultiple
    classNameSelect="custom-select-multiple"
/>`,
        },
        {
            text: "InputSelectCountryMultiple con opciones predeterminadas",
            content: `
<InputSelectCountryMultiple
    value={[{ name: "United States", isoCode: "US" }, { name: "Canada", isoCode: "CA" }]}
/>`,
        },
    ],
};
