export default {
    id: "input-radio",
    idStorybook: "input-inputradio",
    name: "InputRadio",
    description:
        "El componente InputRadio permite renderizar un conjunto de radios personalizados, que pueden incluir etiquetas, íconos y diversos estilos basados en su estado (activo/inactivo). Este componente es útil para permitir al usuario seleccionar una opción de un grupo predefinido.",
    props: [
        {
            id: "items",
            type: "InputRadioItemProps<T>[]",
            require: false,
            default: "[]",
            description:
                "Lista de elementos del radio. Cada elemento contiene un id, etiqueta y datos opcionales.",
        },
        {
            id: "labelPosition",
            type: "'right' | 'left'",
            require: false,
            default: "'right'",
            description:
                "Posición de la etiqueta en relación con el radio (a la derecha o izquierda).",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description:
                "El atributo 'name' del elemento radio. Útil para agrupar radios con el mismo nombre.",
        },
        {
            id: "onChange",
            type: "(e: InputRadioItemProps<T>) => void",
            require: false,
            default: "(e) => env_log(e, { name: 'input radio onchange' })",
            description:
                "Función que se ejecuta al cambiar el estado del radio. Recibe el elemento seleccionado como parámetro.",
        },
        {
            id: "defaultValue",
            type: "InputRadioItemProps<T>",
            require: false,
            default: "undefined",
            description:
                "Valor por defecto del radio al renderizarlo por primera vez.",
        },
        {
            id: "value",
            type: "InputRadioItemProps<T>",
            require: false,
            default: "undefined",
            description:
                "El valor actual del radio. Controla qué elemento está seleccionado.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el grupo de radios está deshabilitado, evitando que los usuarios seleccionen una opción.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor general del radio.",
        },
        {
            id: "classNameLabel",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la etiqueta del radio.",
        },
        {
            id: "classNameLabelActive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para la etiqueta cuando el radio está activo.",
        },
        {
            id: "classNameLabelInactive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para la etiqueta cuando el radio está inactivo.",
        },
        {
            id: "classNameText",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el texto junto al radio.",
        },
        {
            id: "classNameContentRadio",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el contenedor del radio.",
        },
        {
            id: "classNameContentRadioActive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor del radio cuando está activo.",
        },
        {
            id: "classNameContentRadioInactive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el contenedor del radio cuando está inactivo.",
        },
        {
            id: "classNameRadio",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para el elemento input radio.",
        },
        {
            id: "classNameRadioActive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el elemento input radio cuando está activo.",
        },
        {
            id: "classNameRadioInactive",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para el elemento input radio cuando está inactivo.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "<Check />",
            description:
                "Icono que se muestra junto al radio cuando está activo.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<InputRadio items={[{ id: '1', label: 'Opción 1' }, { id: '2', label: 'Opción 2' }]} />`,
        },
        {
            text: "Radio con icono",
            content: `<InputRadio items={[{ id: '1', label: 'Opción 1' }, { id: '2', label: 'Opción 2' }]} icon={<Check />} />`,
        },
        {
            text: "Radio deshabilitado",
            content: `<InputRadio items={[{ id: '1', label: 'Opción 1' }]} disabled={true} />`,
        },
        {
            text: "Radio con onChange",
            content: `<InputRadio items={[{ id: '1', label: 'Opción 1' }]} onChange={(item) => console.log(item)} />`,
        },
    ],
};
