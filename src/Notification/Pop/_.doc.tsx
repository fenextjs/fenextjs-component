export default {
    id: "notification-pop",
    idStorybook: "component-notification-pop",
    name: "NotificationPop",
    description: "El componente NotificationPop muestra mensajes de notificación flotantes que desaparecen automáticamente después de un tiempo especificado. Puede posicionarse en la parte superior o inferior de la pantalla.",
    props: [
        {
            id: "classNamePop",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del pop de notificación.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS adicional para el componente.",
        },
        {
            id: "typePop",
            type: "'top' | 'down'",
            require: false,
            default: "'down'",
            description: "Posición de la notificación en la pantalla.",
        },
        {
            id: "time",
            type: "number",
            require: false,
            default: "2000",
            description: "Duración en milisegundos antes de que la notificación desaparezca automáticamente.",
        }
    ],
    useExample: [
        {
            text: "Notificación Pop básica",
            content: `<NotificationPop>Mensaje de notificación</NotificationPop>`
        },
        {
            text: "Notificación Pop en la parte superior",
            content: `<NotificationPop typePop="top">Notificación en la parte superior</NotificationPop>`
        },
        {
            text: "Notificación Pop con duración personalizada",
            content: `<NotificationPop time={3000}>Mensaje que dura 3 segundos</NotificationPop>`
        }
    ]
};
