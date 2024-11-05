export default {
    id: "text",
    idStorybook: "component-text",
    name: "Text",
    description:
        "Componente Text que permite mostrar diferentes elementos de texto (`p`, `strong`, `small`, etc.) con soporte para un indicador de carga en forma de líneas de esqueleto.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el contenedor principal del componente.",
        },
        {
            id: "tag",
            type: '"p" | "strong" | "small" | "em" | "b" | "del" | "i" | "mark" | "ins" | "sub" | "sup"',
            require: false,
            default: '"p"',
            description:
                "Define la etiqueta HTML que se utiliza para el texto. Permite diferentes opciones como `p`, `strong`, `small`, etc.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se muestra un indicador de carga. Cuando es `true`, muestra líneas de carga en lugar del contenido.",
        },
        {
            id: "nLineLoader",
            type: "number",
            require: false,
            default: "3",
            description:
                "Número de líneas de esqueleto que se muestran cuando `loader` está activo.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            description:
                "Contenido que se mostrará dentro del componente `Text` si `loader` es `false`.",
        },
    ],
    useExample: [
        {
            text: "Uso básico del componente Text",
            content: `<Text tag="strong" className="text-strong">Texto destacado</Text>`,
        },
        {
            text: "Uso del componente Text con el loader activo",
            content: `<Text loader={true} nLineLoader={5} />`,
        },
    ],
};
