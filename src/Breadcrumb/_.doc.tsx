export default {
    id: "breadcrumb",
    idStorybook: "breadcrumb-breadcrumb",
    name: "Breadcrumb",
    description:
        "El componente Breadcrumb muestra una serie de enlaces que indican la ruta de navegación actual del usuario. Es útil para mejorar la experiencia del usuario al mostrarle el contexto de navegación.",
    props: [
        {
            id: "links",
            type: "BreadcrumbLinkProps[]",
            require: true,
            description:
                "Una lista de objetos que representan los enlaces del breadcrumb. Cada objeto incluye la URL, el contenido y opcionalmente un manejador de eventos onClick.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase personalizada para el componente Breadcrumb.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase personalizada para los elementos individuales del breadcrumb.",
        },
        {
            id: "classNameLink",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase personalizada para los enlaces dentro del breadcrumb.",
        },
    ],
    extras: [
        {
            id: "BreadcrumbLinkProps",
            title: "Propiedades de BreadcrumbLink",
            description:
                "Cada enlace en el breadcrumb se define mediante las siguientes propiedades:",
            tableItems: [
                {
                    Propiedad: "href",
                    Tipo: "string",
                    Descripcion:
                        "La URL a la que se redirigirá cuando se haga clic en el enlace.",
                },
                {
                    Propiedad: "children",
                    Tipo: "ReactNode",
                    Descripcion:
                        "El contenido que se mostrará dentro del enlace.",
                },
                {
                    Propiedad: "onClick",
                    Tipo: "function",
                    Descripcion:
                        "Función que se ejecutará cuando se haga clic en el enlace (opcional).",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Breadcrumb básico",
            content: `<Breadcrumb links={[{ href: "/home", children: "Home" }, { href: "/about", children: "About" }]} />`,
        },
        {
            text: "Breadcrumb con clases personalizadas",
            content: `<Breadcrumb className="custom-breadcrumb" classNameItem="custom-item" classNameLink="custom-link" links={[{ href: "/home", children: "Home" }, { href: "/services", children: "Services" }, { href: "/contact", children: "Contact" }]} />`,
        },
    ],
};
