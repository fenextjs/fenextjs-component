export default {
    id: "input-scanner-qr",
    idStorybook: "component-input-scanner-qr",
    name: "InputScannerQr",
    description:
        "El componente InputScannerQr permite escanear códigos QR utilizando la cámara del dispositivo. Incluye opciones para cambiar de cámara, activar el flash y detener el escaneo.",
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
            id: "onChange",
            type: "(v: string) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta al escanear un código QR con éxito, pasando el valor escaneado.",
        },
        {
            id: "buttonScannerContent",
            type: "ReactNode",
            require: false,
            default: "<Qr />",
            description:
                "Contenido personalizado para el botón que activa el escáner.",
        },
        {
            id: "buttonChangeCameraContent",
            type: "ReactNode",
            require: false,
            default: "<CameraChange />",
            description:
                "Contenido personalizado para el botón que permite cambiar entre cámaras.",
        },
        {
            id: "buttonToggleFlashContent",
            type: "ReactNode",
            require: false,
            default: "<Bolt />",
            description:
                "Contenido personalizado para el botón que activa o desactiva el flash de la cámara.",
        },
    ],
    useExample: [
        {
            text: "Escáner básico de QR",
            content: `<InputScannerQr onChange={(value) => console.log(value)} />`,
        },
        {
            text: "Escáner con contenido personalizado en los botones",
            content: `<InputScannerQr buttonScannerContent={<div>Escanear QR</div>} />`,
        },
        {
            text: "Escáner con cambio de cámara y flash activable",
            content: `<InputScannerQr buttonChangeCameraContent={<div>Cambiar Cámara</div>} buttonToggleFlashContent={<div>Flash</div>} />`,
        },
    ],
};
