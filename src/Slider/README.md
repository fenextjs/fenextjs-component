#### Slider

El componente Slider es un componente que muestra una lista de elementos en forma de carrusel deslizante. Los elementos se muestran en un número específico por fila, y el carrusel puede avanzar automáticamente o mediante flechas de navegación.

```tsx
import { Slider, SliderProps } from "fenextjs-component/cjs/Slider";

const items = [
    <div>Elemento 1</div>,
    <div>Elemento 2</div>,
    <div>Elemento 3</div>,
    // Agregar más elementos aquí
];
<Slider items={items} />;
```
