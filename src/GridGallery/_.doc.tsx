export default {
    id: "grid-gallery",
    idStorybook: "component-grid-gallery",
    name: "GridGallery",
    description:
        "El componente GridGallery permite mostrar una galería de elementos en un formato de cuadrícula, con soporte para clases personalizadas en los contenedores y los elementos.",
    props: [
        {
            id: "items",
            type: "ReactNode[]",
            require: true,
            default: "",
            description:
                "Lista de elementos que se mostrarán dentro de la galería.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal de la galería.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar cada uno de los elementos de la galería.",
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<GridGallery
    items={[
        <div>Item 1</div>,
        <div>Item 2</div>
    ]} 
/>`,
        },
        {
            text: "Galería con clases personalizadas",
            content: `<GridGallery 
    className="mi-galeria" 
    classNameItem="mi-item" 
    items={[
        <div>Item 1</div>, 
        <div>Item 2</div>
    ]} 
/>`,
        },
    ],
};
