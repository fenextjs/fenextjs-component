#### Text

El componente Text es un componente que permite renderizar texto con diferentes estilos según el valor de la propiedad tag. Puedes utilizar este componente para renderizar texto en varios elementos HTML, como párrafos (p), texto enfatizado (em), negrita (b), etc.

```tsx
import { Text, TextProps } from "fenextjs-component/cjs/Text";

<Text tag="p" className="my-text">
    Este es un texto de ejemplo en un párrafo.
</Text>;

<Text tag="strong" className="my-strong-text">
    Este es un texto enfatizado.
</Text>;

<Text tag="em" className="my-emphasized-text">
    Este es un texto en cursiva.
</Text>;
```
