export default {
    id: "menu",
    idStorybook: "component-menu",
    minHeightIframe: "50vh",
    name: "Menú",
    description:
        "El componente Menu renderiza una lista de elementos interactivos. Se utiliza para mostrar una estructura de menú con soporte para la funcionalidad de colapsar submenús, íconos personalizados y distintos tipos de comportamiento (radio o checkbox).",
    props: [
        {
            id: "items",
            type: "ItemMenuProps[]",
            require: false,
            default: "[]",
            description:
                "Lista de elementos del menú. Cada uno debe cumplir con la interfaz `ItemMenuProps`.",
        },
        {
            id: "iconArrow",
            type: "ReactNode",
            require: false,
            default: "<Arrow />",
            description:
                "Ícono que se muestra para los elementos colapsables del menú.",
        },
        {
            id: "typeCollapse",
            type: "'radio' | 'checkbox'",
            require: false,
            default: "undefined",
            description:
                "Tipo de comportamiento para los elementos colapsables del menú, ya sea radio o checkbox.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal del menú.",
        },
        {
            id: "defaultShowSubMenu",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si los submenús deben mostrarse por defecto.",
        },
    ],
    useExample: [
        {
            text: "Menú básico",
            content: `<Menu 
    items={[
        { label: 'Home', link: '/' }, 
        { label: 'About', link: '/about' }
    ]} 
/>`,
        },
        {
            text: "Menú con ícono personalizado",
            content: `<Menu 
    iconArrow={<CustomIcon />} 
    items={[
        { label: 'Home', link: '/' }, 
        { label: 'Services', link: '/services' }
    ]} 
/>`,
        },
        {
            text: "Menú con submenús desplegables",
            content: `<Menu 
    defaultShowSubMenu={true} 
    items={[
        { label: 'Home', link: '/', defaultActive: true }, 
        { label: 'Projects', link: '/projects' }
    ]} 
/>`,
        },
    ],
};
