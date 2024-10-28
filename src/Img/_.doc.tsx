export default {
    id: "img",
    idStorybook: "component-img",
    name: "Img",
    description:
        "El componente Img renderiza una imagen con soporte para múltiples resoluciones, capas visuales, y un cargador opcional. También permite definir acciones personalizadas en caso de error o al hacer clic sobre la imagen.",
    props: [
        {
            id: "src",
            type: "string",
            require: true,
            default: "undefined",
            description: "La URL de la imagen a mostrar.",
        },
        {
            id: "alt",
            type: "string",
            require: false,
            default: "undefined",
            description: "Texto alternativo para la imagen.",
        },
        {
            id: "srcMin1920",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 1920px.",
        },
        {
            id: "srcMin1680",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 1680px.",
        },
        {
            id: "srcMin1440",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 1440px.",
        },
        {
            id: "srcMin1024",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 1024px.",
        },
        {
            id: "srcMin992",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 992px.",
        },
        {
            id: "srcMin768",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 768px.",
        },
        {
            id: "srcMin575",
            type: "string",
            require: false,
            default: "undefined",
            description: "URL de la imagen para resoluciones mayores a 575px.",
        },
        {
            id: "imgIf404",
            type: "string",
            require: false,
            default: "''",
            description:
                "URL de la imagen que se mostrará en caso de error de carga.",
        },
        {
            id: "layers",
            type: "CSSProperties[]",
            require: false,
            default: "[]",
            description:
                "Capas CSS que se aplican como filtros o estilos adicionales a la imagen.",
        },
        {
            id: "onErrorImg",
            type: "(e: SyntheticEvent<HTMLImageElement, Event>) => void",
            require: false,
            default: "undefined",
            description:
                "Función personalizada que se ejecuta cuando ocurre un error al cargar la imagen.",
        },
        {
            id: "onClick",
            type: "() => void",
            require: false,
            default: "undefined",
            description:
                "Función personalizada que se ejecuta al hacer clic en la imagen.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe mostrar un cargador mientras se carga la imagen.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente.",
        },
        {
            id: "classNameImg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la imagen en sí.",
        },
    ],
    useExample: [
        {
            text: "Imagen básica",
            content: `<Img src="/path/to/image.jpg" alt="Descripción" />`,
        },
        {
            text: "Imagen con capas",
            content: `<Img src="/path/to/image.jpg" layers={[{ opacity: 0.5, mixBlendMode: 'multiply' }]} />`,
        },
        {
            text: "Imagen con loader y acción de clic",
            content: `<Img src="/path/to/image.jpg" loader={true} onClick={() => alert('Imagen clickeada')} />`,
        },
        {
            text: "Imagen con manejo de error",
            content: `<Img src="/path/to/image.jpg" imgIf404="/path/to/fallback.jpg" />`,
        },
    ],
};
