export default {
    id: "input-select-city",
    idStorybook: "component-input-select-city",
    name: "InputSelectCity",
    description: "Componente InputSelectCity que permite seleccionar una ciudad basándose en el país y estado seleccionados.",
    props: [
        {
            id: "country",
            type: "CountryProps",
            require: false,
            default: "undefined",
            description: "El país seleccionado, utilizado para filtrar las ciudades disponibles.",
        },
        {
            id: "state",
            type: "StateProps",
            require: false,
            default: "undefined",
            description: "El estado seleccionado, utilizado para filtrar las ciudades disponibles.",
        },
        {
            id: "...props",
            type: "InputSelectTProps<CityProps>",
            require: false,
            description: "Cualquier otra propiedad que extiende de InputSelectTProps.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `
<InputSelectCity
    country={{ name: "United States", isoCode: "US" }}
    state={{ name: "California", isoCode: "CA" }}
/>`,
        },
        {
            text: "InputSelectCity sin estado",
            content: `
<InputSelectCity
    country={{ name: "United States", isoCode: "US" }}
/>`,
        },
        {
            text: "InputSelectCity con todas las ciudades",
            content: `
<InputSelectCity />`,
        }
    ]
};
