#### LayoutGridMenuLeft

El componente LayoutGridMenuLeft es un diseño de cuadrícula con un menú izquierdo que puede estar activo o inactivo, y puede cambiar entre estados activos o inactivos en dispositivos móviles. También puede mostrar un loader (cargador) mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuLeft,
    LayoutGridMenuLeftProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuLeft";

const menuContent = (
    <>
        <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ul>
    </>
);
<LayoutGridMenuLeft
    loader={true}
    menuLeft={menuContent}
    menuLeftActive={true}
    menuLeftMovilActive={false}
    useHeaderButtonMenu={true}
>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuLeft>;
```
