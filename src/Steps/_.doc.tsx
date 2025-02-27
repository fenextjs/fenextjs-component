export default {
    id: "steps",
    idStorybook: "component-steps",
    name: "Steps",
    description:
        "El componente Steps proporciona una interfaz para mostrar y navegar entre pasos en un proceso secuencial, permitiendo personalizar el contenido, la navegación y la apariencia de cada paso.",
    props: [
        {
            id: "items",
            type: "StepsItemProps[]",
            require: true,
            default: "[]",
            description:
                "Los elementos que representan cada paso, incluyendo el contenido, etiqueta, ícono y estado del paso.",
        },
        {
            id: "defaultStep",
            type: "number",
            require: false,
            default: "0",
            description: "El paso mostrado inicialmente.",
        },
        {
            id: "step",
            type: "number",
            require: false,
            default: "undefined",
            description: "Define manualmente el paso mostrado.",
        },
        {
            id: "useArrowKey",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Indica si se pueden usar las teclas de flecha para navegar entre los pasos.",
        },
        {
            id: "btnPrev",
            type: "ReactNode",
            require: false,
            default: '"Previous"',
            description: "Contenido del botón de retroceso.",
        },
        {
            id: "btnNext",
            type: "ReactNode",
            require: false,
            default: '"Next"',
            description: "Contenido del botón de avance.",
        },
        {
            id: "disabledBtnPrev",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita el botón de retroceso.",
        },
        {
            id: "disabledBtnNext",
            type: "boolean",
            require: false,
            default: "false",
            description: "Deshabilita el botón de avance.",
        },
        {
            id: "onPrev",
            type: "(step: number) => Promise<void> | void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al hacer click en el botón de retroceso.",
        },
        {
            id: "onNext",
            type: "(step: number) => Promise<void> | void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al hacer click en el botón de avance.",
        },

        {
            id: "onPrevDisabled",
            type: "() =>  void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al hacer click en el botón de retroceso cuando esta deshabilitado.",
        },
        {
            id: "onNextDisabled",
            type: "() =>  void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al hacer click en el botón de avance cuando esta deshabilitado.",
        },
        {
            id: "onSetStep",
            type: "(step: number) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta al establecer un nuevo paso.",
        },
        {
            id: "stepPos",
            type: "'top' | 'left' | 'right'",
            require: false,
            default: "'left'",
            description: "Posición de la lista de pasos.",
        },
        {
            id: "showCurrentStepNStep",
            type: "boolean",
            require: false,
            default: "false",
            description: "Muestra el paso actual junto al total de pasos.",
        },
        {
            id: "useDogs",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Indica si se debe utilizar un comportamiento especial (documentación adicional requerida).",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor del componente.",
        },
        {
            id: "classNameContentSteps",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el contenedor de los pasos.",
        },
        {
            id: "classNameListSteps",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para la lista de pasos.",
        },
        {
            id: "classNameContentItems",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para los elementos de contenido.",
        },
        {
            id: "classNameStep",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para cada paso.",
        },
        {
            id: "classNameStepActive",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el paso activo.",
        },
        {
            id: "classNameItem",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para cada ítem.",
        },
        {
            id: "classNameItemActive",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el ítem activo.",
        },
        {
            id: "classNameStepCircle",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el círculo del paso.",
        },
        {
            id: "classNameStepLabel",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para la etiqueta del paso.",
        },
        {
            id: "classNameContentBtn",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el contenedor de los botones de navegación.",
        },
        {
            id: "classNameBtn",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para los botones de navegación.",
        },
        {
            id: "classNameBtnDisabled",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para los botones de navegación cuando esten deshabilitados.",
        },
        {
            id: "classNameBtnNext",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el botón de avance.",
        },
        {
            id: "classNameBtnNextDisabled",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el botón de avance cuando este deshabilitado.",
        },
        {
            id: "classNameBtnPrev",
            type: "string",
            require: false,
            default: '""',
            description: "Clase CSS para el botón de retroceso.",
        },
        {
            id: "classNameBtnPrevDisabled",
            type: "string",
            require: false,
            default: '""',
            description:
                "Clase CSS para el botón de retroceso cuando este deshabilitado.",
        },
        {
            id: "forceShowBtnPrev",
            type: "boolean",
            require: false,
            default: "false",
            description: "Fuerza la visibilidad del botón de retroceso.",
        },
        {
            id: "forceShowBtnNext",
            type: "boolean",
            require: false,
            default: "false",
            description: "Fuerza la visibilidad del botón de avance.",
        },
    ],
    extras: [
        {
            id: "StepsItemProps",
            title: "StepsItemProps",
            description: "Los items de step tienen su propios parametros:",
            tableItems: [
                {
                    Parametro: "label",
                    Tipo: "ReactNode",
                    Descripción: "Label del elemento.",
                },
                {
                    Parametro: "icon",
                    Tipo: "ReactNode",
                    Descripción: "Icon del elemento.",
                },
                {
                    Parametro: "content",
                    Tipo: "ReactNode",
                    Descripción: "Contenido del elemento.",
                },
                {
                    Parametro: "status",
                    Tipo: `"none" | "ok" | "error"`,
                    Descripción: "Estatus del elemento.",
                },
            ],
        },
    ],
    useExample: [
        {
            text: "Ejemplo básico",
            content: `<Steps items={[{ label: "Paso 1", content: <div>Contenido del Paso 1</div> }]} />`,
        },
        {
            text: "Ejemplo con pasos personalizados",
            content: `<Steps items={[{ label: "Inicio", content: <div>Contenido Inicio</div> }, { label: "Fin", content: <div>Contenido Fin</div> }]} stepPos="top" />`,
        },
        {
            text: "Con botones deshabilitados",
            content: `<Steps disabledBtnPrev={true} disabledBtnNext={true} />`,
        },
    ],
};
