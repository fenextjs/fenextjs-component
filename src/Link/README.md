#### Link

El componente Link es una envoltura alrededor del componente next/link de Next.js para crear enlaces en tu aplicación React. El componente Link se utiliza para garantizar la correcta navegación y la precarga de páginas en Next.js.

```tsx
import { Link, LinkProps } from "fenextjs-component/cjs/Link";

<Link href="/products" className="custom-link">
    Products
</Link>;
<Link href="/contact" prefetch={true}>
    Contact Us
</Link>;
```
