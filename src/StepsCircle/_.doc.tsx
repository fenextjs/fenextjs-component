export default {
    id: "stepscircle",
    idStorybook: "component-stepscircle",
    name: "StepsCircle",
    description: "El componente StepsCircle presenta una serie de pasos circulares que se pueden recorrer, proporcionando opciones de personalización y control de pasos.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "items",
            type: "{ children?: ReactNode; onClick?: () => void; }[]",
            require: false,
            default: "[]",
            description: "Lista de elementos de paso con contenido y funciones de clic opcionales.",
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
            id: "disable",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita la interacción con el componente.",
        }
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<StepsCircle items={[{ children: <div>Paso 1</div> }, { children: <div>Paso 2</div> }]} />`
        },
        {
            text: "Con paso predeterminado",
            content: `<StepsCircle items={[{ children: <div>Inicio</div> }, { children: <div>Fin</div> }]} defaultStep={0} />`
        },
        {
            text: "Ejemplo con deshabilitación",
            content: `<StepsCircle disable={true} items={[{ children: <div>Paso deshabilitado</div> }]} />`
        }
    ]
};
