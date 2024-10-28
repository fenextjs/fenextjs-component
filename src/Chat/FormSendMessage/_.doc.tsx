export default {
    id: "chat-form-send-message",
    idStorybook: "chat-form-send-message",
    name: "ChatFormSendMessage",
    description:
        "El componente ChatFormSendMessage es un formulario que permite a los usuarios enviar mensajes dentro del chat. Incluye opciones como un botón para enviar el mensaje, la posibilidad de enviar mensajes presionando 'Enter' y un estado de carga mientras se procesa el envío.",
    props: [
        {
            id: "onSubmit",
            type: "RequestProps<ChatFormSendMessageDataProps, RequestResultProps>",
            require: false,
            description:
                "Función que se ejecuta al enviar el mensaje, recibiendo los datos del formulario como parámetros.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el formulario está en estado de carga, deshabilitando la interacción del usuario.",
        },
        {
            id: "useSubmitInEnter",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Si se debe permitir el envío del mensaje presionando 'Enter'.",
        },
        {
            id: "btnChildren",
            type: "ReactNode",
            require: false,
            default: "Send",
            description: "Contenido del botón para enviar el mensaje.",
        },
        {
            id: "placeholderMessage",
            type: "string",
            require: false,
            default: "Message",
            description:
                "Texto de placeholder que se mostrará en el campo del mensaje.",
        },
    ],
    useExample: [
        {
            text: "Formulario básico de enviar mensaje",
            content: `
<ChatFormSendMessage 
    onSubmit={async (data) => { console.log(data); }}
/>
            `,
        },
        {
            text: "Formulario con botón y placeholder personalizados",
            content: `
<ChatFormSendMessage 
    btnChildren="Enviar"
    placeholderMessage="Escribe tu mensaje aquí"
/>
            `,
        },
        {
            text: "Formulario sin envío con Enter",
            content: `
<ChatFormSendMessage 
    useSubmitInEnter={false}
/>
            `,
        },
    ],
};
