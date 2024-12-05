export default {
    id: "form",
    idStorybook: "component-form",
    name: "Form",
    description:
        "El componente Form es un formulario que permite capturar datos del usuario. Ofrece funcionalidad para manejar el envío de formularios, opcionalmente realizar una acción al enviarlo y manejar un estado deshabilitado.",
    props: [
        {
            id: "id",
            type: "string",
            require: false,
            default: "''",
            description:
                "ID único para identificar el formulario, usado para personalizar la acción en eventos.",
        },
        {
            id: "onSubmit",
            type: "() => Promise<void>",
            require: false,
            default: "async () => {}",
            description:
                "Función personalizada que se ejecuta al enviar el formulario. Debe ser una función asíncrona que realice la acción de envío.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si el formulario está deshabilitado, lo que previene la acción de envío.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el estilo del formulario.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido o elementos dentro del formulario, típicamente los campos de entrada.",
        },
    ],
    useExample: [
        {
            text: "Formulario básico",
            content: `<Form><InputText name="example" /></Form>`,
        },
        {
            text: "Formulario con acción personalizada",
            content: `<Form onSubmit={async () => { console.log("Formulario enviado"); }}><InputText name="example" /></Form>`,
        },
        {
            text: "Formulario deshabilitado",
            content: `<Form disabled={true}><InputText name="example" /></Form>`,
        },
    ],
    extras: [
        {
            id: "Tracking",
            title: "Eventos de tracking",
            description:
                "Cuando el formulario tiene un 'id' definido y se envía correctamente, se registra un evento en el Data Layer.",
            tableItems: [
                {
                    "Evento": "form-{id}",
                    "Descripción": "Evento de tracking cuando se envía el formulario con un 'id' definido.",
                },
            ],
        },
    ],
};
