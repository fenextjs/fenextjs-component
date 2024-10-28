export default {
    id: "schedule-weekly",
    idStorybook: "component-schedule-weekly",
    name: "ScheduleWeekly",
    description:
        "El componente ScheduleWeekly permite a los usuarios gestionar horarios semanales seleccionando intervalos de tiempo específicos para cada día de la semana. Utiliza ScheduleDay y CollapseMultiple para representar los horarios diarios en un formato de colapso.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente ScheduleWeekly.",
        },
        {
            id: "title",
            type: "ReactNode",
            require: false,
            default: "'Schedule Weekly'",
            description: "Título del componente ScheduleWeekly.",
        },
        {
            id: "defaultValue",
            type: "ScheduleWeeklyValueType",
            require: false,
            default: "{}",
            description:
                "Valor inicial del horario semanal, estructurado por días de la semana.",
        },
        {
            id: "value",
            type: "ScheduleWeeklyValueType",
            require: false,
            default: "undefined",
            description:
                "Valor actual del horario semanal, usado para el control del componente desde el exterior.",
        },
        {
            id: "onChange",
            type: "(v: ScheduleWeeklyValueType) => void",
            require: false,
            default: "N/A",
            description:
                "Función callback para manejar cambios en el valor del horario semanal.",
        },
        {
            id: "CollapseMultipleProps",
            type: "Omit<CollapseMultipleProps, 'items'>",
            require: false,
            default: "{ name: 'schedule', type: 'radio', defaultActive: 0 }",
            description:
                "Props para personalizar el comportamiento del componente CollapseMultiple que envuelve cada día de la semana.",
        },
        {
            id: "onParseHeaderDay",
            type: "(v: DaysEnum) => ReactNode",
            require: false,
            default: "undefined",
            description:
                "Función para personalizar el encabezado de cada día de la semana en el colapso.",
        },
    ],
    useExample: [
        {
            text: "Uso básico del ScheduleWeekly",
            content: `<ScheduleWeekly onChange={(value) => console.log(value)} />`,
        },
        {
            text: "ScheduleWeekly con título personalizado",
            content: `<ScheduleWeekly title="Horario Semanal" />`,
        },
        {
            text: "ScheduleWeekly con CollapseMultipleProps personalizados",
            content: `<ScheduleWeekly CollapseMultipleProps={{ type: 'checkbox', defaultActive: [0, 1] }} />`,
        },
    ],
};
