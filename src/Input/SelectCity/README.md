#### InputSelectCity

El componente InputSelectCity es un componente que representa un campo de entrada tipo select para seleccionar un ciudad. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un ciudad.

```tsx
import {
    InputSelectCity,
    InputSelectCityProps,
} from "fenextjs-component/cjs/Input/SelectCity";

<InputSelectCity
    onChange={handleCityChange}
    className="custom-select"
    placeholder="Seleccione una ciudad"
    disabled={false}
    stateId={number}
/>;
```
