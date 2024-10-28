export default {
    id: "mediaPage",
    idStorybook: "component-media-page",
    name: "MediaPage",
    description:
        "El componente MediaPage proporciona una interfaz para subir, mostrar y seleccionar imágenes, con funcionalidades adicionales como eliminación, aceptación y un header personalizable. Permite manejar tanto una imagen única como múltiples imágenes.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente MediaPage.",
        },
        {
            id: "multiple",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se pueden seleccionar o subir múltiples imágenes a la vez.",
        },
        {
            id: "onChange",
            type: "(data: ImgDataProps[] | ImgDataProps | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando hay cambios en las imágenes seleccionadas o cargadas.",
        },
        {
            id: "onUploadImg",
            type: "(data: ImgDataProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando se sube una imagen.",
        },
        {
            id: "onDeleteImg",
            type: "(data: ImgDataProps) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando se elimina una imagen.",
        },
        {
            id: "onAcepte",
            type: "(data: ImgDataProps[] | ImgDataProps) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando se acepta la selección de imágenes.",
        },
        {
            id: "HeaderPage",
            type: "ReactNode",
            require: false,
            default: `
<Title tag="h3">Media</Title>
<Text>Upload or Select Imagen.</Text>`,
            description:
                "Contenido del encabezado de la página de medios, se puede personalizar.",
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
            id: "images",
            type: "ImgDataProps[]",
            require: false,
            default: "[]",
            description: "Imágenes a mostrar en el componente MediaPage.",
        },
        {
            id: "loaderImages",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Muestra un cargador mientras las imágenes están siendo cargadas.",
        },
        {
            id: "disabledSelectImg",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita la opción de seleccionar imágenes.",
        },
        {
            id: "InputUploadProps",
            type: "Omit<InputUploadProps, 'onChange' | 'defaultValue' | 'onChangeProgress' | 'onUploadFile' | 'clearAfterUpload'>",
            require: false,
            default: `{
    accept: ["png", "jpg", "jpeg", "webp"],
    title: "Upload Imagen",
    text: "Click for select or upload Imagen.",
}`,
            description:
                "Propiedades para personalizar el componente InputUpload utilizado dentro de MediaPage.",
        },
        {
            id: "ButtonAcceptProps",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Acepte' }",
            description: "Propiedades del botón de aceptación.",
        },
        {
            id: "ButtonCancelProps",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Cancel' }",
            description: "Propiedades del botón de cancelación.",
        },
        {
            id: "isPage",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Determina si el componente se comporta como una página completa de medios o como un componente en línea.",
        },
        {
            id: "extraContentImgs",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido adicional que se puede agregar junto a las imágenes en MediaPage.",
        },
        {
            id: "onRenderImg",
            type: "(data: ImgDataProps) => ReactNode",
            require: false,
            default: "undefined",
            description:
                "Función que permite renderizar imágenes personalizadas dentro de la galería.",
        },
    ],
    extras: [],
    useExample: [
        {
            text: "MediaPage básico",
            content: `<MediaPage />`,
        },
        {
            text: "MediaPage con imágenes predeterminadas",
            content: `<MediaPage defaultValue={defaultImages} />`,
        },
        {
            text: "MediaPage con múltiples imágenes",
            content: `<MediaPage multiple={true} />`,
        },
    ],
};
