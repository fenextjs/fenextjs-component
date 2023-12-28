#### Button

El componente Button es un componente versátil que representa un botón interactivo. Puede renderizarse como un elemento <button> o como un contenedor <div>, y proporciona varias opciones de personalización, incluyendo tamaño, icono y estado de carga.

```tsx
import { Button, ButtonProps } from "fenextjs-component/cjs/Button";

const handleButtonClick = () => {
    console.log("Button clicked!");
};

/* Ejemplo 1: Uso básico del componente Button */
<Button onClick={handleButtonClick}>Click Me</Button>;

/* Ejemplo 2: Button con clase de estilo personalizada */
<Button className="custom-button" onClick={handleButtonClick}>
    Custom Button
</Button>;

/* Ejemplo 3: Button con icono */
<Button icon={<i className="fa fa-check" />} onClick={handleButtonClick}>
    Save
</Button>;

/* Ejemplo 4: Button con estado de carga */
<Button loader onClick={handleButtonClick}>
    Loading...
</Button>;

/* Ejemplo 5: Button deshabilitado */
<Button disabled onClick={handleButtonClick}>
    Disabled Button
</Button>;

/* Ejemplo 6: Button como un contenedor <div> */
<Button isBtn={false} onClick={handleButtonClick}>
    Div Button
</Button>;

/* Ejemplo 7: Button con tamaño personalizado */
<Button size="extra-strong" onClick={handleButtonClick}>
    Extra Strong Button
</Button>;

/* Ejemplo 8: Button a lo ancho */
<Button full onClick={handleButtonClick}>
    Full Width Button
</Button>;
```
