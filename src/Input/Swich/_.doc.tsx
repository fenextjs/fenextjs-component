export default {
    id: "input-swich",
    idStorybook: "component-input-swich",
    name: "InputSwich",
    description: "El componente InputSwich permite crear un interruptor (switch) interactivo que los usuarios pueden alternar entre los estados activo e inactivo. Es altamente personalizable en términos de apariencia y comportamiento.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del interruptor.",
        },
        {
            id: "classNameCicle",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el círculo dentro del interruptor.",
        },
        {
            id: "classNameInactive",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el estado inactivo del interruptor.",
        },
        {
            id: "classNameActive",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el estado activo del interruptor.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description: "Nombre del interruptor que se usará como atributo del input.",
        },
        {
            id: "onChange",
            type: "(e: boolean) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el estado del interruptor cambia. Recibe un valor booleano que indica si está activado o desactivado.",
        },
        {
            id: "defaultValue",
            type: "boolean",
            require: false,
            default: "false",
            description: "Valor inicial del interruptor cuando se renderiza por primera vez.",
        },
        {
            id: "value",
            type: "boolean",
            require: false,
            default: "undefined",
            description: "Valor actual del interruptor, puede ser controlado externamente.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el interruptor está deshabilitado.",
        },
        {
            id: "onValidateCheck",
            type: "(data: boolean) => Promise<void | boolean> | void | boolean",
            require: false,
            default: "async () => {}",
            description: "Función para validar el estado del interruptor cuando se cambia. Puede devolver una promesa para manejar validaciones asíncronas.",
        }
    ],
    useExample: [
        {
            text: "InputSwich básico",
            content: `<InputSwich />`,
        },
        {
            text: "InputSwich con valor controlado",
            content: `<InputSwich value={true} onChange={(val) => console.log(val)} />`,
        },
        {
            text: "InputSwich deshabilitado",
            content: `<InputSwich disabled={true} />`,
        },
        {
            text: "InputSwich con validación",
            content: `<InputSwich onValidateCheck={async (val) => { return val; }} />`,
        }
    ]
};
