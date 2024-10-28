export default {
    id: "mediaInput",
    idStorybook: "component-media-input",
    name: "MediaInput",
    description:
        "El componente MediaInput permite a los usuarios seleccionar o cargar imágenes a través de una interfaz que incluye botones y galerías de imágenes. Admite múltiples selecciones y permite personalización a través de varios props, como títulos, iconos y comportamiento del modal.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente MediaInput.",
        },
        {
            id: "titleView",
            type: "string",
            require: false,
            default: "'Upload Image'",
            description:
                "Título que se muestra en la vista de carga de imágenes.",
        },
        {
            id: "textView",
            type: "string",
            require: false,
            default: "'Click for select or upload Image.'",
            description:
                "Texto que se muestra en la vista de carga de imágenes.",
        },
        {
            id: "iconView",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Icono que se muestra junto al título y texto de la vista de carga.",
        },
        {
            id: "defaultValue",
            type: "ImgDataProps[] | ImgDataProps",
            require: false,
            default: "undefined",
            description:
                "Valor por defecto del componente, que puede ser una o varias imágenes.",
        },
        {
            id: "multiple",
            type: "boolean",
            require: false,
            default: "false",
            description: "Define si se pueden seleccionar múltiples imágenes.",
        },
        {
            id: "onChange",
            type: "(data: ImgDataProps[] | ImgDataProps | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando cambian los datos seleccionados o cargados.",
        },
        {
            id: "ButtonUploadProps",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Upload Image', full: true }",
            description: "Propiedades del botón de subida de imágenes.",
        },
        {
            id: "MediaPageProps",
            type: "Omit<MediaPageProps, 'onChange' | 'multiple' | 'defaultValue'>",
            require: false,
            default: "{}",
            description: "Propiedades adicionales para la galería de medios.",
        },
        {
            id: "ModalProps",
            type: "Pick<ModalBaseBaseProps, 'type'>",
            require: false,
            default: "{ type: 'full' }",
            description:
                "Propiedades del modal que contiene la galería de imágenes.",
        },
    ],
    extras: [],
    useExample: [
        {
            text: "MediaInput básico",
            content: `<MediaInput />`,
        },
        {
            text: "MediaInput con múltiples imágenes",
            content: `<MediaInput multiple={true} />`,
        },
        {
            text: "MediaInput con valores predeterminados",
            content: `<MediaInput defaultValue={defaultImages} />`,
        },
    ],
};
