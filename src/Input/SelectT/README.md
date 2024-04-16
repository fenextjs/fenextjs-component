#### InputSelectT

El componente InputSelectT es un componente de entrada que muestra una lista desplegable de opciones cuando el usuario interactúa con él. Permite seleccionar una opción de la lista o buscar opciones específicas a medida que el usuario escribe en el campo de entrada.

```tsx
import {
    InputSelectT,
    InputSelectTProps,
} from "fenextjs-component/cjs/Input/SelectT";

const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
    { id: "4", text: "Option 4" },
    { id: "5", text: "Option 5" },
];

const handleSelectTChange = (SelectTedOption) => {
    console.log("SelectTed Option:", SelectTedOption);
};

<InputSelectT options={options} onChange={handleSelectTChange} />;
```
