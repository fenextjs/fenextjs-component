export default {
    id: "input-google-maps",
    idStorybook: "component-input-google-maps",
    name: "InputGoogleMaps",
    description:
        "El componente InputGoogleMaps permite mostrar un mapa de Google Maps con marcadores, opciones de centrado, ajustes de límites y renderización de rutas entre puntos.",
    props: [
        {
            id: "mapContainerStyle",
            type: "object",
            require: false,
            default: "{ width: '100%', height: '100dvh' }",
            description: "Estilo CSS para el contenedor del mapa.",
        },
        {
            id: "markers",
            type: "MarkerProps[]",
            require: false,
            default: "undefined",
            description: "Lista de marcadores que se mostrarán en el mapa.",
        },
        {
            id: "useLoadCenterWithMarker",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Determina si el mapa debe centrarse automáticamente basándose en los marcadores proporcionados.",
        },
        {
            id: "useLoadFitBoundsWithMarker",
            type: "boolean",
            require: false,
            default: "true",
            description:
                "Determina si el mapa debe ajustar los límites para mostrar todos los marcadores.",
        },
        {
            id: "useLoadDirectionsWithMarker",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Determina si se debe renderizar una ruta (direcciones) entre los marcadores.",
        },
        {
            id: "showDirectionsWaypoints",
            type: "boolean",
            require: false,
            default: "false",
            description:
                "Muestra los puntos intermedios (waypoints) en la ruta cuando se renderiza la dirección.",
        },
        {
            id: "center",
            type: "{ lat: number; lng: number; }",
            require: false,
            default: "{ lat: 0, lng: 0 }",
            description: "Coordenadas para centrar el mapa inicialmente.",
        },
        {
            id: "onBoundsChanged",
            type: "(bounds: google.maps.LatLngBounds | undefined) => void",
            require: false,
            default: "undefined",
            description:
                "Función que se ejecuta cuando los límites del mapa cambian.",
        },
        // Props adicionales heredadas de GoogleMapProps pueden ser agregadas aquí si es necesario.
    ],
    useExample: [
        {
            text: "Mapa básico con marcadores",
            content: `
<InputGoogleMaps
    markers={[
        { position: { lat: 40.7128, lng: -74.0060 } }, // Nueva York
        { position: { lat: 34.0522, lng: -118.2437 } }, // Los Ángeles
    ]}
/>
`,
        },
        {
            text: "Mapa centrado en un punto específico",
            content: `
<InputGoogleMaps
    center={{ lat: 51.5074, lng: -0.1278 }} // Londres
    useLoadCenterWithMarker={false}
/>
`,
        },
        {
            text: "Mapa con ajuste de límites automático",
            content: `
<InputGoogleMaps
    markers={[
        { position: { lat: -33.8688, lng: 151.2093 } }, // Sídney
        { position: { lat: -37.8136, lng: 144.9631 } }, // Melbourne
    ]}
    useLoadFitBoundsWithMarker={true}
/>
`,
        },
        {
            text: "Mapa con ruta entre marcadores",
            content: `
<InputGoogleMaps
    markers={[
        { position: { lat: 40.7128, lng: -74.0060 } }, // Nueva York
        { position: { lat: 41.8781, lng: -87.6298 } }, // Chicago
        { position: { lat: 34.0522, lng: -118.2437 } }, // Los Ángeles
    ]}
    useLoadDirectionsWithMarker={true}
    showDirectionsWaypoints={true}
/>
`,
        },
        {
            text: "Mapa con estilos personalizados",
            content: `
<InputGoogleMaps
    markers={[{ position: { lat: 48.8566, lng: 2.3522 } }]} // París
    mapContainerStyle={{ width: '600px', height: '400px' }}
/>
`,
        },
    ],
};
