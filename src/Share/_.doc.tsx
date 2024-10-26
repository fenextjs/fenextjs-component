export default {
    id: "share",
    idStorybook: "component-share",
    name: "Share",
    description: "El componente Share permite a los usuarios compartir contenido a través de diversas plataformas como WhatsApp, Facebook, Twitter, correo electrónico o copiar el enlace. Incluye personalización de botones y títulos.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente Share.",
        },
        {
            id: "ButtonProps",
            type: "ButtonProps",
            require: false,
            default: "{ children: 'Share' }",
            description: "Props del componente Button para personalizar el botón de compartir.",
        },
        {
            id: "TitleProps",
            type: "TitleProps",
            require: false,
            default: "{ children: 'Share', tag: 'h2' }",
            description: "Props del componente Title para personalizar el título de la ventana de compartir.",
        },
        {
            id: "share",
            type: "string",
            require: false,
            default: "''",
            description: "Texto que se comparte en las redes sociales o se copia en el portapapeles.",
        },
        {
            id: "shareList",
            type: "ShareListType[]",
            require: false,
            default: "['whatsapp', 'facebook', 'twitter', 'email', 'copy']",
            description: "Lista de plataformas de redes sociales o acciones de compartir disponibles en el componente.",
        },
        {
            id: "showShareCopy",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se debe mostrar el botón de copia para compartir el texto.",
        }
    ],
    useExample: [
        {
            text: "Uso básico del Share",
            content: `<Share share="http://example.com" />`
        },
        {
            text: "Share con título personalizado",
            content: `<Share TitleProps={{ children: 'Compartir en redes' }} />`
        },
        {
            text: "Share con opciones específicas de redes sociales",
            content: `<Share shareList={['whatsapp', 'twitter']} />`
        },
        {
            text: "Share con botón de copia de enlace visible",
            content: `<Share showShareCopy={true} />`
        }
    ]
};
