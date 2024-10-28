export default {
    id: "tooltip",
    idStorybook: "component-tooltip",
    name: "Tooltip",
    description:
        "El componente Tooltip muestra información adicional en un cuadro emergente cuando el usuario se desplaza sobre un elemento o interactúa con él. La posición del tooltip puede ajustarse en los ejes X e Y.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del tooltip.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido o elemento que activará la visualización del tooltip.",
        },
        {
            id: "tooltip",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido del tooltip que se mostrará al usuario.",
        },
        {
            id: "positionX",
            type: "'center' | 'right' | 'left'",
            require: false,
            default: "'center'",
            description:
                "Posición horizontal del tooltip en relación con el elemento activador.",
        },
        {
            id: "positionY",
            type: "'center' | 'top' | 'bottom'",
            require: false,
            default: "'top'",
            description:
                "Posición vertical del tooltip en relación con el elemento activador.",
        },
    ],
    useExample: [
        {
            text: "Tooltip básico",
            content: `<Tooltip tooltip="Texto de ayuda">Hover aquí</Tooltip>`,
        },
        {
            text: "Tooltip con posición ajustada",
            content: `<Tooltip tooltip="Texto de ayuda" positionX="right" positionY="bottom">Hover aquí</Tooltip>`,
        },
        {
            text: "Tooltip con clase personalizada",
            content: `<Tooltip tooltip="Texto de ayuda" className="custom-tooltip">Hover aquí</Tooltip>`,
        },
    ],
};
