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
            default: "undefined",
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
    extras: [
        {
            id: "estructura-de-cuadrícula",
            title: "Estructura de Cuadrícula",
            description:
                "La galería organiza los elementos en una cuadrícula flexible, permitiendo personalización a través de clases CSS.",
            tableItems: [
                {
                    Propiedad: "className",
                    Uso: "Personaliza la clase del contenedor de la galería.",
                    Descripcion:
                        "Puedes aplicar estilos globales o específicos a toda la galería.",
                },
                {
                    Propiedad: "classNameItem",
                    Uso: "Personaliza la clase de cada elemento dentro de la galería.",
                    Descripcion:
                        "Permite aplicar estilos individuales a los elementos en la cuadrícula.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<GridGallery items={[<div>Item 1</div>, <div>Item 2</div>]} />`,
        },
        {
            text: "Galería con clases personalizadas",
            content: `<GridGallery className="mi-galeria" classNameItem="mi-item" items={[<div>Item 1</div>, <div>Item 2</div>]} />`,
        },
    ],
};
