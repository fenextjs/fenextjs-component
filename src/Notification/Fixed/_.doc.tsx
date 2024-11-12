export default {
    id: "notification",
    idStorybook: "component-notification",
    name: "Notification",
    description:
        "El componente Notification permite mostrar mensajes de notificación personalizados, con distintos tipos de resultados y estilos para cada tipo.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "type",
            type: "RequestResultTypeProps | keyof typeof RequestResultTypeProps",
            require: false,
            default: "RequestResultTypeProps.NORMAL",
            description:
                "Tipo de notificación, que define el estilo y el propósito del mensaje.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido o mensaje que se mostrará dentro de la notificación.",
        },
    ],
    useExample: [
        {
            text: "Notificación básica",
            content: `<Notification>Mensaje de notificación</Notification>`,
        },
        {
            text: "Notificación de éxito",
            content: `<Notification type="SUCCESS">Operación éxitosa</Notification>`,
        },
        {
            text: "Notificación de error",
            content: `<Notification type="ERROR">Error en la operación</Notification>`,
        },
    ],
};
