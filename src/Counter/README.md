#### Counter

El componente Counter es un contador que muestra un número y, opcionalmente, un texto asociado. El contador anima el cambio del número desde el valor actual hasta el número objetivo con una animación suave de incremento.

```tsx
import { Counter, CounterProps } from "fenextjs-component/cjs/Counter";

/* Ejemplo 1: Uso básico del componente Counter */
<Counter number={1000} text="Total Count" />;

/* Ejemplo 2: Personalización del tiempo de incremento y el número de decimales */
<Counter number={2000.75} text="Sales Count" time={2000} decimal={1} />;

/* Ejemplo 3: Uso de un formato personalizado para el número */
<Counter
    number={3000.12345}
    text="Average Score"
    parseNumber={(n) => `$${n.toFixed(2)}`}
/>;
```
