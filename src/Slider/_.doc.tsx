export default {
    id: "slider",
    idStorybook: "component-slider",
    name: "Slider",
    description: "El componente Slider permite crear un carrusel de elementos con opciones de personalización de cantidad de ítems visibles, tiempo de animación y bucle automático. Incluye controles de navegación y estilos personalizados.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor principal del componente Slider.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de contenido del slider.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar cada ítem dentro del slider.",
        },
        {
            id: "classNameDogs",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor de elementos de slider.",
        },
        {
            id: "classNameDog",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar un elemento individual dentro del contenedor de slider.",
        },
        {
            id: "classNameArrows",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar las flechas de navegación del slider.",
        },
        {
            id: "classNameArrowPre",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la flecha de navegación anterior.",
        },
        {
            id: "classNameArrowNext",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la flecha de navegación siguiente.",
        },
        {
            id: "items",
            type: "ReactNode[]",
            require: false,
            default: "[]",
            description: "Arreglo de elementos que se mostrarán dentro del slider.",
        },
        {
            id: "nItemsDesktop",
            type: "number",
            require: false,
            default: "3",
            description: "Número de elementos visibles en pantallas de escritorio.",
        },
        {
            id: "nItemsTable",
            type: "number",
            require: false,
            default: "2",
            description: "Número de elementos visibles en pantallas de tabletas.",
        },
        {
            id: "nItemsPhone",
            type: "number",
            require: false,
            default: "1",
            description: "Número de elementos visibles en pantallas de teléfonos.",
        },
        {
            id: "timeDelay",
            type: "number",
            require: false,
            default: "4000",
            description: "Tiempo de espera en milisegundos antes de avanzar automáticamente al siguiente ítem.",
        },
        {
            id: "timeAnimation",
            type: "number",
            require: false,
            default: "500",
            description: "Duración de la animación en milisegundos para mover el slider.",
        },
        {
            id: "loop",
            type: "boolean",
            require: false,
            default: "true",
            description: "Determina si el slider se reproduce en bucle o se detiene al final.",
        },
        {
            id: "separationItems",
            type: "number",
            require: false,
            default: "16",
            description: "Espacio de separación en píxeles entre cada ítem del slider.",
        }
    ],
    useExample: [
        {
            text: "Uso básico del Slider",
            content: `<Slider items={[<Item1 />, <Item2 />, <Item3 />]} />`
        },
        {
            text: "Slider con 4 ítems en escritorio y 2 en tablet",
            content: `<Slider nItemsDesktop={4} nItemsTable={2} />`
        },
        {
            text: "Slider con animación de 1 segundo y sin bucle",
            content: `<Slider timeAnimation={1000} loop={false} />`
        },
        {
            text: "Slider con espacio de separación de 32px entre ítems",
            content: `<Slider separationItems={32} />`
        }
    ]
};
