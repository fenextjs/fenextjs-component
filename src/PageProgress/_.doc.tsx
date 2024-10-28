export default {
    id: "page-progress",
    idStorybook: "component-page-progress",
    name: "PageProgress",
    description:
        "El componente PageProgress muestra una barra de progreso visual durante los cambios de ruta en Next.js, indicando al usuario el estado de carga de la página.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor de la barra de progreso.",
        },
    ],
    useExample: [
        {
            text: "Barra de progreso básica",
            content: `<PageProgress />`,
        },
        {
            text: "Barra de progreso personalizada",
            content: `<PageProgress className="mi-clase-personalizada" />`,
        },
    ],
};
