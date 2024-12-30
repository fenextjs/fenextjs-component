export default {
    id: "lava-lamp",
    idStorybook: "component-lava-lamp",
    name: "LavaLamp",
    description:
        "El componente LavaLamp genera un fondo animado que simula el efecto de una lámpara de lava con múltiples elementos flotantes. Los elementos pueden personalizarse en estilo, tamaño, animación y cantidad.",
    props: [
        {
            id: "nItems",
            type: "number",
            require: false,
            default: "20",
            description: "Número de elementos flotantes en la lámpara de lava.",
        },
        {
            id: "styles",
            type: "CSSProperties",
            require: false,
            default:
                '{ width: "100%", height: "500px",background: "linear-gradient(45deg,var(--fenext-color-primary) 0%,var(--fenext-color-teal) 100%)"}',
            description:
                "Estilos generales aplicados al contenedor de la lámpara de lava.",
        },
        {
            id: "stylesElement",
            type: "LavaLampStylesElement[]",
            require: false,
            default: "",
            description:
                "Estilos aplicados a los elementos individuales flotantes en la lámpara de lava.",
        },
        {
            id: "ranges",
            type: "LavaLampRangeStylesProps",
            require: false,
            default: "{}",
            description:
                "Propiedades de rango aleatorio para determinar el movimiento, escala y posición de los elementos.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS adicional para personalizar el contenedor del componente.",
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<LavaLamp />`,
        },
        {
            text: "Con estilos personalizados",
            content: `<LavaLamp styles={{ width: '80%', height: '600px' }} />`,
        },
        {
            text: "Con elementos personalizados",
            content: `<LavaLamp stylesElement={[{ width: '200px', background: 'red' }]} />`,
        },
    ],
};
