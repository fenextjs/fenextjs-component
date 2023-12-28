#### LayoutGridMenuTop

El componente LayoutGridMenuTop es un diseño de cuadrícula con un menú en la parte superior. También puede mostrar un loader (cargador) mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuTop,
    LayoutGridMenuTopProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuTop";
const menuContent = (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
);
<LayoutGridMenuTop loader={true} menuTop={menuContent}>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuTop>;
```
