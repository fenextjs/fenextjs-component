export default {
    id: "input-google-load-script",
    idStorybook: "component-input-google-load-script",
    name: "InputGoogleLoadScript",
    description:
        "El componente InputGoogleLoadScript se encarga de cargar el script de Google Maps y proporciona validación de la clave API de Google.",
    props: [
        {
            id: "googleMapsApiKey",
            type: "string",
            require: false,
            default: "process.env['NEXT_PUBLIC_GOOGLE_KEY']",
            description:
                "Clave API de Google Maps. Si no se proporciona, se usará la clave API predeterminada en las variables de entorno.",
        },
        {
            id: "children",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Los elementos hijos que se renderizarán dentro del componente una vez que el script de Google Maps haya sido cargado correctamente.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del componente.",
        },
        {
            id: "_t",
            type: "unknown",
            require: false,
            default: "undefined",
            description:
                "Propiedades de traducción para mensajes de error u otros textos.",
        },
        {
            id: "useT",
            type: "unknown",
            require: false,
            default: "undefined",
            description:
                "Hook de traducción para manejar cadenas traducibles dentro del componente.",
        },
    ],
    useExample: [
        {
            text: "InputGoogleLoadScript básico",
            content: `<InputGoogleLoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <YourGoogleMapsComponent />
</InputGoogleLoadScript>`,
        },
        {
            text: "InputGoogleLoadScript con validación",
            content: `<InputGoogleLoadScript>
    <YourGoogleMapsComponent />
</InputGoogleLoadScript>`,
        },
        {
            text: "InputGoogleLoadScript con manejo de errores",
            content: `<InputGoogleLoadScript googleMapsApiKey="INVALID_KEY">
    <YourGoogleMapsComponent />
</InputGoogleLoadScript>`,
        },
    ],
};
