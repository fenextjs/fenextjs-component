#### Menu

El componente Menu es un contenedor que muestra una lista de elementos de menú (ItemMenu) de forma vertical. Cada elemento de menú puede contener un enlace (<a>) con texto y un ícono opcional, así como subelementos que se mostrarán en un menú desplegable cuando se haga clic en el elemento principal.

```tsx
import { Menu, MenuProps } from "fenextjs-component/cjs/Header/Menu";

const menuItems = [
    {
        text: "Home",
        url: "/",
        icon: <i className="fas fa-home" />,
        defaultActive: false,
        subItems: [
            {
                text: "Subitem 1",
                url: "/subitem1",
            },
            {
                text: "Subitem 2",
                url: "/subitem2",
            },
        ],
    },
    {
        text: "About",
        url: "/about",
    },
    {
        text: "Contact",
        url: "/contact",
    },
];
<Menu items={menuItems} className="custom-menu" />;
```
