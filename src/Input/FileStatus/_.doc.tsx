export default {
    id: "input-file-status",
    idStorybook: "component-input-file-status",
    name: "InputFileStatus",
    description: "El componente InputFileStatus combina la funcionalidad de carga de archivos con un estado visual, mostrando diferentes iconos y mensajes según el estado del archivo (Aprobado, Rechazado, Pendiente).",
    props: [
        {
            id: "title",
            type: "React.ReactNode",
            require: false,
            default: "'Drag and drop here'",
            description: "Título del componente que se muestra cuando no hay archivos cargados.",
        },
        {
            id: "text",
            type: "React.ReactNode",
            require: false,
            default: "'Drag and drop your file or template here.'",
            description: "Texto que se muestra para guiar al usuario sobre la acción que debe realizar.",
        },
        {
            id: "icon",
            type: "React.ReactNode",
            require: false,
            default: "<Upload2 />",
            description: "Ícono que se muestra en el componente.",
        },
        {
            id: "btn",
            type: "React.ReactNode",
            require: false,
            default: "'Choose File'",
            description: "Texto o contenido del botón de carga.",
        },
        {
            id: "iconLoader",
            type: "React.ReactNode",
            require: false,
            default: "<LoaderSpinner />",
            description: "Ícono que se muestra mientras se está cargando el archivo.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente.",
        },
        {
            id: "onUploadFile",
            type: "(data: FileProps) => Promise<FileProps>",
            require: true,
            default: "undefined",
            description: "Función que se ejecuta para manejar la carga del archivo.",
        },
        {
            id: "contentByStatus",
            type: "InputFileStatusContentByStatus",
            require: false,
            default: "{}",
            description: "Contenido específico para cada estado del archivo, que incluye título, ícono y etiqueta.",
        },
        // ...Object.keys(InputFileBaseProps).map(key => ({
        //     id: key,
        //     type: typeof InputFileBaseProps[key],
        //     require: false,
        //     default: InputFileBaseProps[key].default || "undefined",
        //     description: `Propiedad del componente InputFileBaseProps: ${key}`
        // }))
    ],
    useExample: [
        {
            text: "Carga de archivo con estado de éxito",
            content: `<InputFileStatus onUploadFile={async (file) => { /* Lógica de carga */ return file; }} />`
        },
        {
            text: "Carga de archivo con gestión de errores",
            content: `<InputFileStatus onUploadFile={async (file) => { throw new Error('Error de carga'); }} />`
        },
        {
            text: "Componente de carga con botón personalizado",
            content: `<InputFileStatus btn={<Button>Subir Archivo</Button>} onUploadFile={async (file) => { /* Lógica de carga */ return file; }} />`
        },
    ]
};
