#### Tab

El componente Tab es un componente que muestra una lista de pestañas y el contenido asociado a cada una de ellas. Cada pestaña se representa mediante un encabezado y un cuerpo, y el contenido del cuerpo cambia según la pestaña seleccionada.

```tsx
import { Tab, TabProps } from "fenextjs-component/cjs/Tab";

const tabs = [
    {
        id: "tab1",
        head: <span>Tab 1</span>,
        body: <div>Content of Tab 1</div>,
    },
    {
        id: "tab2",
        head: <span>Tab 2</span>,
        body: <div>Content of Tab 2</div>,
    },
    {
        id: "tab3",
        head: <span>Tab 3</span>,
        body: <div>Content of Tab 3</div>,
    },
];

const handleTabChange = (item) => {
    console.log("Selected Tab:", item.id);
    // Puedes realizar acciones adicionales aquí cuando se seleccione una pestaña diferente.
};
<Tab items={tabs} onChange={handleTabChange} />;
```
