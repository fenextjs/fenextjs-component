#### InputNumber

El componente InputNumber es un campo de entrada que permite a los usuarios ingresar y mostrar números. También proporciona botones para aumentar o disminuir el valor numérico.

```tsx
import {
    InputNumber,
    InputNumberProps,
} from "fenextjs-component/cjs/Input/Number";

<InputNumber
    defaultValue={5}
    onChange={handleNumberChange}
    useBtnIncreaseDecrease={true}
    min={0}
    max={10}
/>;
```
