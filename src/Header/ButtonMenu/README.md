#### ButtonMenu

El componente ButtonMenu es un botón desplegable que muestra un menú cuando se hace clic en él. Tiene opciones para personalizar su apariencia, como agregar un ícono y contenido dentro del menú. También puede estar en un estado de carga (loader) y ser desactivado (disabled). El menú se activa mediante una casilla de verificación oculta que se marca o desmarca al hacer clic en el botón.

```tsx
import {
    ButtonMenu,
    ButtonMenuProps,
} from "fenextjs-component/cjs/Header/ButtonMenu";

<ButtonMenu
    loader={false}
    disabled={false}
    defaultActive={false}
    className="custom-btn-menu"
    classNameIcon="custom-icon"
    classNameIconBarClose="custom-icon-bar"
    classNameContent="custom-content"
>
    <img src="logo.png" />
</ButtonMenu>;
```
