#### InputSelectState

El componente InputSelectState es un componente que representa un campo de entrada tipo select para seleccionar un estado. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un estado.

```tsx
import {
    InputSelectState,
    InputSelectStateProps,
} from "fenextjs-component/cjs/Input/SelectState";

<InputSelectState
    onChange={handleStateChange}
    className="custom-select"
    placeholder="Seleccione un estado"
    disabled={false}
    countryId={number}
/>;
```
