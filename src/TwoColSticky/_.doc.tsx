export default {
    id: "two-col-sticky",
    idStorybook: "component-two-col-sticky",
    name: "TwoColSticky",
    description:
        "El componente TwoColSticky crea una disposición de dos columnas, donde una columna es fija (sticky) y la otra es desplazable. Se puede personalizar la posición de la columna sticky, y las clases CSS para cada sección.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal del componente.",
        },
        {
            id: "classNameChildren",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para la columna desplazable del componente.",
        },
        {
            id: "classNameColSticky",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para la columna sticky del componente.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido que se mostrará en la columna desplazable.",
        },
        {
            id: "colSticky",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido que se mostrará en la columna sticky.",
        },
        {
            id: "posCol",
            type: "'left' | 'right'",
            require: false,
            default: "'left'",
            description: "Posición de la columna sticky en el componente.",
        },
    ],
    useExample: [
        {
            text: "TwoColSticky básico",
            content: `<TwoColSticky colSticky={<div>Sticky Content</div>}>Scrollable Content</TwoColSticky>`,
        },
        {
            text: "TwoColSticky con columna sticky a la derecha",
            content: `<TwoColSticky colSticky={<div>Sticky Content</div>} posCol="right">Scrollable Content</TwoColSticky>`,
        },
        {
            text: "TwoColSticky con clases personalizadas",
            content: `<TwoColSticky colSticky={<div>Sticky Content</div>} className="custom-container" classNameChildren="custom-children" classNameColSticky="custom-sticky">Scrollable Content</TwoColSticky>`,
        },
    ],
};
