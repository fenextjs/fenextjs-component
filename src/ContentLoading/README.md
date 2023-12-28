#### ContentLoading

El componente ContentLoading es un componente que representa un contenedor para el contenido que puede estar cargando o aún no estar disponible. Puede mostrar un spinner de carga mientras se está cargando el contenido, o simplemente mostrar el contenido cuando esté listo.

```tsx
import {
    ContentLoading,
    ContentLoadingProps,
} from "fenextjs-component/cjs/ContentLoading";

const [loading, setLoading] = useState(true);

useEffect(() => {
    // Simulación de una carga asincrónica
    setTimeout(() => {
        setLoading(false);
    }, 3000);
}, []);
<ContentLoading loader={loading}>
    <p>Contenido listo para mostrar</p>
</ContentLoading>;
```
