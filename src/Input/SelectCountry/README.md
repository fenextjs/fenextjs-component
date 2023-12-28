#### InputSelectCountry

El componente InputSelectCountry es un componente que representa un campo de entrada tipo select para seleccionar un país. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un país.

```tsx
import {
    InputSelectCountry,
    InputSelectCountryProps,
} from "fenextjs-component/cjs/Input/SelectCountry";

<InputSelectCountry
    onChange={handleCountryChange}
    className="custom-select"
    placeholder="Seleccione un país"
    disabled={false}
/>;
```
