#### InputText

El componente InputText es un componente para renderizar campos de entrada de texto.

```tsx
import { InputText, InputTextProps } from "fenextjs-component/cjs/Input/Text";
const handleChange = (value) => {
    console.log("Input value changed:", value);
};

const handleBlur = (value) => {
    console.log("Input blurred:", value);
};

const handleEnter = () => {
    console.log("Enter key pressed in input");
};

const handleCustomValidation = async (value) => {
    if (value === "forbidden") {
        throw new Error("Value is forbidden!");
    }
    return value;
};
<InputText
    label="Name"
    placeholder="Enter your name"
    onChange={handleChange}
    onBlur={handleBlur}
    onEnter={handleEnter}
/>;
<InputText
    label="Custom Validation"
    placeholder="Type 'forbidden' to see error"
    onChange={handleChange}
    onChangeValidate={handleCustomValidation}
/>;
```
