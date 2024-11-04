export default {
    id: "alert",
    idStorybook: "component-alert",
    name: "Alert",
    description:
        "El componente Alert se utiliza para mostrar mensajes de alerta en la interfaz de usuario, proporcionando diferentes tipos de alertas y permitiendo la opción de cerrarlas.",
    props: [
        {
            id: "message",
            type: "string",
            require: true,
            description:
                "El mensaje que se mostrará en el contenido de la alerta.",
        },
        {
            id: "type",
            type: "AlertType",
            require: true,
            description:
                "El tipo de alerta a mostrar, que puede estar relacionado con el estilo visual de la misma.",
        },
        {
            id: "iconClose",
            type: "ReactNode",
            require: false,
            default: "<Close />",
            description: "El icono que se mostrará para cerrar la alerta.",
        },
        {
            id: "onClose",
            type: "function",
            require: false,
            description: "Función que se ejecuta cuando se cierra la alerta.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase personalizada para el componente de alerta.",
        },
        {
            id: "data",
            type: "any",
            require: false,
            description:
                "Datos adicionales o metadatos que se pueden agregar al componente de alerta.",
        },
    ],
    extras: [
        {
            id: "AlertType",
            title: "AlertType",
            description:
                "Dependiendo del valor de 'AlertType', el estilo de la alerta sera diferente",
            tableItems: [
                {
                    AlertType: "OK",
                    Descripción: "Mensaje de exito.",
                },
                {
                    AlertType: "ERROR",
                    Descripción: "Mensaje de error.",
                },
                {
                    AlertType: "NORMAL",
                    Descripción: "Mensaje sin estatus específico.",
                },
                {
                    AlertType: "WARNING",
                    Descripción: "Mensaje de advertencia.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Alert message="This is an alert!" type="info" />`,
        },
        {
            text: "Alerta con función de cierre",
            content: `<Alert message="Close this alert" type="warning" onClose={() => alert('¡Alerta cerró!')} />`,
        },
        {
            text: "Alerta con icono personalizado",
            content: `<Alert message="Custom icon alert" type="error" iconClose={<CustomIcon />} />`,
        },
    ],
};
