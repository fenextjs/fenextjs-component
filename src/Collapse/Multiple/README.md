#### CollapseMultiple

El componente CollapseMultiple es una extensión del componente Collapse que permite mostrar múltiples elementos colapsables. Permite proporcionar una lista de elementos (items) que se colapsarán individualmente y ofrece opciones para controlar si los elementos son de tipo "checkbox" o "radio" y compartir el mismo nombre de grupo para que solo uno pueda estar activo a la vez.

```tsx
import {
    CollapseMultiple,
    CollapseMultipleProps,
} from "fenextjs-component/cjs/Collapse/Multiple";

const collapseItems = [
    {
        header: "Item 1",
        children: <p>Content for Item 1</p>,
    },
    {
        header: "Item 2",
        children: <p>Content for Item 2</p>,
    },
    {
        header: "Item 3",
        children: <p>Content for Item 3</p>,
    },
];

 /* Ejemplo 1: Uso del componente CollapseMultiple con tipo "checkbox" */
<CollapseMultiple
    items={collapseItems}
    name="checkbox-group"
    type="checkbox"
/>

/* Ejemplo 2: Uso del componente CollapseMultiple con tipo "radio" */
<CollapseMultiple items={collapseItems} name="radio-group" type="radio" />;
```
