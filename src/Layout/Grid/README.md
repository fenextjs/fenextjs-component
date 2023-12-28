#### LayoutGrid

<details>
  <summary>LayoutGridMenuLeft</summary>
  
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

</details>

<details>
  <summary>LayoutGridMenuTop</summary>

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

</details>
<details>
  <summary>LayoutGridMenuTopLeft</summary>

El componente LayoutGridMenuTopLeft es una combinación de los componentes LayoutGridMenuTop y LayoutGridMenuLeft. Este componente permite crear un diseño de cuadrícula con un menú en la parte superior y otro menú a la izquierda, y también puede mostrar un loader mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuTopLeft,
    LayoutGridMenuTopLeftProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuTopLeft";

const menuContentTop = (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
);

const menuContentLeft = (
    <>
        <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
        </ul>
    </>
);

<LayoutGridMenuTopLeft
    loader={true}
    menuTop={menuContentTop}
    menuLeft={menuContentLeft}
    menuLeftActive={true}
    menuLeftMovilActive={false}
    useHeaderButtonMenu={false}
>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuTopLeft>;
```

</details>
