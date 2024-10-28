export default {
    id: "input-select",
    idStorybook: "component-input-select",
    name: "InputSelect",
    description:
        "El componente InputSelect proporciona una interfaz interactiva que permite a los usuarios seleccionar opciones de una lista, con la posibilidad de búsqueda y personalización avanzada.",
    props: [
        {
            id: "options",
            type: "InputSelectItemOptionBaseProps[]",
            require: true,
            description: "Lista de opciones disponibles en el select.",
        },
        {
            id: "filterOptions",
            type: "function",
            require: false,
            default: "undefined",
            description:
                "Función personalizada para filtrar las opciones del select.",
        },
        {
            id: "showOptions",
            type: "'hover' | 'focus' | 'focus-hover'",
            require: false,
            default: "'focus'",
            description: "Define cuándo mostrar las opciones del select.",
        },
        {
            id: "hiddenOptions",
            type: "'not-hover' | 'not-focus' | 'not-focus-hover'",
            require: false,
            default: "'not-hover'",
            description: "Define cuándo ocultar las opciones del select.",
        },
        {
            id: "defaultValue",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            default: "undefined",
            description: "Valor por defecto seleccionado en el select.",
        },
        {
            id: "typeSelect",
            type: "'div' | 'select' | 'datalist'",
            require: false,
            default: "'div'",
            description: "Define el tipo de elemento select.",
        },
        {
            id: "typeSelectStyle",
            type: "'normal' | 'normal-out' | 'box' | 'list' | 'checkbox'",
            require: false,
            default: "'normal'",
            description: "Estilos aplicados al componente select.",
        },
        {
            id: "useSwichtypeSelectStyle",
            type: "boolean",
            require: false,
            default: "false",
            description: "Permite alternar entre estilos de tipo select.",
        },
        {
            id: "useTOption",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe usar una opción traducida (useTOption).",
        },
        {
            id: "value",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            description: "Valor actual del select.",
        },
        {
            id: "noResult",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            description:
                "Valor que se muestra cuando no hay resultados en la búsqueda.",
        },
        {
            id: "loaderOption",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            description:
                "Opción que se muestra mientras se cargan las opciones.",
        },
        {
            id: "selected",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            description: "Opción actualmente seleccionada.",
        },
        {
            id: "create",
            type: "InputSelectItemOptionBaseProps",
            require: false,
            description:
                "Opción que permite crear un nuevo valor en el select.",
        },
        {
            id: "onCreate",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando se crea un nuevo valor.",
        },
        {
            id: "isSelectClearText",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se puede limpiar el texto del select.",
        },
        {
            id: "isSelectChangeText",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si se puede cambiar el texto del select.",
        },
        {
            id: "onChange",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando cambia el valor seleccionado.",
        },
        {
            id: "onChangeData",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando cambia el valor de los datos seleccionados.",
        },
        {
            id: "onChangeText",
            type: "function",
            require: false,
            description:
                "Función que se ejecuta cuando cambia el texto del select.",
        },
        {
            id: "onChangeValidate",
            type: "function",
            require: false,
            description:
                "Función personalizada de validación que se ejecuta cuando cambia el valor del select.",
        },
        {
            id: "iconCloseMovil",
            type: "ReactNode",
            require: false,
            default: "<Cancel />",
            description:
                "Ícono que se muestra para cerrar el select en vista móvil.",
        },
        {
            id: "clearContent",
            type: "ReactNode",
            require: false,
            default: "'Clear'",
            description: "Contenido que se muestra para limpiar la selección.",
        },
        {
            id: "searchById",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si la búsqueda se realiza por ID.",
        },
        {
            id: "iconSearch",
            type: "ReactNode",
            require: false,
            default: "<SVGSearch />",
            description: "Ícono de búsqueda que se muestra en el select.",
        },
        {
            id: "changeByFirstOptionInOnBlur",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Cambia al valor de la primera opción cuando el input pierde el foco.",
        },
        {
            id: "maxLengthShowOptions",
            type: "number",
            require: false,
            default: "20",
            description: "Cantidad máxima de opciones que se muestran.",
        },
        {
            id: "nItems",
            type: "number",
            require: false,
            description: "Número de ítems que se muestran en el select.",
        },
        {
            id: "showOptionIconImg",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Muestra íconos de imagen junto a las opciones del select.",
        },
        {
            id: "validatorData",
            type: "FenextjsValidatorClass",
            require: false,
            description:
                "Clase de validación utilizada para validar los datos de entrada del select.",
        },
        {
            id: "forceShowOptionOnLoad",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Forza a mostrar las opciones al cargar el componente.",
        },
        {
            id: "iconDelete",
            type: "ReactNode",
            require: false,
            default: "<Trash />",
            description: "Ícono personalizado para eliminar una opción.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputSelect options={options} />`,
        },
        {
            text: "InputSelect con filtro de opciones",
            content: `<InputSelect options={options} filterOptions={filterOptions} />`,
        },
        {
            text: "InputSelect con icono de búsqueda",
            content: `<InputSelect options={options} iconSearch={<SVGSearch />} />`,
        },
        {
            text: "InputSelect con opción personalizada de crear",
            content: `<InputSelect options={options} onCreate={() => console.log("Crear nueva opción")} />`,
        },
    ],
};
