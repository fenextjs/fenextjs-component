#### Collapse

El componente Collapse es un componente utilizado para mostrar y ocultar contenido, como acordeones, en una interfaz. Permite definir encabezados personalizados para controlar el colapso del contenido y ofrece opciones para mostrar un icono de carga mientras se realiza una acción.

```tsx
import {
    Collapse,
    CollapseProps,
} from "fenextjs-component/cjs/Collapse/Simple";

/* Ejemplo 1: Uso básico del componente Collapse */
<Collapse header="Click to Collapse">
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 2: Collapse con encabezado personalizado */
<Collapse header={<h3>Custom Header</h3>}>
    <p>Custom content</p>
</Collapse>;

/* Ejemplo 3: Collapse deshabilitado */
<Collapse header="Disabled Collapse" disabled>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 4: Collapse activo por defecto */
<Collapse header="Default Active Collapse" defaultActive>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 5: Collapse con tipo "radio" */
<Collapse header="Radio Collapse" type="radio">
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 6: Collapse con icono de carga */
<Collapse header="Collapse with Loader" loader>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 7: Collapse con tipo de show "focus" */
<Collapse header="Focus Collapse" show="focus">
    <p>Content goes here</p>
</Collapse>;
```
