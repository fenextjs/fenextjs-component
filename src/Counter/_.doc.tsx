export default {
    id: "counter",
    idStorybook: "component-counter",
    name: "Counter",
    description:
        "El componente Counter muestra un número que se incrementa o decrementa gradualmente hasta alcanzar un valor final. También puede mostrar un texto adicional opcional.",
    props: [
        {
            id: "number",
            type: "number",
            require: true,
            default: "0",
            description:
                "El número que se mostrará y que será incrementado o decrementado gradualmente.",
        },
        {
            id: "text",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Texto adicional que se puede mostrar junto con el contador.",
        },
        {
            id: "time",
            type: "number",
            require: false,
            default: "1000",
            description:
                "Tiempo en milisegundos para alcanzar el número final.",
        },
        {
            id: "decimal",
            type: "number",
            require: false,
            default: "2",
            description: "Cantidad de decimales a mostrar en el número.",
        },
        {
            id: "parseNumber",
            type: "(n: number) => ReactNode",
            require: false,
            default: "parseNumberCount",
            description:
                "Función personalizada para formatear el número antes de mostrarlo.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente.",
        },
        {
            id: "classNameNumber",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar la apariencia del número.",
        },
        {
            id: "classNameText",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la apariencia del texto.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Counter number={100} />`,
        },
        {
            text: "Counter con texto adicional",
            content: `<Counter number={100} text="Progreso" />`,
        },
        {
            text: "Counter con tiempo personalizado",
            content: `<Counter number={500} time={2000} />`,
        },
    ],
};
