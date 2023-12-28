#### InputCheckbox

El componente InputCheckbox es un campo de entrada de tipo checkbox. Permite al usuario seleccionar o deseleccionar una opción.

```tsx
import {
    InputCheckbox,
    InputCheckboxProps,
} from "fenextjs-component/cjs/Input/Checkbox";

const handleCheckboxChange = (checked) => {
    console.log("Checkbox is checked:", checked);
};

const handleValidation = async () => {
    // Perform validation logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an asynchronous operation
    console.log("Validation completed.");
};
<InputCheckbox
    label="Enable Feature"
    onChange={handleCheckboxChange}
    onValidateCheck={handleValidation}
/>;
```
