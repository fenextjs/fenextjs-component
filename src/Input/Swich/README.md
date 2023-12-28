#### InputSwich

El componente InputSwich es un componente que representa un interruptor o switch de selección. Permite al usuario cambiar entre dos estados (encendido/apagado) mediante una animación de deslizamiento.

```tsx
import {
    InputSwich,
    InputSwichProps,
} from "fenextjs-component/cjs/Input/Swich";
const handleChange = (isChecked) => {
    console.log("Switch is checked:", isChecked);
};

const handleValidateCheck = async () => {
    // Simulación de una operación de validación asincrónica
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Switch is being validated...");
};

<InputSwich onChange={handleChange} defaultValue={false} />;
<InputSwich onChange={handleChange} defaultValue={true} disabled />;
<InputSwich
    onChange={handleChange}
    defaultValue={false}
    onValidateCheck={handleValidateCheck}
/>;
```
