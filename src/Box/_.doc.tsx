export default {
    id: "box",
    idStorybook: "box",
    name: "Box",
    description: "El componente Box actúa como un contenedor básico que encapsula su contenido, permitiendo aplicar estilos personalizados mediante clases adicionales.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: true,
            description: "El contenido que se renderizará dentro del componente Box."
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase personalizada para el componente Box."
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Box>Este es un contenedor básico</Box>`
        },
        {
            text: "Box con clase personalizada",
            content: `<Box className="custom-class">Contenido con clase personalizada</Box>`
        }
    ]
}
