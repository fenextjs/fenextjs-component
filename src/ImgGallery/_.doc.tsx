export default {
    id: "img-gallery",
    idStorybook: "component-img-gallery",
    name: "ImgGallery",
    description: "El componente ImgGallery muestra una galería de imágenes con la opción de cargar más imágenes y visualizar cada imagen en un modal con un deslizador.",
    props: [
        {
            id: "imgs",
            type: "ImgProps[]",
            require: true,
            description: "Lista de imágenes a mostrar en la galería.",
        },
        {
            id: "buttonShowMoreImg",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Show more pictures' }",
            description: "Propiedades del botón para mostrar más imágenes.",
        },
        {
            id: "buttonHiddenMoreImg",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Hidden pictures' }",
            description: "Propiedades del botón para ocultar imágenes adicionales.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el componente está en estado de carga, mostrando un cargador en lugar de las imágenes.",
        },
        {
            id: "nLoader",
            type: "number",
            require: false,
            default: "5",
            description: "Número de elementos que mostrarán el loader mientras se cargan las imágenes.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de la galería.",
        }
    ],
    useExample: [
        {
            text: "Galería básica",
            content: `<ImgGallery imgs={imageList} />`,
        },
        {
            text: "Galería con botón personalizado",
            content: `<ImgGallery imgs={imageList} buttonShowMoreImg={{ children: "Ver más imágenes" }} />`,
        },
        {
            text: "Galería en estado de carga",
            content: `<ImgGallery loader={true} nLoader={3} />`,
        }
    ]
};
