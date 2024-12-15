export default {
    id: "dropdown",
    idStorybook: "component-dropdown",
    name: "DropDown",
    description:
        "El componente DropDown es un desplegable interactivo que permite mostrar u ocultar contenido adicional mediante interacciones como clics o estados activos.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el contenedor principal del componente DropDown.",
        },
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description: "Indica si el componente está en estado de carga, mostrando un indicador de 'Loader'.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Determina si el componente DropDown está deshabilitado.",
        },
        {
            id: "defaultActive",
            type: "boolean",
            require: false,
            default: "false",
            description: "Establece si el DropDown está activo de forma predeterminada al renderizarse.",
        },
        {
            id: "active",
            type: "boolean",
            require: false,
            default: "undefined",
            description: "Controla de manera explícita si el DropDown está activo o inactivo.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "undefined",
            description: "Nombre asignado al DropDown, utilizado para manejar eventos de interacción.",
        },
        {
            id: "header",
            type: "ReactNode",
            require: true,
            default: "undefined",
            description: "Elemento que se muestra como cabecera del DropDown.",
        },
        {
            id: "onChange",
            type: "(value: boolean) => void",
            require: false,
            default: "undefined",
            description: "Función ejecutada al cambiar el estado activo del DropDown.",
        },
        {
            id: "iconArrow",
            type: "ReactNode",
            require: false,
            default: "<SvgArrow />",
            description: "Icono utilizado como indicador de colapso/expansión del DropDown.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido adicional mostrado dentro del cuerpo del DropDown.",
        },
        {
            id: "rotateIcon",
            type: "boolean",
            require: false,
            default: "true",
            description: "Indica si el icono debe rotar al cambiar el estado activo.",
        },
        {
            id: "type",
            type: "'checked' | 'focus'",
            require: false,
            default: "'focus'",
            description: "Define el tipo de interacción que activa el DropDown.",
        },
    ],
    extras: [
        {
            id: "interacciones",
            title: "Interacciones",
            description:
                "El comportamiento del DropDown está configurado por las propiedades `type` y `onChange`, permitiendo manejar eventos personalizados y estilos dinámicos.",
        },
        {
            id: "NOTA",
            title: "__NOTA__",
            description:
                "Para que el tipo `focus` funcione correctamente, es necesario que el evento global de clic esté vinculado al componente, asegurándose de que las interacciones externas cierren el DropDown automáticamente.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<DropDown header={<span>Menú</span>}>Contenido</DropDown>`,
        },
        {
            text: "DropDown con estado activo por defecto",
            content: `<DropDown defaultActive={true} header={<span>Activo</span>}>Contenido Activo</DropDown>`,
        },
        {
            text: "DropDown deshabilitado",
            content: `<DropDown disabled={true} header={<span>Deshabilitado</span>} />`,
        },
        {
            text: "DropDown con icono personalizado",
            content: `<DropDown iconArrow={<CustomIcon />} header={<span>Personalizado</span>}>Contenido</DropDown>`,
        },
        {
            text: "DropDown usando useActionDropDown",
            content: `const {onActive,onClose,onToogle} = useActionDropDown({name:"NAME_DROPDOWN"})
<Button onClick={onToogle}>onToogle</Button>
<Button onClick={onActive}>onActive</Button>
<Button onClick={onClose}>onClose</Button>
<DropDown name="NAME_DROPDOWN"  header={<span>Personalizado</span>}>Contenido</DropDown>`,
        },
    ],
};
