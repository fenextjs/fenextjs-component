#### InputNumberCount

El componente InputNumberCount es un campo de entrada de texto que permite a los usuarios ingresar y mostrar números en un formato con símbolos de moneda al inicio y al final del número.

```tsx
import {
    InputNumberCount,
    InputNumberCountProps,
} from "fenextjs-component/cjs/Input/NumberCount";

<InputNumberCount
    defaultValue={1000}
    onChange={handleNumberChange}
    symbolInit="€"
/>;
```
