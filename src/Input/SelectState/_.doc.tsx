export default {
    id: "input-select-state",
    idStorybook: "component-input-select-state",
    name: "InputSelectState",
    description: "El componente InputSelectState permite seleccionar un estado o provincia dentro de un país específico. Utiliza la API 'country-state-city-nextjs' para obtener y filtrar los estados según el país proporcionado.",
    props: [
        {
            id: "country",
            type: "CountryProps",
            require: false,
            default: "undefined",
            description: "Objeto que representa el país seleccionado, necesario para filtrar los estados correspondientes.",
        },
        {
            id: "id",
            type: "string",
            require: false,
            default: "undefined",
            description: "ID del input select.",
        },
        {
            id: "label",
            type: "string",
            require: false,
            default: "undefined",
            description: "Etiqueta para el campo de selección de estado.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del input.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "undefined",
            description: "Texto de marcador de posición que aparece cuando no hay selección.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el selector de estado está deshabilitado.",
        },
        {
            id: "value",
            type: "StateProps",
            require: false,
            default: "undefined",
            description: "Valor seleccionado actualmente en el selector de estado.",
        },
        {
            id: "onChange",
            type: "(value: StateProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el valor seleccionado cambia.",
        },
        {
            id: "isClearable",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se puede limpiar el campo de selección.",
        }
    ],
    useExample: [
        {
            text: "InputSelectState básico",
            content: `<InputSelectState />`,
        },
        {
            text: "InputSelectState con país preseleccionado",
            content: `<InputSelectState country={selectedCountry} />`,
        },
        {
            text: "InputSelectState con cambio de estado",
            content: `<InputSelectState onChange={(state) => console.log(state)} />`,
        },
        {
            text: "InputSelectState deshabilitado",
            content: `<InputSelectState disabled={true} />`,
        }
    ]
};
