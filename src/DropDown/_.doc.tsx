export default {
    id: "dropdown",
    idStorybook: "component-dropdown",
    name: "DropDown",
    description: "El componente DropDown proporciona un menú desplegable ajustable que puede cambiar su posición según el espacio disponible alrededor del contenedor.",
    props: [
        {
            id: "show",
            type: "'focus' | 'click' | 'always'",
            require: false,
            default: "'focus'",
            description: "Controla cuándo se muestra el menú desplegable.",
        },
        {
            id: "classNameDropDown",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del DropDown.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description: "Contenido que se muestra dentro del menú desplegable.",
        }
    ],
    extras: [
        {
            id: "ajustes_espaciales",
            title: "Ajustes Espaciales",
            description: "El componente DropDown ajusta su posición automáticamente según el espacio disponible en su contenedor. Los posibles ajustes son:",
            tableItems: [
                {
                    "Dirección": "left",
                    Descripcion: "El DropDown se alinea a la izquierda si hay más espacio disponible.",
                },
                {
                    "Dirección": "right",
                    Descripcion: "El DropDown se alinea a la derecha si hay más espacio disponible.",
                },
                {
                    "Dirección": "up",
                    Descripcion: "El DropDown se despliega hacia arriba si hay más espacio disponible arriba.",
                },
                {
                    "Dirección": "down",
                    Descripcion: "El DropDown se despliega hacia abajo si hay más espacio disponible abajo.",
                }
            ]
        }
    ],
    useExample: [
        {
            text: "Básico",
            content: `<DropDown>Contenido desplegable</DropDown>`
        },
        {
            text: "DropDown siempre visible",
            content: `<DropDown show="always">Contenido siempre visible</DropDown>`
        }
    ]
};
