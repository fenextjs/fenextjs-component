# QueryClientProvider

El componente QueryClientProvider se utiliza para cargar la libreria @tanstack/react-query, se recomienda usar en el archivo principal.

### Importación

Para importar el componente QueryClientProvider, se puede hacer desde fenextjs

```tsx copy
import { QueryClientProvider } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo | Requerido | Default | Descripcion |
| --------- | ---- | --------- | ------- | ----------- |
| children | ReactNode | sí |  | Contenido. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-queryclientprovider--index)

### Usos

- Básico

```tsx copy
<QueryClientProvider>Contenido</QueryClientProvider>
```

