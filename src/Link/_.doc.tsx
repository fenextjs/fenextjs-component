export default {
    id: "link",
    idStorybook: "component-link",
    name: "Link",
    description: "El componente Link es una representación personalizada de un enlace que utiliza Next.js `Link` para manejar la navegación entre páginas. Soporta propiedades específicas para controlar el comportamiento del enlace, como el destino, la política de referenciación y la clase CSS para personalización adicional.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el estilo del enlace.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "'Link'",
            description: "Contenido o texto que se muestra dentro del enlace.",
        },
        {
            id: "target",
            type: "'_self' | '_blank' | '_parent' | '_top'",
            require: false,
            default: "'_self'",
            description: "Define el destino donde se abrirá el enlace.",
        },
        {
            id: "referrerPolicy",
            type: "string",
            require: false,
            default: "''",
            description: "Política de referencia que se debe usar al navegar a través del enlace.",
        },
        {
            id: "rel",
            type: "string",
            require: false,
            default: "''",
            description: "Especifica la relación entre el documento actual y el enlace.",
        },
        {
            id: "href",
            type: "string",
            require: true,
            default: "''",
            description: "URL a la que se navega cuando se hace clic en el enlace.",
        }
    ],
    extras: [],
    useExample: [
        {
            text: "Enlace básico",
            content: `<Link href="/about">About Us</Link>`
        },
        {
            text: "Enlace con apertura en nueva pestaña",
            content: `<Link href="/contact" target="_blank">Contact Us</Link>`
        }
    ]
};
