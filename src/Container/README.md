#### Container

El componente Container es una caja que envuelve y limita su contenido. Permite personalizar el tamaño del contenedor y aplicar padding inline (espacio interno horizontal) si es necesario.

```tsx
import { Container, ContainerProps } from "fenextjs-component/cjs/Container";

/* Ejemplo 1: Uso del componente Container con tamaño personalizado y padding inline */
<Container customSize={480} usePaddingInline>
    <p>Contenido del contenedor</p>
</Container>;

/* Ejemplo 2: Uso del componente Container sin padding inline */
<Container usePaddingInline={false}>
    <p>Otro contenido del contenedor</p>
</Container>;
```
