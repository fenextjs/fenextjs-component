#### InputSelectOption

El componente InputSelectOption es un componente que representa una opción en una lista desplegable (InputSelect). Puede mostrar texto e imágenes, y también puede incluir un botón de eliminar si se utiliza en una lista de selección múltiple (InputSelectMultiple).

```tsx
import {
    InputSelectOption,
    InputSelectOptionProps,
} from "fenextjs-component/cjs/Input/SelectOption";

const handleOptionClick = (item) => {
    console.log("Clicked Option:", item);
};

const handleOptionDelete = (item) => {
    console.log("Deleted Option:", item);
};

<InputSelectOption
    id={2}
    text="Option 2"
    img="url/to/image"
    onClick={handleOptionClick}
    onDelete={handleOptionDelete}
    type="multiple"
/>;
```
