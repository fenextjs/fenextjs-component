#### InputSelectMultiple

El componente InputSelectMultiple es un componente de entrada que permite al usuario seleccionar múltiples opciones de una lista desplegable. El componente muestra las opciones disponibles en un campo de entrada tipo "select" y permite agregar o eliminar opciones seleccionadas en una lista debajo del campo de entrada.

```tsx
import {
    InputSelectMultiple,
    InputSelectMultipleProps,
} from "fenextjs-component/cjs/Input/SelectMultiple";
const handleSelectMultipleChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
};

const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
    // ... Add more options as needed
];
<InputSelectMultiple options={options} onChange={handleSelectMultipleChange} />;
```
