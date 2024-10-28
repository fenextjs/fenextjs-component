export default {
    id: "chat-user",
    idStorybook: "component-chat-user",
    name: "ChatUser",
    description:
        "El componente ChatUser muestra la información de un usuario en un contexto de chat, incluyendo su imagen, nombre y datos extra opcionales. También soporta un estado de carga y permite personalizar la imagen y el contenido adicional.",
    props: [
        {
            id: "name",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "El nombre del usuario que se mostrará en el componente.",
        },
        {
            id: "img",
            type: "Partial<ImgProps>",
            require: false,
            default: "undefined",
            description:
                "Propiedades de la imagen del usuario, incluyendo la URL o cualquier atributo de la imagen.",
        },
        {
            id: "role",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "El rol del usuario, usado para aplicar clases CSS adicionales al componente.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando placeholders en lugar del contenido real.",
        },
        {
            id: "imgProps",
            type: "Partial<ImgProps>",
            require: false,
            default: "{ imgIf404: FenextImgUserPlaceholder }",
            description:
                "Propiedades adicionales para el componente Img, permitiendo personalizar cómo se maneja la imagen del usuario.",
        },
        {
            id: "extraData",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido adicional que se mostrará junto al nombre del usuario, como información adicional o etiquetas.",
        },
    ],
    useExample: [
        {
            text: "Usuario básico",
            content: `<ChatUser name="Juan Perez" role="admin" />`,
        },
        {
            text: "Usuario con datos extra",
            content: `<ChatUser name="Maria" extraData={<span>Conectado</span>} />`,
        },
        {
            text: "Usuario en estado de carga",
            content: `<ChatUser loader={true} />`,
        },
    ],
};
