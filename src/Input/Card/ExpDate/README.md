#### InputCardExpDate

El componente InputCardExpDate es un campo de entrada que permite a los usuarios ingresar y mostrar números. También proporciona botones para aumentar o disminuir el valor numérico.

```tsx
import {
    InputCardExpDate,
    InputCardExpDateProps,
} from "fenextjs-component/cjs/Input/Card/ExpDate";

<InputCardExpDate
    defaultValue={5}
    onChange={handleExpDateChange}
    useBtnIncreaseDecrease={true}
    min={0}
    max={10}
/>;
```
