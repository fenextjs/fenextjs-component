export default {
    id: "dropdown",
    idStorybook: "component-dropdown",
    name: "DropDown",
    description:
        "El componente DropDown proporciona un menú desplegable ajustable que puede cambiar su posición según el espacio disponible alrededor del contenedor.",
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
                "Determina si el DropDown estará activado de manera predeterminada.",
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
                "Estado del DropDown, puede ser 'none', 'error' o 'ok'.",
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
                "Controla cómo se muestra el contenido del DropDown, ya sea cuando está 'checked' o 'focus'.",
        },
        {
            id: "header",
            type: "ReactNode",
            require: true,
            description: "El contenido del encabezado del DropDown.",
        },
        {
            id: "onChange",
            type: "(value: boolean) => void",
            require: false,
            description:
                "Función que se ejecuta cuando el estado activo del DropDown cambia.",
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
                "Indica si el ícono debe rotar al expandirse el DropDown.",
        },
        {
            id: "useActiveForShowChildren",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Si está habilitado, el contenido solo se mostrará cuando el DropDown esté activo.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            description: "El contenido dentro del cuerpo del DropDown.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el componente DropDown.",
        },
        {
            id: "classNameHeader",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el encabezado del DropDown.",
        },
        {
            id: "classNameHeaderContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el contenido del encabezado del DropDown.",
        },
        {
            id: "classNameHeaderIcon",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS personalizada para el ícono del encabezado del DropDown.",
        },
        {
            id: "classNameBody",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el cuerpo del DropDown.",
        },
        {
            id: "classNameDropDown",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del DropDown.",
        },
    ],
    extras: [
        {
            id: "ajustes_espaciales",
            title: "Ajustes Espaciales",
            description:
                "El componente DropDown ajusta su posición automáticamente según el espacio disponible en su contenedor. Los posibles ajustes son:",
            tableItems: [
                {
                    Dirección: "left",
                    Descripcion:
                        "El DropDown se alinea a la izquierda si hay más espacio disponible.",
                },
                {
                    Dirección: "right",
                    Descripcion:
                        "El DropDown se alinea a la derecha si hay más espacio disponible.",
                },
                {
                    Dirección: "up",
                    Descripcion:
                        "El DropDown se despliega hacia arriba si hay más espacio disponible arriba.",
                },
                {
                    Dirección: "down",
                    Descripcion:
                        "El DropDown se despliega hacia abajo si hay más espacio disponible abajo.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<DropDown>Contenido desplegable</DropDown>`,
        },
        {
            text: "DropDown siempre visible",
            content: `<DropDown show="always">Contenido siempre visible</DropDown>`,
        },
    ],
};
