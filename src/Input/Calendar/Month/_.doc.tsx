export default {
    id: "input-calendar-month",
    idStorybook: "component-input-calendar-month",
    name: "InputCalendarMonth",
    description: "El componente InputCalendarMonth permite seleccionar fechas en un formato de calendario mensual. Puede usarse tanto para una selección normal como para un rango de fechas.",
    props: [
        {
            id: "type",
            type: "'normal' | 'range'",
            require: false,
            default: "'normal'",
            description: "Define si el calendario es para una selección única ('normal') o un rango de fechas ('range').",
        },
        {
            id: "date",
            type: "FenextjsDate",
            require: false,
            description: "La fecha actual del calendario, utilizada para mostrar el mes y año.",
        },
        {
            id: "onPreMonth",
            type: "() => void",
            require: false,
            description: "Función que se ejecuta al hacer clic en el botón para mostrar el mes anterior.",
        },
        {
            id: "onNextMonth",
            type: "() => void",
            require: false,
            description: "Función que se ejecuta al hacer clic en el botón para mostrar el mes siguiente.",
        },
        {
            id: "selectDate",
            type: "Date | undefined",
            require: true,
            description: "La fecha actualmente seleccionada en el modo 'normal'.",
        },
        {
            id: "selectDateRange",
            type: "Date[]",
            require: true,
            description: "El rango de fechas seleccionado en el modo 'range'.",
        },
        {
            id: "setSelectDate",
            type: "(d: Date) => void",
            require: true,
            description: "Función para actualizar la fecha seleccionada en el modo 'normal'.",
        },
        {
            id: "setSelectDateRange",
            type: "(d: (d: Date[]) => Date[]) => void",
            require: true,
            description: "Función para actualizar el rango de fechas en el modo 'range'.",
        },
        {
            id: "dataNSelect",
            type: "boolean",
            require: true,
            description: "Indica si se ha seleccionado la primera fecha en el modo 'range'.",
        },
        {
            id: "setDataNSelect",
            type: "(d: (d: boolean) => boolean) => void",
            require: true,
            description: "Función para actualizar el estado de la selección de fechas en el modo 'range'.",
        },
        {
            id: "min",
            type: "Date",
            require: false,
            description: "Fecha mínima seleccionable.",
        },
        {
            id: "max",
            type: "Date",
            require: false,
            description: "Fecha máxima seleccionable.",
        }
    ],
    useExample: [
        {
            text: "Calendario básico",
            content: `<InputCalendarMonth date={new FenextjsDate()} selectDate={selectedDate} setSelectDate={setSelectedDate} selectDateRange={[]} setSelectDateRange={() => {}} dataNSelect={false} setDataNSelect={() => {}} />`,
        },
        {
            text: "Calendario con selección de rango",
            content: `<InputCalendarMonth type="range" date={new FenextjsDate()} selectDate={undefined} setSelectDate={() => {}} selectDateRange={selectedRange} setSelectDateRange={setSelectedRange} dataNSelect={true} setDataNSelect={setNSelect} />`,
        }
    ]
};
