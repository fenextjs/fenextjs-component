export default {
    id: "filter-date",
    idStorybook: "component-filter-date",
    name: "FilterDate",
    description:
        "El componente FilterDate permite filtrar datos por fecha o por rango de fechas. Ofrece opciones configurables para seleccionar fechas, personalizar el formato, y manejar acciones mediante hooks como `useData` y `useDate`.",
    props: [
        {
            id: "nameFilter",
            type: "string",
            require: false,
            description:
                "Nombre único para el filtro, utilizado en el contexto global.",
            default: "undefined",
        },
        {
            id: "defaultValue",
            type: "FilterDateDataProps",
            require: false,
            default: "{}",
            description:
                "Valor inicial del filtro de fecha, incluyendo tipo, fecha o rango de fechas.",
        },
        {
            id: "onChange",
            type: "(data: FilterDateDataProps) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando cambia el valor del filtro de fecha.",
        },
        {
            id: "formatDateOption",
            type: "FenextjsDateFormatOptions",
            require: false,
            default: "{}",
            description:
                "Opciones de formato para mostrar las fechas seleccionadas.",
        },
        {
            id: "textValue",
            type: "string",
            require: false,
            default: "'Filtrar por fecha:'",
            description:
                "Texto principal que describe el propósito del filtro.",
        },
        {
            id: "textFilterByDate",
            type: "string",
            require: false,
            default: "'Filtar por fecha'",
            description:
                "Texto que se muestra para la opción de filtro por fecha.",
        },
        {
            id: "textFilterByRange",
            type: "string",
            require: false,
            default: "'Filtar por rango'",
            description:
                "Texto que se muestra para la opción de filtro por rango de fechas.",
        },
        {
            id: "textBtnToday",
            type: "string",
            require: false,
            default: "'Hoy'",
            description: "Texto del botón para seleccionar la fecha actual.",
        },
        {
            id: "textBtnWeek",
            type: "string",
            require: false,
            default: "'Esta Semana'",
            description: "Texto del botón para seleccionar la semana actual.",
        },
        {
            id: "iconTrash",
            type: "ReactNode",
            require: false,
            default: "<SvgTrash />",
            description:
                "Icono que se muestra como indicador para eliminar filtros.",
        },
        {
            id: "extraListBtn",
            type: "(data: ReturnType<typeof useData<FilterDateDataProps>>) => ReactNode[]",
            require: false,
            default: "[]",
            description:
                "Lista de botones personalizados que se pueden agregar dinámicamente.",
        },
        {
            id: "nMonthShow",
            type: "number",
            require: false,
            default: 2,
            description: "Número de meses visibles en el calendario.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor principal.",
        },
        {
            id: "classNameDropDown",
            type: "DropDownClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar el menú desplegable.",
        },
        {
            id: "classNameCollapse",
            type: "InputCalendarClassProps",
            require: false,
            default: "{}",
            description:
                "Clase CSS para personalizar el calendario desplegable.",
        },
        {
            id: "classNameBtnToday",
            type: "ButtonClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar el botón 'Hoy'.",
        },
        {
            id: "classNameBtnWeek",
            type: "ButtonClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar el botón 'Esta Semana'.",
        },
        {
            id: "classNameTextValue",
            type: "Pick<TextProps, 'tag' | 'className'>",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar el texto principal.",
        },
        {
            id: "classNameTextSwich",
            type: "Pick<TextProps, 'tag' | 'className'>",
            require: false,
            default: "{}",
            description:
                "Clase CSS para personalizar los textos de los interruptores.",
        },
        {
            id: "classNameInputSwich",
            type: "InputSwichClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para personalizar los interruptores.",
        },
        {
            id: "classNameContentTop",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor superior del contenido.",
        },
        {
            id: "classNameLabelSwich",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar las etiquetas de los interruptores.",
        },
        {
            id: "classNameClear",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el icono de limpiar filtros.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<FilterDate />`,
        },
        {
            text: "Con valores iniciales",
            content: `<FilterDate defaultValue={{ type: "range", dateRange: [new Date(), new Date()] }} />`,
        },
        {
            text: "Con botón extra",
            content: `<FilterDate extraListBtn={[({ data }) => <button>Extra</button>]} />`,
        },
        {
            text: "Con formato personalizado",
            content: `<FilterDate formatDateOption={{ weekday: "long", year: "numeric", month: "long", day: "numeric" }} />`,
        },
    ],
};
