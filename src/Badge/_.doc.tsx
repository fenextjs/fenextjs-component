export default {
    id: "badge",
    idStorybook: "component-badge",
    name: "Badge",
    description:
        "El componente Badge se utiliza para mostrar un indicador visual asociado a un estado o tipo específico, como 'pendding', 'completed' o 'error'. Es útil para resaltar información de estado dentro de la interfaz de usuario.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: true,
            description:
                "Contenido que se mostrará dentro del badge. Puede ser texto o un elemento React.",
        },
        {
            id: "type",
            type: "BadgeType",
            require: true,
            description:
                "Define el tipo o estado del badge, el cual determina su estilo visual.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase personalizada para aplicar estilos adicionales al badge.",
        },
        {
            id: "_t",
            type: "function",
            require: false,
            description:
                "Función de traducción proveniente de `use_T`, utilizada para traducir el contenido del badge si se requiere.",
        },
    ],
    extras: [
        {
            id: "BadgeType",
            title: "BadgeType",
            description:
                "Dependiendo del valor de 'BadgeType', el estilo y color del badge varían para representar diferentes estados.",
            tableItems: [
                {
                    BadgeType: "pendding",
                    Descripción:
                        "Indica que una tarea o proceso está pendiente.",
                },
                {
                    BadgeType: "loader",
                    Descripción:
                        "Indica que un proceso está en curso o cargando.",
                },
                {
                    BadgeType: "completed",
                    Descripción:
                        "Indica que la tarea o proceso ha sido completado exitosamente.",
                },
                {
                    BadgeType: "error",
                    Descripción:
                        "Indica que ocurrió un error en la tarea o proceso.",
                },
                {
                    BadgeType: "processed",
                    Descripción:
                        "Indica que el proceso ha sido correctamente procesado.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Badge type="completed">Completado</Badge>`,
        },
        {
            text: "Badge de error",
            content: `<Badge type="error">Error en el proceso</Badge>`,
        },
        {
            text: "Badge pendiente con clase personalizada",
            content: `<Badge type="pendding" className="custom-badge">Pendiente</Badge>`,
        },
    ],
};
