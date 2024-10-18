export default {
    id: "item-menu",
    idStorybook: "component-item-menu",
    name: "ItemMenu",
    description: "El componente ItemMenu representa un elemento de menú que puede contener enlaces, iconos y submenús colapsables. Es útil para crear menús anidados o navegaciones que requieren interacción jerárquica.",
    props: [
        {
            id: "url",
            type: "string",
            require: true,
            description: "URL de la página asociada al ítem del menú.",
        },
        {
            id: "text",
            type: "ReactNode",
            require: true,
            description: "Texto que representa el ítem del menú.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<></>",
            description: "Icono a mostrar junto al texto del menú.",
        },
        {
            id: "subItems",
            type: "Array<Omit<ItemMenuProps, '_t'>>",
            require: false,
            description: "Submenús anidados dentro de este ítem de menú.",
        },
        {
            id: "defaultActive",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el submenú está activo por defecto.",
        },
        {
            id: "iconArrow",
            type: "ReactNode",
            require: false,
            default: "<Arrow />",
            description: "Icono de flecha que indica la expansión del submenú.",
        },
        {
            id: "nameNumber",
            type: "number",
            require: false,
            default: "1",
            description: "Número de nivel de jerarquía del ítem de menú.",
        },
        {
            id: "typeCollapse",
            type: "'radio' | 'checkbox'",
            require: false,
            description: "Tipo de comportamiento del colapso en los submenús.",
        },
        {
            id: "isLink",
            type: "boolean",
            require: false,
            default: "true",
            description: "Determina si el componente se renderiza como un enlace.",
        },
        {
            id: "onClick",
            type: "function",
            require: false,
            description: "Función que se ejecuta al hacer clic en el ítem de menú.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor principal del ítem.",
        },
        {
            id: "classNameA",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el elemento de enlace del ítem.",
        },
        {
            id: "classNameIcon",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el icono del ítem.",
        },
        {
            id: "classNameText",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el texto del ítem.",
        }
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<ItemMenu url="/home" text="Inicio" />`
        },
        {
            text: "Ítem de menú con submenús",
            content: `<ItemMenu url="/services" text="Servicios" subItems={[{ url: "/web", text: "Desarrollo Web" }, { url: "/app", text: "Aplicaciones Móviles" }]} />`
        },
        {
            text: "Ítem de menú con icono y colapso activado",
            content: `<ItemMenu url="/profile" text="Perfil" icon={<UserIcon />} defaultActive={true} />`
        }
    ]
};
