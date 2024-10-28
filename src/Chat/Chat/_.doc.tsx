export default {
    id: "chat",
    idStorybook: "chat",
    name: "Chat",
    description:
        "El componente Chat es un contenedor completo que incluye elementos como el usuario del chat, los mensajes, un formulario para enviar mensajes y un botón de cargar más mensajes. Se puede configurar para mostrar un loader mientras se cargan los datos, así como manejar diferentes estados como chat vacío y auto-scroll cuando hay nuevos mensajes.",
    props: [
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Si el chat está en estado de carga, deshabilitando otras acciones mientras se cargan los datos.",
        },
        {
            id: "useAccountOwner",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si se debe mostrar al dueño de la cuenta en el chat.",
        },
        {
            id: "onScrollIfNewMessage",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Si se debe hacer scroll automáticamente cuando hay un nuevo mensaje.",
        },
        {
            id: "onActionAfterNewMessage",
            type: "() => void",
            require: false,
            description:
                "Función que se ejecuta después de recibir un nuevo mensaje.",
        },
        {
            id: "empty",
            type: "ReactNode",
            require: false,
            default: "<Text>There is not messages yet</Text><Telegram />",
            description:
                "Contenido que se mostrará si no hay mensajes en el chat.",
        },
        {
            id: "chatUser",
            type: "ChatUserProps | ChatUserProps[]",
            require: true,
            description: "Información del usuario o usuarios del chat.",
        },
        {
            id: "loaderChatUser",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si el usuario del chat está en estado de carga.",
        },
        {
            id: "chatMessage",
            type: "ChatMessageProps[]",
            require: true,
            description: "Lista de mensajes del chat.",
        },
        {
            id: "loaderChatMessage",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si los mensajes del chat están en estado de carga.",
        },
        {
            id: "chatFormSendMessage",
            type: "ChatFormSendMessageProps",
            require: true,
            description:
                "Propiedades del formulario para enviar un mensaje en el chat.",
        },
        {
            id: "loaderChatFormSendMessage",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Si el formulario de enviar mensaje está en estado de carga.",
        },
        {
            id: "useBtnLoadMoreMssages",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Si se debe mostrar el botón para cargar más mensajes.",
        },
        {
            id: "btnLoadMoreMessages",
            type: "ButtonProps",
            require: false,
            default: '{ children: "Load more messages" }',
            description: "Propiedades para el botón de cargar más mensajes.",
        },
        {
            id: "fullPage",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Si el chat debe mostrarse en modo de página completa.",
        },
    ],
    useExample: [
        {
            text: "Chat básico con mensajes",
            content: `
<Chat 
    chatUser={[{ id: 1, name: "User1" }]}
    chatMessage={[{ id: 1, message: "Hello!" }, { id: 2, message: "How are you?" }]}
    chatFormSendMessage={{ onSubmit: (msg) => console.log(msg) }}
/>
            `,
        },
        {
            text: "Chat vacío",
            content: `<Chat chatUser={[{ id: 1, name: "User1" }]} chatMessage={[]} chatFormSendMessage={{ onSubmit: () => {} }} />`,
        },
        {
            text: "Chat con botón de cargar más mensajes",
            content: `
<Chat 
    chatUser={[{ id: 1, name: "User1" }]}
    chatMessage={[{ id: 1, message: "Hello!" }, { id: 2, message: "How are you?" }]}
    chatFormSendMessage={{ onSubmit: (msg) => console.log(msg) }}
    useBtnLoadMoreMssages={true}
/>
            `,
        },
    ],
};
