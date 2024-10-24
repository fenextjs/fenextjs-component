export default {
    id: "chronometer",
    idStorybook: "component-chronometer",
    name: "Chronometer",
    description: "El componente Chronometer muestra una cuenta regresiva en base al tiempo dado en segundos, actualizándose cada segundo. Permite personalizar el formato del tiempo mostrado y ejecutar una acción cada vez que el tiempo cambia.",
    props: [
        {
            id: "time",
            type: "number",
            require: false,
            default: "100",
            description: "El tiempo inicial en segundos que se mostrará y del cual el cronómetro comenzará la cuenta regresiva.",
        },
        {
            id: "onChange",
            type: "(time: number) => void",
            require: false,
            default: "undefined",
            description: "Función que se ejecuta cada vez que el tiempo cambia, recibiendo el nuevo tiempo como parámetro.",
        },
        {
            id: "min",
            type: "number",
            require: false,
            default: "0",
            description: "El tiempo mínimo al que puede llegar el cronómetro, en segundos.",
        },
        {
            id: "optionsTimeToText",
            type: "getTimeToTextProps",
            require: false,
            default: "{ days: false }",
            description: "Opciones para personalizar el formato del tiempo mostrado, como si incluir o no los días.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS personalizada para el componente.",
        }
    ],
    useExample: [
        {
            text: "Cronómetro básico",
            content: `<Chronometer time={120} />`
        },
        {
            text: "Cronómetro con acción al cambiar el tiempo",
            content: `
<Chronometer 
    time={60} 
    onChange={(newTime) => console.log("Nuevo tiempo:", newTime)} 
/>`
        },
        {
            text: "Cronómetro con formato de tiempo personalizado",
            content: `
<Chronometer 
    time={3600} 
    optionsTimeToText={{ hours: true, minutes: true, seconds: true }} 
/>`
        }
    ]
};
