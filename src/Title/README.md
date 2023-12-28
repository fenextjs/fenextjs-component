#### Title

El componente Title es un componente que se utiliza para renderizar títulos con diferentes niveles de encabezado (por ejemplo, h1, h2, h3, etc.). Permite especificar el nivel de encabezado y aplicar clases CSS adicionales si es necesario.

```tsx
import { Title, TitleProps } from "fenextjs-component/cjs/Title";

<Title tag="h1" className="main-title">
    Título Principal
</Title>;
<Title tag="h2" className="sub-title">
    Subtítulo
</Title>;
<Title tag="h3" className="sub-sub-title">
    Sub-subtítulo
</Title>;
```
