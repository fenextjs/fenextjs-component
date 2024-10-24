export default {
    id: "content-show",
    idStorybook: "component-content-show",
    name: "ContentShow",
    description: "El componente ContentShow permite mostrar u ocultar su contenido condicionalmente basado en la propiedad 'show'.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "El contenido que se mostrará o ocultará dependiendo del valor de 'show'.",
        },
        {
            id: "show",
            type: "boolean",
            require: false,
            default: "true",
            description: "Determina si el contenido debe mostrarse. Si es false, el contenido se ocultará.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<ContentShow show={true}><div>Contenido visible</div></ContentShow>`
        },
        {
            text: "Contenido oculto",
            content: `<ContentShow show={false}><div>Contenido oculto</div></ContentShow>`
        }
    ]
};
