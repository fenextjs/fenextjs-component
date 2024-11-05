export default {
    id: "button-menu",
    idStorybook: "component-button-menu",
    name: "ButtonMenu",
    description:
        "El componente ButtonMenu proporciona un botón interactivo con un menú desplegable que puede personalizarse con iconos, clases CSS, y configurarse para mostrarse por defecto o estar deshabilitado. También tiene la capacidad de mostrar un indicador de carga.",
    props: [
        {
            id: "loader",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si el componente está en estado de carga, mostrando un indicador de carga (spinner) y deshabilitando su funcionalidad.",
        },
        {
            id: "disabled",
            type: "boolean",
            require: false,
            default: "false",
            description: "Desactiva el botón del menú.",
        },
        {
            id: "defaultActive",
            type: "boolean",
            require: false,
            default: "true",
            description: "Determina si el menú está activo por defecto o no.",
        },
        {
            id: "target",
            type: "string",
            require: false,
            default: "'fenext-btn-menu-checkbox'",
            description: "ID objetivo del checkbox asociado al botón del menú.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del menú.",
        },
        {
            id: "classNameIcon",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el icono del menú.",
        },
        {
            id: "classNameIconBarClose",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar la barra de cierre del icono.",
        },
        {
            id: "classNameContent",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenido del menú desplegable.",
        },
    ],
    extras: [
        {
            id: "funcionalidad-adicional",
            title: "Funcionalidad adicional",
            description:
                "Este componente incluye un comportamiento reactivo que ajusta la visualización del menú en función del tamaño de la ventana del navegador.",
            tableItems: [
                {
                    Propiedad: "defaultActive",
                    Uso: "Determina si el menú se muestra activo por defecto.",
                    Descripción:
                        "El menú se mostrará activado si el ancho de la ventana es mayor a 575px al cargar la página.",
                },
                {
                    Propiedad: "loader",
                    Uso: "Muestra un indicador de carga en lugar del contenido del menú.",
                    Descripción:
                        "Cuando 'loader' está en 'true', el componente muestra un spinner en lugar del contenido del menú.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Uso básico",
            content: `<ButtonMenu>Contenido del menú</ButtonMenu>`,
        },
        {
            text: "Menú con estado de carga",
            content: `<ButtonMenu loader={true} />`,
        },
        {
            text: "Menú deshabilitado",
            content: `<ButtonMenu disabled={true} />`,
        },
        {
            text: "Menú con clases personalizadas",
            content: `<ButtonMenu className="mi-menu" classNameIcon="mi-icono" classNameContent="mi-contenido">Contenido</ButtonMenu>`,
        },
    ],
};
