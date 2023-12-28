#### InputRange

El componente InputRange es una barra de desplazamiento (slider) que permite al usuario seleccionar un valor dentro de un rango determinado. El rango de valores se especifica mediante las propiedades min y max, y el valor seleccionado se puede controlar mediante las propiedades defaultValue o value.

```tsx
import {
    InputRange,
    InputRangeProps,
} from "fenextjs-component/cjs/Input/Range";

<InputRange
    min={0}
    max={100}
    defaultValue={50}
    step={5}
    onChange={handleRangeChange}
    showNumber="bottom"
/>;
```
