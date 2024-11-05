export default {
    id: "input-gallery",
    idStorybook: "component-input-gallery",
    name: "InputGallery",
    description:
        "El componente InputGallery permite a los usuarios cargar y gestionar múltiples imágenes a través de una interfaz de galería. Incluye opciones para añadir y eliminar imágenes.",
    props: [
        {
            id: "defaultValue",
            type: "FileProps[]",
            require: false,
            default: "[]",
            description:
                "Valor por defecto que se muestra en la galería. Se espera un array de objetos FileProps.",
        },
        {
            id: "value",
            type: "FileProps[]",
            require: false,
            default: "undefined",
            description:
                "Valor controlado para la galería, que reemplaza el defaultValue si se proporciona.",
        },
        {
            id: "textBtn",
            type: "string",
            require: false,
            default: "'Add More Images'",
            description:
                "Texto que se muestra en el botón para añadir más imágenes.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente.",
        },
        {
            id: "classNameContentButton",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del botón.",
        },
        {
            id: "classNameButton",
            type: "ButtonClassProps",
            require: false,
            default: "{}",
            description: "Clase CSS específica para el botón.",
        },
        {
            id: "onChange",
            type: "(items: FileProps[]) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando la lista de imágenes cambia.",
        },
        // ...Object.keys(InputImgBaseProps).map(key => ({
        //     id: key,
        //     type: typeof InputImgBaseProps[key],
        //     require: false,
        //     default: InputImgBaseProps[key].default || "undefined",
        //     description: `Propiedad del componente InputImgBaseProps: ${key}`
        // }))
    ],
    useExample: [
        {
            text: "Galería de imágenes básica",
            content: `<InputGallery 
    onChange={(items) => { console.log(items); }} 
/>`,
        },
        {
            text: "Galería de imágenes con valores predefinidos",
            content: `<InputGallery 
    defaultValue={[{ fileData: "url1", text: "Image 1" }]} 
    onChange={(items) => { console.log(items); }} 
/>`,
        },
        {
            text: "Galería con botón personalizado",
            content: `<InputGallery 
    textBtn="Upload New Image" 
    onChange={(items) => { console.log(items); }} 
/>`,
        },
    ],
};
