export default {
    id: "print-iframe",
    idStorybook: "component-print-iframe",
    name: "PrintIframe",
    description:
        "El componente PrintIframe permite renderizar contenido dentro de un iframe y proporciona una interfaz para imprimirlo. Utiliza el hook `usePrintIframe` para gestionar la funcionalidad de impresión en un iframe.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente PrintIframe.",
        },
        {
            id: "onComponent",
            type: "(data: PrintIframeComponentProps) => ReactNode",
            require: true,
            default: "N/A",
            description:
                "Función que retorna el contenido a renderizar dentro del iframe, aceptando datos de tipo `PrintIframeComponentProps`.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el iframe está en estado de carga, mostrando un indicador de carga.",
        },
    ],
    useExample: [
        {
            text: "PrintIframe básico",
            content: `<PrintIframe onComponent={({ loader }) => <div>{loader ? "Cargando..." : "Contenido a imprimir"}</div>} />`,
        },
        {
            text: "PrintIframe con clase personalizada",
            content: `<PrintIframe className="mi-clase" onComponent={({ loader }) => <div>{loader ? "Cargando..." : "Contenido listo"}</div>} />`,
        },
    ],
};
