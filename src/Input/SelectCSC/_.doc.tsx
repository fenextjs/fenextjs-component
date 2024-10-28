export default {
    id: "input-select-csc",
    idStorybook: "component-input-select-csc",
    name: "InputSelectCSC",
    description:
        "El componente InputSelectCSC permite seleccionar un país, estado y ciudad de manera interrelacionada, facilitando la gestión de datos geográficos.",
    props: [
        {
            id: "classNameSelectCSC",
            type: "string",
            require: false,
            description: "Clase CSS personalizada para el select.",
        },
        {
            id: "useContainer",
            type: "boolean",
            require: false,
            description:
                "Define si el componente se envuelve en un contenedor `div`.",
            default: "true",
        },
        {
            id: "country",
            type: "InputCSCProps",
            require: false,
            description:
                "Propiedades del campo de selección para el país, incluyendo `label` y `placeholder`.",
        },
        {
            id: "state",
            type: "InputCSCProps",
            require: false,
            description:
                "Propiedades del campo de selección para el estado, incluyendo `label` y `placeholder`.",
        },
        {
            id: "city",
            type: "InputCSCProps",
            require: false,
            description:
                "Propiedades del campo de selección para la ciudad, incluyendo `label` y `placeholder`.",
        },
        {
            id: "defaultValueJsonString",
            type: "string",
            require: false,
            description:
                "Valor por defecto en formato JSON para inicializar el select.",
        },
        {
            id: "valueJsonString",
            type: "string",
            require: false,
            description: "Valor actual en formato JSON.",
        },
        {
            id: "onChangeJsonString",
            type: "function",
            require: false,
            description:
                "Función de cambio que devuelve el valor seleccionado en formato JSON.",
        },
        {
            id: "parseJson_to_String",
            type: "function",
            require: false,
            description: "Función para convertir JSON a string.",
        },
        {
            id: "parseString_to_Json",
            type: "function",
            require: false,
            description: "Función para convertir string a JSON.",
        },
    ],
    useExample: [
        {
            text: "Selección de país, estado y ciudad",
            content: `
<InputSelectCSC />`,
        },
        {
            text: "InputSelectCSC con valores predeterminados",
            content: `
<InputSelectCSC
    valueJsonString='{"country": "US", "state": "CA", "city": "Los Angeles"}'
    onChangeJsonString={(value) => console.log(value)}
/>`,
        },
    ],
};
