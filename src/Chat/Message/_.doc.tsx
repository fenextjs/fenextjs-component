export default {
    id: "chat-message",
    idStorybook: "component-chat-message",
    name: "ChatMessage",
    description:
        "El componente ChatMessage es una representación de un mensaje de chat, mostrando el usuario, mensaje, hora de creación y su estado, con opciones de personalización para el estilo y comportamiento.",
    props: [
        {
            id: "id",
            type: "string | number",
            require: true,
            default: "undefined",
            description: "Identificador único del mensaje.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando placeholders en lugar de contenido.",
        },
        {
            id: "right",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Define si el mensaje debe alinearse a la derecha, generalmente para mensajes propios.",
        },
        {
            id: "account",
            type: "Partial<UserProps>",
            require: false,
            default: "undefined",
            description:
                "Propiedades parciales del usuario que envía el mensaje, incluyendo nombre e imagen de perfil.",
        },
        {
            id: "message",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "El contenido del mensaje, puede ser texto o cualquier nodo de React.",
        },
        {
            id: "createdAt",
            type: "Date",
            require: false,
            default: "undefined",
            description: "Fecha y hora en la que fue creado el mensaje.",
        },
        {
            id: "view",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el mensaje ha sido visto o no.",
        },
        {
            id: "imgProps",
            type: "Partial<ImgProps>",
            require: false,
            default: "{ imgIf404: FenextImgUserPlaceholder }",
            description:
                "Propiedades adicionales para el componente Img que se utiliza para mostrar la imagen del usuario.",
        },
    ],
    extras: [
        {
            id: "alineacion",
            title: "Alineación del mensaje",
            description:
                "El componente permite alinear el mensaje hacia la derecha o izquierda basado en el prop `right`.",
            tableItems: [
                {
                    "Prop `right`": "false",
                    Alineación: "Izquierda",
                    Descripción:
                        "El mensaje se muestra alineado a la izquierda, típico de mensajes recibidos.",
                },
                {
                    "Prop `right`": "true",
                    Alineación: "Derecha",
                    Descripción:
                        "El mensaje se muestra alineado a la derecha, típico de mensajes enviados por el usuario.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Mensaje básico",
            content: `<ChatMessage 
    id={1}
    message="Hola" 
    createdAt={new Date()} 
    account={{ name: "Usuario" }} 
/>`,
        },
        {
            text: "Mensaje alineado a la derecha",
            content: `<ChatMessage 
    id={2} 
    message="Hola, soy yo" 
    right={true} 
    createdAt={new Date()} 
    account={{ name: "Yo" }} 
/>`,
        },
        {
            text: "Mensaje en estado de carga",
            content: `<ChatMessage id={3} loader={true} />`,
        },
    ],
};
