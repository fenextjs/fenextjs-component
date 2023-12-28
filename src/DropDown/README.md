#### DropDown

El componente DropDown es un componente que muestra un contenido colapsable que se despliega hacia arriba o hacia abajo según el espacio disponible en el contenedor padre. Es útil para crear menús desplegables o listas que deben ajustarse automáticamente según el espacio disponible.

```tsx
import { DropDown, DropDownProps } from "fenextjs-component/cjs/DropDown";

/* Ejemplo 1: DropDown hacia abajo */
<DropDown header="Menu">
    <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </ul>
</DropDown>;

/* Ejemplo 2: DropDown hacia arriba */
<DropDown header="Profile" show="focus">
    <div>
        <p>Username: john_doe</p>
        <button>Logout</button>
    </div>
</DropDown>;
```
