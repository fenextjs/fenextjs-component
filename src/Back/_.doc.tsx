export default {
    id: "back",
    idStorybook: "component-back",
    name: "Back",
    description:
        "El componente Back representa un botón de retroceso que permite al usuario navegar a la página anterior en el historial del navegador, utilizar el Router de Next.js, redirigir a una URL específica, ejecutar una función personalizada o realizar una acción personalizada de 'fenextjs-history'.",
    props: [
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando un indicador de 'Loader' y deshabilitando su funcionalidad.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el botón está deshabilitado.",
        },
        {
            id: "onClick",
            type: "(e?: any) => void",
            require: false,
            default: "undefined",
            description:
                "Función personalizada que se ejecuta al hacer clic en el botón.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<SvgPaginationPre />",
            description: "Icono que se muestra dentro del botón.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "'Back'",
            description: "Contenido o texto que se muestra dentro del botón.",
        },
        {
            id: "typeOnBack",
            type: "'fenextjs-history' | 'history' | 'router' | 'link' | 'none'",
            require: false,
            default: "'history'",
            description:
                "Define el tipo de acción que se ejecutará al hacer clic en el botón.",
        },
        {
            id: "link",
            type: "string",
            require: false,
            default: "''",
            description: "URL a la que redirigir si 'typeOnBack' es 'link'.",
        },
        {
            id: "useHistoryMinLenght",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se debe mostrar el botón solo si el historial del navegador tiene una longitud mínima.",
        },
        {
            id: "minLenght",
            type: "number",
            require: false,
            default: 2,
            description:
                "Longitud mínima del historial del navegador para mostrar el botón.",
        },
        {
            id: "onValidateRuteBack",
            type: "(path: string) => boolean",
            require: false,
            default: "undefined",
            description:
                "Función para validar el retroceso cuando 'typeOnBack' es 'fenextjs-history'.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del botón.",
        },
        {
            id: "classNameDisabled",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el estado deshabilitado del botón.",
        },
        {
            id: "classNameIcon",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el icono del botón.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenido del botón.",
        },
        {
            id: "classNameLoader",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente 'Loader'.",
        },
    ],
    extras: [
        {
            id: "redireccionamiento",
            title: "Redireccionamiento",
            description:
                "Dependiendo del valor de 'typeOnBack', la redirección se ejecutará de la siguiente manera:",
            tableItems: [
                {
                    "Tipo de back": "fenextjs-history",
                    Redireccion: "onBack({onValidateRuteBack})",
                    Descripción:
                        "Acción personalizada utilizando el hook 'useHistory' de 'fenextjs'.",
                },
                {
                    "Tipo de back": "history",
                    Redireccion: "history.back()",
                    Descripción:
                        "Redirección a la página anterior mediante el historial del navegador.",
                },
                {
                    "Tipo de back": "router",
                    Redireccion: "router.back()",
                    Descripción: "Redirección utilizando el router de Next.js.",
                },
                {
                    "Tipo de back": "link",
                    Redireccion: "router.push(link)",
                    Descripción: "Redirección a una URL específica.",
                },
                {
                    "Tipo de back": "none",
                    Redireccion: "Ninguna acción",
                    Descripción: "No se realiza ninguna redirección.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<Back />`,
        },
        {
            text: "Back con texto personalizado",
            content: `<Back>Go Back</Back>`,
        },
        {
            text: "Back con acción personalizada",
            content: `<Back onClick={() => console.log("Botón clickeado")}>Volver</Back>`,
        },
        {
            text: "Back deshabilitado",
            content: `<Back disabled={true} />`,
        },
        {
            text: "Back con validación personalizada",
            content: `<Back typeOnBack="fenextjs-history" onValidateRuteBack={(path) => path !== "/home"} />`,
        },
    ],
};
