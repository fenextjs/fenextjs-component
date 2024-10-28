export default {
    id: "theme",
    idStorybook: "component-theme",
    name: "Theme",
    description: "El componente Theme permite gestionar y representar visualmente los temas de la aplicación, utilizando la funcionalidad y componentes proporcionados por `fenextjs-svg` y `fenextjs-hook`.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para los elementos dentro del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Theme />`
        },
        {
            text: "Con clases personalizadas",
            content: `<Theme className="custom-theme" classNameItem="custom-theme-item" />`
        }
    ]
};
