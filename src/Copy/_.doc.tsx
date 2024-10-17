export default {
    id: "copy",
    idStorybook: "component-copy",
    name: "Copy",
    description: "El componente Copy permite copiar un texto al portapapeles cuando se hace clic en él, con la opción de mostrar una notificación al usuario.",
    props: [
        {
            id: "text",
            type: "string",
            require: false,
            default: "''",
            description: "Texto que se copiará al portapapeles al hacer clic en el componente.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "El contenido que se mostrará dentro del componente Copy.",
        },
        {
            id: "onClickForCopy",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función personalizada que se ejecuta después de copiar el texto.",
        },
        {
            id: "notification",
            type: "NotificationDataProps",
            require: false,
            default: "{ message: 'Copy', type: RequestResultTypeProps.OK }",
            description: "Configuración de la notificación que se muestra al copiar el texto.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente.",
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Copy text="Texto a copiar">Copia este texto</Copy>`
        },
        {
            text: "Copy con notificación personalizada",
            content: `<Copy text="Texto a copiar" notification={{ message: "Texto copiado", type: "success" }}>Copia este texto</Copy>`
        },
        {
            text: "Copy con función personalizada",
            content: `<Copy text="Texto a copiar" onClickForCopy={(text) => console.log("Texto copiado:", text)}>Copia este texto</Copy>`
        }
    ]
};
