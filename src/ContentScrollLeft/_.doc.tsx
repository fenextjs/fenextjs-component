export default {
    id: "content-scroll-left",
    idStorybook: "component-content-scroll-left",
    name: "ContentScrollLeft",
    description:
        "El componente ContentScrollLeft renderiza un contenedor principal con un diseño predefinido que permite desplazar contenido hacia la izquierda, ideal para personalizaciones relacionadas con el estilo y funcionalidad de scroll.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal del componente.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenido interno del componente.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Elemento(s) hijos que se renderizarán dentro del componente.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<ContentScrollLeft>Contenido</ContentScrollLeft>`,
        },
        {
            text: "Con clases personalizadas",
            content: `<ContentScrollLeft className="mi-clase" classNameContent="mi-clase-interna">Contenido personalizado</ContentScrollLeft>`,
        },
    ],
};
