export default {
    id: "chronological-list",
    idStorybook: "component-chronological-list",
    name: "ChronologicalList",
    description:
        "El componente ChronologicalList organiza elementos de forma cronológica, agrupándolos por fecha y hora. Permite personalizar el formato de la fecha y la hora, así como agregar contenido adicional para cada elemento.",
    props: [
        {
            id: "items",
            type: "ChronologicalListItemsProps[]",
            require: true,
            default: "undefined",
            description:
                "Lista de elementos que se mostrarán en la lista cronológica, cada uno con su respectiva fecha, contenido y posible personalización.",
        },
        {
            id: "market",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Contenido personalizado que se mostrará junto a cada elemento como marcador. Puede ser un ícono, texto o cualquier otro nodo.",
        },
        {
            id: "parseDateYYYYMMDD",
            type: "(date: Date) => string",
            require: false,
            default: "parseDateYYYYMMDD",
            description:
                "Función para parsear la fecha en el formato 'YYYY-MM-DD'.",
        },
        {
            id: "parseDateHHMMSS",
            type: "(date: Date) => string",
            require: false,
            default: "getTimeToText",
            description:
                "Función para parsear la hora en el formato 'HH:MM:SS'.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el componente.",
        },
    ],
    extras: [
        {
            id: "formato-fecha-hora",
            title: "Formato de Fecha y Hora",
            description:
                "El componente permite personalizar el formato de la fecha y hora utilizando las funciones `parseDateYYYYMMDD` y `parseDateHHMMSS`. Si no se proporcionan, se utilizan las funciones por defecto.",
        },
    ],
    useExample: [
        {
            text: "Lista cronológica básica",
            content: `
<ChronologicalList
    items={[
        { date: new Date(), children: "Elemento 1" },
        { date: new Date(), children: "Elemento 2" },
    ]}
/>`,
        },
        {
            text: "Lista cronológica con marcador personalizado",
            content: `
<ChronologicalList
    items={[
        { date: new Date(), children: "Elemento 1", market: <span>🌟</span> },
        { date: new Date(), children: "Elemento 2" },
    ]}
    market={<span>🔔</span>}
/>`,
        },
        {
            text: "Lista cronológica con formato de fecha personalizado",
            content: `
<ChronologicalList
    items={[
        { date: new Date(), children: "Evento importante" },
    ]}
    parseDateYYYYMMDD={(date) => date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
/>`,
        },
    ],
};
