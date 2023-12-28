#### InputRate

El componente InputRate es una barra de desplazamiento (slider) que permite al usuario seleccionar un valor dentro de un rango determinado. El rango de valores se especifica mediante las propiedades min y max, y el valor seleccionado se puede controlar mediante las propiedades defaultValue o value.

```tsx
import { InputRate, InputRateProps } from "fenextjs-component/cjs/Input/Rate";

<InputRate defaultValue={3.5} onChange={handleRateChange} />;
```
