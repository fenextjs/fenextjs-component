export default {
    id: "swichviewlist",
    idStorybook: "component-swichviewlist",
    name: "SwichViewList",
    description:
        "El componente SwichViewList permite al usuario alternar entre diferentes vistas o ítems mediante una lista de opciones visuales, cada una identificada por un ícono y un identificador único.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "defaultValue",
            type: "T",
            require: false,
            default: "undefined",
            description: "Valor predeterminado de la opción seleccionada.",
        },
        {
            id: "onChange",
            type: "(e?: T) => void",
            require: false,
            default: "undefined",
            description:
                "Función de cambio que se ejecuta al seleccionar una nueva opción.",
        },
        {
            id: "list",
            type: "{ id: T; icon: ReactNode; }[]",
            require: false,
            default: "[]",
            description:
                "Lista de ítems con íconos y identificadores únicos para cada opción.",
        },
        {
            id: "name",
            type: "string",
            require: false,
            default: '"fenext-swich-view"',
            description:
                "Nombre del grupo de opciones, útil para identificación en formularios.",
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<SwichViewList list={[{ id: "1", icon: <Icon1 /> }, { id: "2", icon: <Icon2 /> }]} />`,
        },
        {
            text: "Con valor predeterminado y función de cambio",
            content: `<SwichViewList defaultValue="1" onChange={(e) => console.log("Seleccionado:", e)} list={[{ id: "1", icon: <Icon1 /> }, { id: "2", icon: <Icon2 /> }]} />`,
        },
        {
            text: "Uso en un formulario",
            content: `<SwichViewList name="viewSwitch" list={[{ id: "grid", icon: <GridIcon /> }, { id: "list", icon: <ListIcon /> }]} />`,
        },
    ],
};
