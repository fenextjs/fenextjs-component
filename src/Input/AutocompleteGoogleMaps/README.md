#### InputAutocompleteGoogleMaps

El componente InputAutocompleteGoogleMaps es un campo de entrada que utiliza el servicio de Autocompletado de Google Maps para buscar ubicaciones y autocompletar direcciones. Al ingresar una dirección o ubicación en el campo de entrada, se mostrarán sugerencias proporcionadas por Google Maps.

```tsx
import {
    InputAutocompleteGoogleMaps,
    InputAutocompleteGoogleMapsProps,
} from "fenextjs-component/cjs/Input/AutocompleteGoogleMaps";

const handleAutocompleteChange = (address) => {
    console.log("Selected address:", address);
};
<InputAutocompleteGoogleMaps
    onChange={handleAutocompleteChange}
    defaultValue={{
        formatted_address: "1600 Amphitheatre Parkway, Mountain View, CA",
        geometry: {
            location: {
                lat: 37.423576,
                lng: -122.084189,
            },
        },
    }}
/>;
```
