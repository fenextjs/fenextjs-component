export default {
    id: "error-component",
    idStorybook: "component-error-component",
    name: "ErrorComponent",
    description:
        "El componente ErrorComponent se utiliza para mostrar errores personalizados o basados en el estado de un componente, incluyendo mensajes de error y posibles entradas relacionadas con el error.",
    props: [
        {
            id: "error",
            type: "ErrorFenextjs",
            require: false,
            default: "undefined",
            description:
                "Objeto de error que contiene el mensaje y otros detalles del error a mostrar.",
        },
        {
            id: "useDataError",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe incluir el error en el atributo 'data-error' como una cadena JSON.",
        },
        {
            id: "useErrorInput",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe mostrar información adicional sobre una entrada relacionada con el error, si está disponible.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el estilo del componente.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido que se muestra dentro del componente si no se proporciona un error.",
        },
    ],
    extras: [
        {
            id: "ErrorFenextjs",
            title: "ErrorFenextjs",
            description:
                "El error que se pasa al componente tiene distintos atributos:",
            tableItems: [
                {
                    Propiedad: "code",
                    Tipo: "ErrorCode",
                    Descripción: "Código del error",
                },
                {
                    Propiedad: "message",
                    Tipo: "string",
                    Descripción: "Mensaje interno del error",
                },
                {
                    Propiedad: "msg",
                    Tipo: "msg",
                    Descripción: "Mensaje del error",
                },
                {
                    Propiedad: "input",
                    Tipo: "input",
                    Descripción: "Input del error",
                },
                {
                    Propiedad: "data",
                    Tipo: "any",
                    Descripción: "Data del error",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<ErrorComponent>Error inesperado</ErrorComponent>`,
        },
        {
            text: "Error con mensaje personalizado",
            content: `<ErrorComponent error={new ErrorFenextjs({ msg: "Ocurrió un error" })} />`,
        },
        {
            text: "Error con entrada relacionada",
            content: `<ErrorComponent error={new ErrorFenextjs({ msg: "Error en el campo", input: "email" })} />`,
        },
    ],
};
