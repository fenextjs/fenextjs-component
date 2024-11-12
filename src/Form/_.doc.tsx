export default {
    id: "form",
    idStorybook: "component-form",
    name: "Form",
    description:
        "El componente Form es un formulario que permite manejar envíos de datos, con soporte para mostrar loaders, manejar deshabilitación, y ejecutar funciones tras el envío éxitoso o en caso de error.",
    props: [
        {
            id: "id",
            type: "string",
            require: false,
            default: "''",
            description:
                "Identificador único para el formulario, útil para eventos o seguimiento.",
        },
        {
            id: "data",
            type: "any",
            require: true,
            default: "undefined",
            description:
                "Datos iniciales que el formulario manejará durante el envío.",
        },
        {
            id: "onSubmit",
            type: "RequestProps<D, R, E, T>",
            require: false,
            default: "undefined",
            description:
                "Función para manejar el envío de datos del formulario.",
        },
        {
            id: "onAfterSubmit",
            type: "(data: RequestResultDataProps<R, E, T>) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta después de un envío éxitoso del formulario.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si el formulario está deshabilitado, bloqueando su envío.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Muestra un loader mientras el formulario está siendo enviado.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para aplicar estilos personalizados al formulario.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido que se renderiza dentro del formulario, como inputs o botones.",
        },
    ],
    extras: [
        {
            id: "gestión-de-envío",
            title: "Gestión de Envío",
            description:
                "El componente maneja el envío de datos mediante la función 'onSubmit', y permite realizar acciones adicionales mediante 'onAfterSubmit' tras el éxito o fallo en el envío.",
            tableItems: [
                {
                    Propiedad: "onSubmit",
                    Uso: "Maneja el envío de datos y devuelve el resultado de la operación.",
                    Descripción:
                        "Función que puede incluir lógica personalizada para gestionar los datos que se envían.",
                },
                {
                    Propiedad: "onAfterSubmit",
                    Uso: "Ejecuta acciones después del envío éxitoso, como el seguimiento de eventos.",
                    Descripción:
                        "Función opcional que recibe los datos del resultado del envío y permite manejar la lógica post-envío.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<Form data={{ field: 'value' }} onSubmit={(data) => console.log(data)}>Enviar</Form>`,
        },
        {
            text: "Formulario con deshabilitación y loader",
            content: `<Form data={{ field: 'value' }} disabled={true} loader={true}>Enviar</Form>`,
        },
        {
            text: "Formulario con acción después del envío",
            content: `<Form data={{ field: 'value' }} onAfterSubmit={(result) => console.log('Envío éxitoso', result)}>Enviar</Form>`,
        },
    ],
};
