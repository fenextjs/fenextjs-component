#### InputSelect

El componente InputSelect es un componente de entrada que muestra una lista desplegable de opciones cuando el usuario interactúa con él. Permite seleccionar una opción de la lista o buscar opciones específicas a medida que el usuario escribe en el campo de entrada.

```tsx
import {
    InputSelect,
    InputSelectProps,
} from "fenextjs-component/cjs/Input/Select";

const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
    { id: "4", text: "Option 4" },
    { id: "5", text: "Option 5" },
];

const handleSelectChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
};

<InputSelect options={options} onChange={handleSelectChange} />;
```
