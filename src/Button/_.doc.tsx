export default {
    id: "button",
    idStorybook: "button",
    name: "Button",
    description: "El componente Button es un botón interactivo que puede ser configurado para mostrar íconos, estar en estado de carga (loader), deshabilitarse y adaptarse a diferentes tamaños. Permite a los usuarios interactuar con la aplicación ejecutando acciones al hacer clic.",
    props: [
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si el botón está en estado de carga, mostrando un indicador de carga (spinner) y deshabilitado para otras acciones."
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si el botón está deshabilitado, impidiendo cualquier interacción."
        },
        {
            id: "onClick",
            type: "ButtonOnClick",
            require: false,
            description: "Función que se ejecuta cuando se hace clic en el botón (solo si no está deshabilitado o en estado de carga)."
        },
        {
            id: "onClickDisabled",
            type: "ButtonOnClick",
            require: false,
            description: "Función que se ejecuta cuando se hace clic en el botón estando deshabilitado."
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "El ícono que se mostrará dentro del botón."
        },
        {
            id: "isBtn",
            type: "boolean",
            require: false,
            default: "true",
            description: "Si se renderiza el componente como un botón (`<button>`) o como un `<div>`."
        },
        {
            id: "size",
            type: "\"extra-small\" | \"small\" | \"normal\" | \"strong\" | \"extra-strong\"",
            require: false,
            default: "\"normal\"",
            description: "El tamaño del botón."
        },
        {
            id: "full",
            type: "boolean",
            require: false,
            default: "false",
            description: "Si el botón debe ocupar todo el ancho disponible."
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase personalizada para el componente Button."
        },
        {
            id: "classNameLoader",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase personalizada para el componente Loader dentro del botón cuando está en estado de carga."
        }
    ],
    useExample: [
        {
            text: "Botón básico",
            content: `<Button>Click me</Button>`
        },
        {
            text: "Botón con ícono",
            content: `<Button icon={<img src="/icon.svg" alt="Icon" />}>Click me</Button>`
        },
        {
            text: "Botón en estado de carga",
            content: `<Button loader={true}>Loading...</Button>`
        },
        {
            text: "Botón deshabilitado",
            content: `<Button disabled={true}>Disabled</Button>`
        },
        {
            text: "Botón con tamaño personalizado",
            content: `<Button size="strong">Strong Button</Button>`
        },
        {
            text: "Botón con ancho completo",
            content: `<Button full={true}>Full Width Button</Button>`
        }
    ]
}
