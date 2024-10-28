export default {
    id: "collapse",
    idStorybook: "component-collapse",
    name: "Collapse",
    description:
        "El componente Collapse permite mostrar u ocultar contenido dentro de un contenedor colapsable con opciones de personalización como control de estado activo, íconos, y estados de carga.",
    props: [
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando un ícono de cargando.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si el componente está deshabilitado, evitando que el usuario lo pueda interactuar.",
        },
        {
            id: "defaultActive",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si el Collapse estará activado de manera predeterminada.",
        },
        {
            id: "active",
            type: "boolean",
            require: false,
            default: "undefined",
            description: "Estado activo controlado externamente.",
        },
        {
            id: "id",
            type: "string",
            require: false,
            description: "ID único del componente.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description: "Nombre del componente.",
        },
        {
            id: "status",
            type: "'none' | 'error' | 'ok'",
            require: false,
            default: "'none'",
            description:
                "Estado del Collapse, puede ser 'none', 'error' o 'ok'.",
        },
        {
            id: "type",
            type: "'radio' | 'checkbox'",
            require: false,
            default: "'checkbox'",
            description:
                "Define el tipo de interacción del componente, ya sea tipo 'radio' o 'checkbox'.",
        },
        {
            id: "show",
            type: "'checked' | 'focus'",
            require: false,
            default: "'checked'",
            description:
                "Controla cómo se muestra el contenido del Collapse, ya sea cuando está 'checked' o 'focus'.",
        },
        {
            id: "header",
            type: "ReactNode",
            require: true,
            description: "El contenido del encabezado del Collapse.",
        },
        {
            id: "onChange",
            type: "(value: boolean) => void",
            require: false,
            description:
                "Función que se ejecuta cuando el estado activo del Collapse cambia.",
        },
        {
            id: "iconArrow",
            type: "ReactNode",
            require: false,
            default: "<Arrow />",
            description: "Ícono que se mostrará como la flecha de colapso.",
        },
        {
            id: "rotateIcon",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si el ícono debe rotar al expandirse el Collapse.",
        },
        {
            id: "useActiveForShowChildren",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Si está habilitado, el contenido solo se mostrará cuando el Collapse esté activo.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            description: "El contenido dentro del cuerpo del Collapse.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el componente Collapse.",
        },
        {
            id: "classNameHeader",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el encabezado del Collapse.",
        },
        {
            id: "classNameHeaderContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenido del encabezado del Collapse.",
        },
        {
            id: "classNameHeaderIcon",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el ícono del encabezado del Collapse.",
        },
        {
            id: "classNameBody",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el cuerpo del Collapse.",
        },
    ],
    useExample: [
        {
            text: "Collapse básico",
            content: `<Collapse header={<h3>Encabezado</h3>}>Contenido del collapse</Collapse>`,
        },
        {
            text: "Collapse con estado de carga",
            content: `<Collapse header={<h3>Encabezado</h3>} loader={true}>Cargando...</Collapse>`,
        },
        {
            text: "Collapse controlado externamente",
            content: `
const [active, setActive] = useState(false);
<Collapse 
    header={<h3>Encabezado</h3>} 
    active={active}
    onChange={(value) => setActive(value)}
>
    Contenido controlado
</Collapse>`,
        },
    ],
};
