#### InputSelectCountryMultiple

El componente InputSelectCountryMultiple es una función que representa un campo de entrada tipo select múltiple para seleccionar múltiples países. Utiliza el componente InputSelectMultiple como base para mostrar las opciones disponibles para elegir múltiples países.

```tsx
import {
    InputSelectCountryMultiple,
    InputSelectCountryMultipleProps,
} from "fenextjs-component/cjs/Input/SelectCountryMultiple";

<InputSelectCountryMultiple
    onChange={handleCountryChange}
    className="custom-select"
    placeholder="Seleccione un país"
    disabled={false}
/>;
```
