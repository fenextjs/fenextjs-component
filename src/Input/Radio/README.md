#### InputRadio

El componente InputRadio es una serie de botones de opción que permiten al usuario seleccionar una opción de una lista. Cada botón de opción está asociado a un ítem que contiene un id y una etiqueta label.

```tsx
import {
    InputRadio,
    InputRadioProps,
} from "fenextjs-component/cjs/Input/Phone";

const items = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
];

const handleRadioChange = (selectedItem) => {
    console.log("Selected Item:", selectedItem);
};
<InputRadio
    items={items}
    defaultValue={items[0]}
    onChange={handleRadioChange}
/>;
```
