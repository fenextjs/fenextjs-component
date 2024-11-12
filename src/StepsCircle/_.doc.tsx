export default {
    id: "stepscircle",
    idStorybook: "component-stepscircle",
    name: "StepsCircle",
    description:
        "El componente StepsCircle presenta una serie de pasos circulares que se pueden recorrer, proporcionando opciones de personalización y control de pasos.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "items",
            type: "StepsCircleItemProps[]",
            require: false,
            default: "[]",
            description:
                "Lista de elementos de paso con contenido y funciones de click opcionales.",
        },
        {
            id: "defaultStep",
            type: "number",
            require: false,
            default: "undefined",
            description: "El paso que se mostrará inicialmente.",
        },
        {
            id: "valueStep",
            type: "number",
            require: false,
            default: "undefined",
            description: "Paso actual cuando se controla externamente.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita la interacción con el componente.",
        },
    ],
    extras: [
        {
            id: "StepsCircleItemProps",
            title: "StepsCircleItemProps",
            description: "Los items de step tienen su propios parametros:",
            tableItems: [
                {
                    Parametro: "children",
                    Tipo: "ReactNode",
                    Descripción: "Contenido del elemento.",
                },
                {
                    Parametro: "onClick",
                    Tipo: "function",
                    Descripción: "Funcion al hacer click en el elemento.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<StepsCircle 
    items={[
        { children: <div>Paso 1</div> }, 
        { children: <div>Paso 2</div> }
    ]}
/>`,
        },
        {
            text: "Con paso predeterminado",
            content: `<StepsCircle 
    items={[
        { children: <div>Inicio</div> }, 
        { children: <div>Fin</div> }
    ]} 
    defaultStep={0}
/>`,
        },
        {
            text: "Ejemplo con deshabilitación",
            content: `<StepsCircle 
    disabled={true}
    items={[{ children: <div>Paso deshabilitado</div> }]}
/>`,
        },
    ],
};
