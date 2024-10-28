export default {
    id: "input-file",
    idStorybook: "component-input-file",
    name: "InputFile",
    description:
        "El componente InputFile permite a los usuarios seleccionar y subir archivos desde su dispositivo. Admite validaciones como tipos de archivo permitidos y tamaño máximo de archivo.",
    props: [
        {
            id: "accept",
            type: "string[]",
            require: false,
            default: "[]",
            description:
                "Tipos de archivo permitidos para la entrada. Ejemplo: ['jpg', 'png']",
        },
        {
            id: "defaultValue",
            type: "FileProps",
            require: false,
            default: "{ fileData: '', text: '' }",
            description:
                "Valor predeterminado del archivo. Usado para establecer un archivo inicial.",
        },
        {
            id: "onChange",
            type: "(v: FileProps) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando se selecciona un archivo.",
        },
        {
            id: "onChangeProgress",
            type: "(v: number) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al actualizar el progreso de la carga.",
        },
        {
            id: "onChangeError",
            type: "(v: ErrorProps | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando hay un error durante la carga.",
        },
        {
            id: "onUploadFile",
            type: "(data: InputFileUploadDataProps) => Promise<FileProps>",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta para manejar la carga del archivo.",
        },
        {
            id: "clearAfterUpload",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe limpiar el input después de una carga exitosa.",
        },
        {
            id: "MAX_SIZE_FILE",
            type: "number",
            require: false,
            default: "5000000",
            description:
                "Tamaño máximo del archivo en bytes que se puede subir.",
        },
        {
            id: "parseProgress",
            type: "(progres: number) => any",
            require: false,
            default: "(e) => e",
            description: "Función para analizar el progreso de la carga.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el input de archivo está deshabilitado.",
        },
        {
            id: "textMaxSizeFile",
            type: "string",
            require: false,
            default: "'File max size'",
            description:
                "Texto que se muestra al superar el tamaño máximo permitido.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente principal.",
        },
        {
            id: "classNameLabel",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la etiqueta del componente.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenido del componente.",
        },
        {
            id: "classNameInput",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el input de archivo.",
        },
        {
            id: "classNameError",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el mensaje de error.",
        },
    ],
    useExample: [
        {
            text: "Selector de archivos con validación de tipo",
            content: `<InputFile accept={['jpg', 'png']} onChange={(file) => console.log(file)} />`,
        },
        {
            text: "Selector de archivos con tamaño máximo",
            content: `<InputFile MAX_SIZE_FILE={2000000} textMaxSizeFile="El archivo supera el límite de tamaño." onChange={(file) => console.log(file)} />`,
        },
        {
            text: "Selector de archivos deshabilitado",
            content: `<InputFile disabled={true} onChange={(file) => console.log(file)} />`,
        },
    ],
};
