export default {
    id: "input-img",
    idStorybook: "component-input-img",
    name: "InputImg",
    description:
        "El componente InputImg permite a los usuarios cargar una única imagen y muestra una vista previa de la imagen seleccionada. También incluye la opción de eliminar la imagen cargada.",
    props: [
        {
            id: "title",
            type: "ReactNode",
            require: false,
            default: "'Add Image'",
            description: "Título que se muestra en el componente.",
        },
        {
            id: "text",
            type: "ReactNode",
            require: false,
            default: "'Drag Image'",
            description:
                "Texto que se muestra en el componente para guiar al usuario.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<SvgImg />",
            description: "Ícono que se muestra en el componente.",
        },
        {
            id: "onRemove",
            type: "() => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando se elimina la imagen.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente.",
        },
        {
            id: "classNameContentIcon",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del ícono.",
        },
        {
            id: "classNameText",
            type: "Omit<TextProps, 'children'>",
            require: false,
            default: "{}",
            description: "Clase CSS para el texto.",
        },
        {
            id: "classNameTitle",
            type: "Omit<TitleProps, 'children'>",
            require: false,
            default: "{}",
            description: "Clase CSS para el título.",
        },
        {
            id: "classNameProgress",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la barra de progreso.",
        },
        {
            id: "classNameRemove",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el botón de eliminar.",
        },
        {
            id: "classNameImg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la imagen mostrada.",
        },
        {
            id: "defaultValue",
            type: "FileProps",
            require: false,
            default: "{ fileData: '', text: '' }",
            description: "Valor por defecto que se mostrará en el componente.",
        },
        {
            id: "parseProgress",
            type: "(e: number) => string",
            require: false,
            default: "Imging . . . ${e.toFixed(0)}%",
            description:
                "Función que formatea el texto de progreso durante la carga.",
        },
    ],
    useExample: [
        {
            text: "Carga de una imagen simple",
            content: `<InputImg 
    onChange={(data) => { console.log(data); }} 
/>`,
        },
        {
            text: "Carga de una imagen con título y texto personalizado",
            content: `<InputImg 
    title="Sube tu Imagen" 
    text="Arrastra la imagen aquí" 
    onChange={(data) => { console.log(data); }} 
/>`,
        },
        {
            text: "Carga de imagen con función de eliminación",
            content: `<InputImg 
    onRemove={() => { console.log('Imagen eliminada'); }} 
    onChange={(data) => { console.log(data); }}
/>`,
        },
    ],
};
