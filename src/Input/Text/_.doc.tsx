export default {
    id: "input-text",
    idStorybook: "component-input-text",
    name: "InputText",
    description:
        "El componente InputText permite al usuario introducir texto en un campo de entrada. Es personalizable y se puede utilizar en formularios y otras interfaces de usuario donde se requiera la entrada de texto.",
    props: [
        {
            id: "id",
            type: "any",
            require: false,
            default: "''",
            description: "ID del campo de entrada.",
        },
        {
            id: "name",
            type: "any",
            require: false,
            default: "''",
            description: "Nombre del campo de entrada.",
        },
        {
            id: "datalist",
            type: "any",
            require: false,
            default: "undefined",
            description: "Nombre del datalist para el campo de entrada.",
        },
        {
            id: "validator",
            type: "FenextjsValidatorClass",
            require: false,
            default: "undefined",
            description:
                "Clase de validador de Fenextjs para la validación de la entrada.",
        },
        {
            id: "label",
            type: "any",
            require: false,
            default: "''",
            description:
                "Texto de etiqueta que se muestra para el campo de entrada.",
        },
        {
            id: "placeholder",
            type: "string",
            require: false,
            default: "''",
            description:
                "Texto que se muestra en el campo de entrada cuando está vacío.",
        },
        {
            id: "placeholderFocus",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Texto de marcador de posición que se muestra cuando el campo tiene foco.",
        },
        {
            id: "defaultValue",
            type: "string | undefined | null",
            require: false,
            default: "undefined",
            description:
                "Valor predeterminado para establecer en el campo de entrada.",
        },
        {
            id: "value",
            type: "string | undefined | null",
            require: false,
            default: "undefined",
            description: "Valor a establecer en el campo de entrada.",
        },
        {
            id: "type",
            type: "'text' | 'search' | 'tel' | 'url' | 'password' | 'number' | 'textarea'",
            require: false,
            default: "'text'",
            description:
                "Tipo de entrada del campo (texto, número, contraseña, etc.).",
        },
        {
            id: "onChange",
            type: "function",
            require: false,
            default: "() => {}",
            description:
                "Función que se llama cuando cambia el valor de entrada.",
        },
        {
            id: "onBlur",
            type: "function",
            require: false,
            default: "() => {}",
            description: "Función que se llama cuando el campo pierde el foco.",
        },
        {
            id: "onEnter",
            type: "function",
            require: false,
            default: "() => {}",
            description:
                "Función que se llama cuando se presiona la tecla Enter.",
        },
        {
            id: "onChangeValidate",
            type: "function",
            require: false,
            default: "async (e: string) => e",
            description:
                "Función para la validación personalizada de la entrada.",
        },
        {
            id: "props",
            type: "any",
            require: false,
            default: "undefined",
            description:
                "Propiedades adicionales para pasar al componente de entrada.",
        },
        {
            id: "icon",
            type: "any",
            require: false,
            default: "<></>",
            description: "Icono que se muestra dentro del campo de entrada.",
        },
        {
            id: "iconPos",
            type: "'left' | 'right'",
            require: false,
            default: "'right'",
            description: "Posición del icono dentro del campo de entrada.",
        },
        {
            id: "extraInContentInput",
            type: "any",
            require: false,
            default: "<></>",
            description:
                "Contenido adicional para mostrar dentro del contenedor del campo de entrada.",
        },
        {
            id: "extraInLabel",
            type: "any",
            require: false,
            default: "<></>",
            description:
                "Contenido adicional para mostrar dentro de la etiqueta del campo.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo de entrada está deshabilitado.",
        },
        {
            id: "showIcon",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se debe mostrar el icono en el campo de entrada.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el componente de entrada.",
        },
        {
            id: "error",
            type: "ErrorFenextjs",
            require: false,
            default: "undefined",
            description: "Texto de error del campo de entrada.",
        },
        {
            id: "errorWithIsChange",
            type: "boolean",
            require: false,
            default: "true",
            description: "Mostrar error si ha cambiado.",
        },
        {
            id: "optional",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo es opcional.",
        },
        {
            id: "optionalText",
            type: "string",
            require: false,
            default: "'(optional)'",
            description: "Texto opcional para el campo de entrada.",
        },
        {
            id: "required",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el campo es obligatorio.",
        },
        {
            id: "requiredText",
            type: "string",
            require: false,
            default: "'*'",
            description: "Texto para indicar que el campo es obligatorio.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si debe mostrarse un cargador.",
        },
        {
            id: "isChange",
            type: "boolean | undefined",
            require: false,
            default: "undefined",
            description: "Indica si el valor ha cambiado.",
        },
        {
            id: "useLoader",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si se debe usar el cargador.",
        },
        {
            id: "inputMode",
            type: "'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined",
            require: false,
            default: "undefined",
            description: "Modo de entrada del campo.",
        },
        {
            id: "autoComplete",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si se debe habilitar la autocompletación.",
        },
        {
            id: "onKeyDown",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función para manejar eventos de tecla presionada.",
        },
        {
            id: "onWheel",
            type: "function",
            require: false,
            default: "undefined",
            description: "Función para manejar eventos de rueda del mouse.",
        },
        {
            id: "maxLength",
            type: "number",
            require: false,
            default: "undefined",
            description: "Longitud máxima para el campo de entrada.",
        },
        {
            id: "regExp",
            type: "RegExp",
            require: false,
            default: "undefined",
            description: "Expresión regular para validar la entrada.",
        },
        {
            id: "regExpReplace",
            type: "string",
            require: false,
            default: "''",
            description: "Cadena de reemplazo para la expresión regular.",
        },
        {
            id: "parseText",
            type: "(data: string) => string",
            require: false,
            default: "undefined",
            description: "Función para analizar el texto de entrada.",
        },
        {
            id: "onChangeEvent",
            type: "(e: InputTextChangeEvent) => void",
            require: false,
            default: "undefined",
            description:
                "Función para manejar el evento de cambio del campo de entrada.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputText />`,
        },
        {
            text: "InputText con valor predeterminado",
            content: `<InputText defaultValue="Texto de ejemplo" />`,
        },
        {
            text: "InputText con placeholder",
            content: `<InputText placeholder="Escribe algo..." />`,
        },
        {
            text: "InputText deshabilitado",
            content: `<InputText disabled={true} />`,
        },
        {
            text: "InputText en estado de error",
            content: `<InputText error={new ErrorFenextjs({code: ErrorCode.ERROR, message: "Campo requerido"})} />`,
        },
        {
            text: "InputText con autocompletado",
            content: `<InputText autoComplete={true} />`,
        },
        {
            text: "InputText con expresión regular",
            content: `<InputText regExp={/^[a-zA-Z]*$/} regExpReplace="*" />`,
        },
        {
            text: "InputText con evento onKeyDown",
            content: `<InputText onKeyDown={(e) => console.log(e.key)} />`,
        },
        {
            text: "InputText con cargador",
            content: `<InputText loader={true} />`,
        },
    ],
};
