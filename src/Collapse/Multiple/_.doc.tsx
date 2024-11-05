export default {
    id: "collapse-multiple",
    minHeightIframe: "50vh",
    idStorybook: "component-collapse-multiple",
    name: "CollapseMultiple",
    description:
        "El componente CollapseMultiple permite mostrar múltiples elementos de Collapse organizados, con soporte para múltiples tipos de colapso (radio o checkbox) y control sobre los estados activos por defecto.",
    props: [
        {
            id: "items",
            type: "Omit<CollapseBaseProps, 'checkbox' | 'name' | 'id'>[]",
            require: false,
            default: "[]",
            description:
                "Lista de items que se mostrarán como componentes Collapse dentro de CollapseMultiple.",
        },
        {
            id: "defaultActive",
            type: "number | number[]",
            require: false,
            default: "[]",
            description:
                "Índice(s) de los elementos que estarán activados por defecto.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: "''",
            description:
                "Nombre del conjunto de Collapse, utilizado para agrupar los items.",
        },
        {
            id: "type",
            type: "'radio' | 'checkbox'",
            require: false,
            default: "'checkbox'",
            description:
                "Determina si los items se comportarán como un conjunto de tipo 'radio' o 'checkbox'.",
        },
        {
            id: "useActiveForShowChildren",
            type: "boolean",
            require: false,
            description:
                "Si está habilitado, el contenido solo se mostrará cuando los elementos de Collapse estén activos.",
        },
        {
            id: "classNameMultiple",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenedor del componente CollapseMultiple.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para cada elemento Collapse dentro de CollapseMultiple.",
        },
    ],
    useExample: [
        {
            text: "CollapseMultiple básico con varios Collapse",
            content: `<CollapseMultiple 
    items={[
        { header: <h3>Encabezado 1</h3>, children: "Contenido del collapse 1" },
        { header: <h3>Encabezado 2</h3>, children: "Contenido del collapse 2" },
    ]}
/>`,
        },
        {
            text: "CollapseMultiple con estado de 'radio'",
            content: `<CollapseMultiple 
    type="radio"
    items={[
        { header: <h3>Encabezado 1</h3>, children: "Contenido del collapse 1" },
        { header: <h3>Encabezado 2</h3>, children: "Contenido del collapse 2" },
    ]}
/>`,
        },
        {
            text: "CollapseMultiple con varios activos por defecto",
            content: `<CollapseMultiple 
    defaultActive={[0, 1]}
    items={[
        { header: <h3>Encabezado 1</h3>, children: "Contenido del collapse 1" },
        { header: <h3>Encabezado 2</h3>, children: "Contenido del collapse 2" },
    ]}
/>`,
        },
    ],
};
