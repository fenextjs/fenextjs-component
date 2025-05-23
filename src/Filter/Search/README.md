# FilterSearch

El componente FilterSearch permite filtrar datos por busquedas.

### Importación

Para importar el componente FilterSearch, se puede hacer desde fenextjs

```tsx copy
import { FilterSearch } from "fenextjs";
```

### Parámetros

| Parámetro       | Tipo                             | Requerido | Default   | Descripcion                                                   |
| --------------- | -------------------------------- | --------- | --------- | ------------------------------------------------------------- |
| nameFilter      | string                           | no        | undefined | Nombre único para el filtro, utilizado en el contexto global. |
| defaultValue    | SearchDataProps                  | no        | \{\}      | Valor inicial del filtro de busqueda.                         |
| onChange        | (data: SearchDataProps) =\> void | no        | undefined | Función que se ejecuta cuando cambia el valor del busqueda.   |
| className       | string                           | no        | ''        | Clase CSS para personalizar el contenedor principal.          |
| classNameSearch | InputSearchClassProps            | no        | \{\}      | Clase CSS para personalizar el InputSearch.                   |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/filter-search--index)

### Usos

-   Básico

```tsx copy
<FilterSearch />
```

-   Con valores iniciales

```tsx copy
<FilterSearch defaultValue={{ search: "" }} />
```
