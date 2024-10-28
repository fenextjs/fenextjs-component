export default {
    id: "progress-circle",
    idStorybook: "component-progress-circle",
    name: "ProgressCircle",
    description:
        "El componente ProgressCircle muestra un círculo de progreso visual que indica el avance de una tarea o porcentaje completado. Ofrece una opción para mostrar el porcentaje numérico en el centro del círculo.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente ProgressCircle.",
        },
        {
            id: "p",
            type: "number",
            require: true,
            default: "N/A",
            description:
                "Valor de progreso representado en el círculo, como un número entre 0 y 100.",
        },
        {
            id: "showP",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si el valor numérico del progreso (`p`) se muestra en el centro del círculo.",
        },
    ],
    useExample: [
        {
            text: "ProgressCircle básico",
            content: `<ProgressCircle p={75} />`,
        },
        {
            text: "ProgressCircle con progreso visible",
            content: `<ProgressCircle p={50} showP={true} />`,
        },
        {
            text: "ProgressCircle con clase personalizada",
            content: `<ProgressCircle p={90} className="mi-clase" />`,
        },
    ],
};
