export default {
    id: "input-unit-base",
    idStorybook: "input-inputunitbase",
    name: "InputUnitBase",
    description:
        "El componente InputUnitBase permite a los usuarios ingresar un valor numérico junto con una unidad de medida seleccionable.",
    props: [
        {
            id: "defaultValue",
            type: "Partial<InputUnitValue>",
            require: false,
            default: "{}",
            description:
                "Valor por defecto del componente, incluye el valor numérico y la unidad de medida.",
        },
        {
            id: "value",
            type: "Partial<InputUnitValue>",
            require: false,
            default: "undefined",
            description:
                "Valor actual del componente, incluye el valor numérico y la unidad de medida.",
        },
        {
            id: "onChange",
            type: "(data: Partial<InputUnitValue>) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el valor o la unidad cambia, recibe el objeto con `value` y `unit`.",
        },
        {
            id: "options",
            type: "Unit_All[]",
            require: true,
            default: "undefined",
            description:
                "Opciones disponibles para las unidades de medida, definidas por el tipo `Unit_All`.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Clase CSS personalizada para el componente principal.",
        },
        {
            id: "classNameSelect",
            type: "string",
            require: false,
            default: "undefined",
            description: "Clase CSS personalizada para el select de unidades.",
        },
        {
            id: "classNameInput",
            type: "string",
            require: false,
            default: "undefined",
            description:
                "Clase CSS personalizada para el input del valor numérico.",
        },
    ],
    useExample: [
        {
            text: "InputUnitBase básico",
            content: `<InputUnitBase options={['cm', 'in', 'ft']} />`,
        },
        {
            text: "InputUnitBase con valor y unidad iniciales",
            content: `<InputUnitBase defaultValue={{ value: 10, unit: 'cm' }} options={['cm', 'in', 'ft']} />`,
        },
        {
            text: "InputUnitBase con función onChange",
            content: `<InputUnitBase options={['kg', 'g']} onChange={(data) => console.log(data)} />`,
        },
    ],
};
