export default {
    id: "progress-line",
    idStorybook: "component-progress-line",
    name: "ProgressLine",
    description: "El componente ProgressLine muestra una barra de progreso lineal que indica el avance de una tarea o el porcentaje completado. Incluye una opción para mostrar el porcentaje numérico junto a la barra.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente ProgressLine.",
        },
        {
            id: "p",
            type: "number",
            require: true,
            default: "N/A",
            description: "Valor de progreso representado en la barra, como un número entre 0 y 100.",
        },
        {
            id: "showP",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si el valor numérico del progreso (`p`) se muestra junto a la barra.",
        }
    ],
    useExample: [
        {
            text: "ProgressLine básico",
            content: `<ProgressLine p={75} />`
        },
        {
            text: "ProgressLine con progreso visible",
            content: `<ProgressLine p={50} showP={true} />`
        },
        {
            text: "ProgressLine con clase personalizada",
            content: `<ProgressLine p={90} className="mi-clase" />`
        }
    ]
};
