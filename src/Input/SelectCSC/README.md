#### InputSelectCSC

El componente InputSelectCSC es un componente de entrada que se utiliza para seleccionar un país, estado y ciudad en cascada (CSC). Permite al usuario elegir un país y, a continuación, se cargan automáticamente las opciones de estados disponibles para ese país. A continuación, cuando se selecciona un estado, se cargan las opciones de ciudades disponibles para ese estado.

```tsx
import {
    InputSelectCSC,
    InputSelectCSCProps,
} from "fenextjs-component/cjs/Input/SelectCSC";

<InputSelectCSC onChange={handleCSCChange} />;
```
