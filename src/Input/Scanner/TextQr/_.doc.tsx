export default {
    id: "input-scanner-text-qr",
    idStorybook: "component-input-scanner-text-qr",
    name: "InputScannerTextQr",
    description:
        "El componente InputScannerTextQr combina un campo de texto con un escáner QR. Permite al usuario ingresar texto manualmente o escanear un código QR para rellenar el campo de texto.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor principal del componente.",
        },
        {
            id: "defaultValue",
            type: "string",
            require: false,
            default: "''",
            description: "Valor predeterminado del campo de texto.",
        },
        {
            id: "onChange",
            type: "(value: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando el valor del campo de texto cambia, pasando el nuevo valor.",
        },
        {
            id: "icon",
            type: "ReactNode",
            require: false,
            default: "undefined",
            description:
                "Ícono que se muestra junto al campo de texto, en este caso, el escáner QR.",
        },
        {
            id: "onChangeCameraContent",
            type: "ReactNode",
            require: false,
            default: "<CameraChange />",
            description:
                "Contenido personalizado para el botón que permite cambiar entre cámaras en el escáner QR.",
        },
        {
            id: "buttonToggleFlashContent",
            type: "ReactNode",
            require: false,
            default: "<Bolt />",
            description:
                "Contenido personalizado para el botón que activa o desactiva el flash de la cámara en el escáner QR.",
        },
        {
            id: "buttonScannerContent",
            type: "ReactNode",
            require: false,
            default: "<Qr />",
            description:
                "Contenido personalizado para el botón que activa el escáner QR.",
        },
    ],
    useExample: [
        {
            text: "Escáner de texto y QR básico",
            content: `<InputScannerTextQr onChange={(value) => console.log(value)} />`,
        },
        {
            text: "Escáner de texto y QR con valor predeterminado",
            content: `<InputScannerTextQr defaultValue="Texto inicial" onChange={(value) => console.log(value)} />`,
        },
        {
            text: "Escáner de texto y QR con icono personalizado",
            content: `<InputScannerTextQr icon={<div>Escanear QR</div>} />`,
        },
    ],
};
