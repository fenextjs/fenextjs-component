export default {
    id: "print-page",
    idStorybook: "component-print-page",
    name: "PrintPage",
    description:
        "El componente PrintPage permite renderizar contenido listo para impresión y proporciona un hook `usePrintData` para gestionar la carga y obtención de datos necesarios para la impresión.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente PrintPage.",
        },
        {
            id: "onComponent",
            type: "(data: PrintPageComponentProps<T>) => ReactNode",
            require: true,
            default: "N/A",
            description:
                "Función que retorna el contenido a renderizar dentro del componente de impresión, aceptando datos de tipo `PrintPageComponentProps<T>`.",
        },
        {
            id: "data",
            type: "T | undefined",
            require: false,
            default: "undefined",
            description:
                "Datos utilizados dentro del componente para la impresión, gestionados a través del hook `usePrintData`.",
        },
        {
            id: "load",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando un indicador de carga si es `true`.",
        },
    ],
    useExample: [
        {
            text: "PrintPage básico",
            content: `<PrintPage onComponent={({ data, load }) => <div>{load ? "Cargando..." : data ? "Contenido listo para imprimir" : "Sin datos"}</div>} />`,
        },
        {
            text: "PrintPage con clase personalizada",
            content: `<PrintPage className="mi-clase" onComponent={({ data, load }) => <div>{load ? "Cargando..." : data ? "Datos cargados" : "Sin datos disponibles"}</div>} />`,
        },
    ],
};
