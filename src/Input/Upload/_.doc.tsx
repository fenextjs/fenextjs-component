export default {
    id: "input-upload",
    idStorybook: "component-input-upload",
    name: "InputUpload",
    description:
        "El componente InputUpload permite a los usuarios cargar archivos, proporcionando opciones de previsualización y una interfaz personalizable para seleccionar o arrastrar y soltar archivos.",
    props: [
        {
            id: "title",
            type: "React.ReactNode",
            require: false,
            default: `"Drag and drop here"`,
            description: "Título mostrado en el área de carga de archivos.",
        },
        {
            id: "text",
            type: "React.ReactNode",
            require: false,
            default: `"Drag and drop your file or template here."`,
            description:
                "Texto adicional que se muestra en el área de carga de archivos.",
        },
        {
            id: "titleFile",
            type: "React.ReactNode",
            require: false,
            default: "undefined",
            description:
                "Título personalizado que se muestra al seleccionar un archivo.",
        },
        {
            id: "textFile",
            type: "React.ReactNode",
            require: false,
            default: "undefined",
            description:
                "Texto personalizado que se muestra al seleccionar un archivo.",
        },
        {
            id: "textPreview",
            type: "React.ReactNode",
            require: false,
            default: `"Preview File"`,
            description:
                "Texto que se muestra para la previsualización del archivo.",
        },
        {
            id: "icon",
            type: "React.ReactNode",
            require: false,
            default: "<Upload2 />",
            description: "Icono que se muestra en el área de carga.",
        },
        {
            id: "iconFile",
            type: "React.ReactNode",
            require: false,
            default: '""',
            description: "Icono que se muestra junto con el archivo cargado.",
        },
        {
            id: "btn",
            type: "React.ReactNode",
            require: false,
            default: `"Choose File"`,
            description:
                "Texto o componente personalizado para el botón de selección de archivo.",
        },
        {
            id: "tagPreview",
            type: '"embed" | "img"',
            require: false,
            default: `"embed"`,
            description:
                "Etiqueta HTML usada para mostrar la previsualización del archivo. Puede ser 'embed' o 'img'.",
        },
        {
            id: "customPreview",
            type: "(data: FileProps) => React.ReactNode",
            require: false,
            default: "undefined",
            description:
                "Función personalizada para renderizar la previsualización del archivo.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se muestra un indicador de carga mientras se sube el archivo.",
        },
        {
            id: "iconLoader",
            type: "React.ReactNode",
            require: false,
            default: "<LoaderSpinner />",
            description:
                "Icono o componente que se muestra mientras el archivo está en proceso de carga.",
        },
        {
            id: "parseProgress",
            type: "(e: number) => string",
            require: false,
            default: "(e) => `Uploading . . . ${e.toFixed(0)}%`",
            description:
                "Función que permite personalizar el texto de progreso de la carga de archivos.",
        },
        {
            id: "onChange",
            type: "(file: File) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el archivo cambia, recibe el archivo seleccionado.",
        },
    ],
    useExample: [
        {
            text: "InputUpload básico",
            content: `<InputUpload />`,
        },
        {
            text: "InputUpload con texto personalizado",
            content: `<InputUpload title="Sube tu archivo aquí" text="Arrastra y suelta tu archivo o selecciónalo desde tu dispositivo" />`,
        },
        {
            text: "InputUpload con previsualización de imagen",
            content: `<InputUpload tagPreview="img" />`,
        },
        {
            text: "InputUpload con un botón personalizado",
            content: `<InputUpload btn={<Button>Cargar Archivo</Button>} />`,
        },
    ],
};
