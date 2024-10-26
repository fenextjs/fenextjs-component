export default {
    id: "portal",
    idStorybook: "component-portal",
    name: "Portal",
    description: "El componente Portal permite renderizar sus elementos secundarios (`children`) en un contenedor DOM específico, separado de la jerarquía DOM principal de la aplicación. Utiliza `ReactDOM.createPortal` para realizar esta funcionalidad.",
    props: [
        {
            id: "container",
            type: "Element | DocumentFragment",
            require: false,
            default: "document.body",
            description: "Elemento DOM donde se montarán los elementos secundarios. Si no se proporciona, el `body` del documento se usa como contenedor predeterminado.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: true,
            default: "N/A",
            description: "Contenido que se renderizará dentro del portal.",
        }
    ],
    useExample: [
        {
            text: "Portal básico",
            content: `<Portal><div>Contenido en Portal</div></Portal>`
        },
        {
            text: "Portal con contenedor específico",
            content: `<Portal container={document.getElementById("mi-contenedor")}><div>Contenido en un contenedor específico</div></Portal>`
        }
    ]
};
