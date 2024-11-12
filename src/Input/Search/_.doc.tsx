export default {
    id: "input-search",
    idStorybook: "input-inputsearch",
    name: "InputSearch",
    description:
        "El componente InputSearch permite realizar búsquedas de manera eficiente y personalizable. Incluye soporte para resultados de búsqueda, filtros por pestañas y opciones de carga adicional.",
    props: [
        {
            id: "classNameSearch",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del campo de búsqueda.",
        },
        {
            id: "classNameSearchBg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el fondo del campo de búsqueda.",
        },
        {
            id: "classNameSearchContentResult",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor de resultados de búsqueda.",
        },
        {
            id: "classNameSearchResult",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para los elementos de resultado de búsqueda.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "'Search'",
            description:
                "Texto que se muestra cuando el campo de búsqueda está vacío.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<SVGSearch />",
            description: "Ícono que se muestra en el campo de búsqueda.",
        },
        {
            id: "iconClear",
            type: "ReactNode",
            require: false,
            default: "<Close />",
            description: "Ícono que se muestra para limpiar la búsqueda.",
        },
        {
            id: "onSearch",
            type: "(value: string, tabFilter?: InputSearchTabFilterProps[]) => Promise<InputSearchResultProps[]>",
            require: false,
            default: "undefined",
            description:
                "Función que se llama al realizar una búsqueda, pasando el valor y los filtros de pestañas.",
        },
        {
            id: "onEnterSearch",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al presionar Enter en el campo de búsqueda.",
        },
        {
            id: "onClearSearch",
            type: "() => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al limpiar el campo de búsqueda.",
        },
        {
            id: "onClickSearch",
            type: "(result: InputSearchResultProps) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al hacer click en un resultado de búsqueda.",
        },
        {
            id: "useResult",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe mostrar la lista de resultados de búsqueda.",
        },
        {
            id: "useLoadMore",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si se debe permitir cargar más resultados.",
        },
        {
            id: "ButtonLoadMoreProps",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Load More' }",
            description: "Propiedades para el botón de carga adicional.",
        },
        {
            id: "resultList",
            type: "InputSearchResultProps[]",
            require: false,
            default: "undefined",
            description: "Lista de resultados de búsqueda que se muestran.",
        },
        {
            id: "resultEmpty",
            type: "ReactNode",
            require: false,
            default: "<Title tag='h4'>Not Results</Title>",
            description:
                "Contenido que se muestra cuando no hay resultados de búsqueda.",
        },
        {
            id: "resultPreSearch",
            type: "ReactNode",
            require: false,
            default: "<Title tag='h4'>Search</Title>",
            description:
                "Contenido que se muestra antes de realizar una búsqueda.",
        },
        {
            id: "listTabFilter",
            type: "InputSearchTabFilterProps[]",
            require: false,
            default: "[]",
            description:
                "Lista de filtros por pestañas que se pueden aplicar a la búsqueda.",
        },
        {
            id: "defaultTabFilterSelected",
            type: "InputSearchTabFilterProps[]",
            require: false,
            default: "[]",
            description:
                "Lista de filtros por pestañas seleccionados por defecto.",
        },
        {
            id: "onChangeTabFilterSelected",
            type: "(selected: InputSearchTabFilterProps[]) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al cambiar los filtros por pestañas seleccionados.",
        },
    ],
    useExample: [
        {
            text: "Búsqueda básica",
            content: `<InputSearch onSearch={async (value) => await fetchResults(value)} />`,
        },
        {
            text: "Búsqueda con carga de más resultados",
            content: `<InputSearch onSearch={async (value) => await fetchResults(value)} useLoadMore={true} />`,
        },
        {
            text: "Búsqueda con filtros por pestañas",
            content: `<InputSearch onSearch={async (value) => await fetchResults(value)} useTabFilter={true} listTabFilter={[{id: 'tab1', text: 'Tab 1'}]} />`,
        },
    ],
};
