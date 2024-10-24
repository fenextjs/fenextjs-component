export default {
    id: "input-unit-distance",
    idStorybook: "component-input-unit-distance",
    name: "InputUnitDistance",
    description: "El componente InputUnitDistance permite a los usuarios ingresar un valor numérico junto con una unidad de medida de distancia seleccionable.",
    props: [
        {
            id: "defaultValue",
            type: "Partial<InputUnitDistanceValue>",
            require: false,
            default: "{}",
            description: "Valor por defecto del componente, incluye el valor numérico y la unidad de medida de distancia.",
        },
        {
            id: "value",
            type: "Partial<InputUnitDistanceValue>",
            require: false,
            default: "undefined",
            description: "Valor actual del componente, incluye el valor numérico y la unidad de medida de distancia.",
        },
        {
            id: "onChange",
            type: "(data: Partial<InputUnitDistanceValue>) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cuando el valor o la unidad cambia, recibe el objeto con `value` y `unit`.",
        },
        {
            id: "options",
            type: "Unit_Distance[]",
            require: false,
            default: "Object.keys(Unit_Distance).map((e) => Unit_Distance[e])",
            description: "Opciones disponibles para las unidades de medida de distancia, definidas por el tipo `Unit_Distance`.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "undefined",
            description: "Clase CSS personalizada para el componente principal.",
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
            description: "Clase CSS personalizada para el input del valor numérico.",
        }
    ],
    useExample: [
        {
            text: "InputUnitDistance básico",
            content: `<InputUnitDistance options={['m', 'km', 'mi']} />`,
        },
        {
            text: "InputUnitDistance con valor y unidad iniciales",
            content: `<InputUnitDistance defaultValue={{ value: 5, unit: 'km' }} options={['m', 'km', 'mi']} />`,
        },
        {
            text: "InputUnitDistance con función onChange",
            content: `<InputUnitDistance options={['m', 'mi']} onChange={(data) => console.log(data)} />`,
        }
    ]
};
