# PageProgress

El componente PageProgress muestra una barra de progreso visual durante los cambios de ruta en Next.js, indicando al usuario el estado de carga de la página.

### Importación

Para importar el componente PageProgress, se puede hacer desde fenextjs

```tsx copy
import { PageProgress } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo   | Requerido | Default | Descripcion                                                        |
| --------- | ------ | --------- | ------- | ------------------------------------------------------------------ |
| className | string | no        | ''      | Clase CSS para personalizar el contenedor de la barra de progreso. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/pageprogress-pageprogress--index)

### Usos

-   Barra de progreso básica

```tsx copy
<PageProgress />
```

-   Barra de progreso personalizada

```tsx copy
<PageProgress className="mi-clase-personalizada" />
```