#### ErrorComponent

El componente ErrorComponent es un componente que se utiliza para mostrar mensajes de error en la interfaz de usuario. Es útil para manejar errores generados por la biblioteca fenextjs-error.

```tsx
import {
    ErrorComponent,
    ErrorComponentProps,
} from "fenextjs-component/cjs/Error";

const handleError: ErrorFenextjs = {
    code: "INPUT_REQUIRED",
    message: "Este campo es obligatorio.",
};

/* Ejemplo 1: Mostrar un mensaje de error */
<ErrorComponent error={handleError} />;

/* Ejemplo 2: Mostrar contenido si no hay error */
<ErrorComponent error={null}>
    <p>Contenido sin errores.</p>
</ErrorComponent>;
```
