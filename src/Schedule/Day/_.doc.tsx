export default {
    id: "schedule-day",
    idStorybook: "component-schedule-day",
    name: "ScheduleDay",
    description: "El componente ScheduleDay permite a los usuarios seleccionar un rango de fechas para un día específico y añade múltiples intervalos de tiempo si es necesario. Utiliza el componente InputDateRange para manejar los intervalos de fecha/hora.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente ScheduleDay.",
        },
        {
            id: "defaultValue",
            type: "ScheduleDayValueType",
            require: false,
            default: "[[undefined, undefined]]",
            description: "Valor inicial del campo de entrada, representado como un array de rangos de fechas.",
        },
        {
            id: "value",
            type: "ScheduleDayValueType",
            require: false,
            default: "undefined",
            description: "Valor actual del campo de entrada, usado para el control del componente desde el exterior.",
        },
        {
            id: "onChange",
            type: "(v: ScheduleDayValueType) => void",
            require: false,
            default: "N/A",
            description: "Función callback para manejar cambios en el valor del campo de entrada.",
        },
        {
            id: "ButtonProps",
            type: "Omit<ButtonProps, 'onClick'>",
            require: false,
            default: "{ children: 'Add Time Range' }",
            description: "Props para personalizar el botón que añade nuevos intervalos de tiempo.",
        },
        {
            id: "propsStart",
            type: "InputDateRangeBaseProps",
            require: false,
            default: "{ label: 'Start time', placeholder: 'Start time' }",
            description: "Props específicos para el campo de hora de inicio del rango de fecha.",
        },
        {
            id: "propsEnd",
            type: "InputDateRangeBaseProps",
            require: false,
            default: "{ label: 'Final hour', placeholder: 'Final hour' }",
            description: "Props específicos para el campo de hora de fin del rango de fecha.",
        }
    ],
    useExample: [
        {
            text: "Uso básico del ScheduleDay",
            content: `<ScheduleDay onChange={(value) => console.log(value)} />`
        },
        {
            text: "ScheduleDay con valor predeterminado",
            content: `<ScheduleDay defaultValue={[[new Date(2023, 0, 1), new Date(2023, 0, 2)]]} />`
        },
        {
            text: "ScheduleDay con botón personalizado",
            content: `<ScheduleDay ButtonProps={{ children: "Añadir rango de tiempo", className: "mi-clase-boton" }} />`
        }
    ]
};
