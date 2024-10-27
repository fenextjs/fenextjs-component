export default {
    id: "user",
    idStorybook: "component-user",
    name: "User",
    description: "El componente User muestra información de un usuario, incluyendo su imagen, nombre, y correo electrónico. También incluye una opción de cargador para mostrar un indicador de carga cuando la información del usuario no está disponible.",
    props: [
        {
            id: "user",
            type: "Partial<UserInterfaceProps>",
            require: false,
            default: "undefined",
            description: "Objeto con la información del usuario, como nombre, imagen, y correo electrónico.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se debe mostrar el cargador en lugar de la información del usuario.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor principal del componente.",
        },
        {
            id: "classNamePicture",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de la imagen del usuario.",
        },
        {
            id: "classNameImg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la imagen del usuario.",
        },
        {
            id: "classNameName",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el nombre del usuario.",
        },
        {
            id: "classNameLetter",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la inicial del nombre del usuario cuando no se tiene imagen.",
        },
        {
            id: "classNameEmail",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el correo electrónico del usuario.",
        },
        {
            id: "classNameLoader",
            type: "LoaderUserClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS para el componente de cargador cuando se muestra en lugar de los datos del usuario.",
        }
    ],
    useExample: [
        {
            text: "User básico",
            content: `<User user={{ name: "John Doe", email: "john@example.com" }} />`
        },
        {
            text: "User con imagen de perfil",
            content: `<User user={{ name: "Jane Doe", email: "jane@example.com", image: "/path/to/image.jpg" }} />`
        },
        {
            text: "User con cargador",
            content: `<User loader={true} />`
        },
        {
            text: "User con clases personalizadas",
            content: `<User user={{ name: "John Doe" }} className="custom-container" classNameName="custom-name" />`
        }
    ]
};
