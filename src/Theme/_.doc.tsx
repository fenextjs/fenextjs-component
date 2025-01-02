export default {
    id: "theme",
    idStorybook: "component-theme",
    name: "Theme",
    description:
        "El componente Theme permite gestionar y representar visualmente los temas de la aplicación, utilizando la funcionalidad y componentes proporcionados por `fenextjs-svg` y `fenextjs-hook`.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para los elementos dentro del componente.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Theme />`,
        },
        {
            text: "Con clases personalizadas",
            content: `<Theme className="custom-theme" classNameItem="custom-theme-item" />`,
        },
    ],
    extras: [
        {
            id: "NOTA",
            title: "__NOTA__",
            description:
                "Fenextjs usa por defecto el `Tema Automático del Navegador`. En caso de que quieras deshabilitar esta funcionalidad sin usar el componente `Theme`, puedes agregar esta propiedad: `fenext-prefers-color-scheme-disabled` en cualquier etiqueta de HTML.",
            code: `<body fenext-prefers-color-scheme-disabled>
    contenido
</body>

//O

<body>
    contenido
    <div fenext-prefers-color-scheme-disabled/>
</body>
`,
        },
    ]
    
};
