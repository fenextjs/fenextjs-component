#### InputCardNumber

El componente InputCardNumber es un campo de entrada que permite a los usuarios ingresar y mostrar números. También proporciona botones para aumentar o disminuir el valor numérico.

```tsx
import {
    InputCardNumber,
    InputCardNumberProps,
} from "fenextjs-component/cjs/Input/Card/Number";

<InputCardNumber
    defaultValue={5}
    onChange={handleNumberChange}
    useBtnIncreaseDecrease={true}
    min={0}
    max={10}
/>;
```
