# InputSelectState

El componente InputSelectState permite seleccionar un estado o provincia dentro de un país específico. Utiliza la API 'country-state-city-nextjs' para obtener y filtrar los estados según el país proporcionado.

### Importación

Para importar el componente InputSelectState, se puede hacer desde fenextjs

```tsx copy
import { InputSelectState } from "fenextjs";
```

### Parámetros

| Parámetro   | Tipo                         | Requerido | Default   | Descripcion                                                                                      |
| ----------- | ---------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------ |
| country     | CountryProps                 | no        | undefined | Objeto que representa el país seleccionado, necesario para filtrar los estados correspondientes. |
| id          | string                       | no        | undefined | ID del input select.                                                                             |
| label       | string                       | no        | undefined | Etiqueta para el campo de selección de estado.                                                   |
| className   | string                       | no        | ''        | Clase CSS para personalizar el contenedor del input.                                             |
| placeholder | string                       | no        | undefined | Texto de marcador de posición que aparece cuando no hay selección.                               |
| disabled    | boolean                      | no        | false     | Indica si el selector de estado está deshabilitado.                                              |
| value       | StateProps                   | no        | undefined | Valor seleccionado actualmente en el selector de estado.                                         |
| onChange    | (value: StateProps) =\> void | no        | undefined | Función que se ejecuta cuando el valor seleccionado cambia.                                      |
| isClearable | boolean                      | no        | false     | Indica si se puede limpiar el campo de selección.                                                |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectstate--index)

### Usos

-   InputSelectState básico

```tsx copy
<InputSelectState />
```

-   InputSelectState con país preseleccionado

```tsx copy
<InputSelectState country={selectedCountry} />
```

-   InputSelectState con cambio de estado

```tsx copy
<InputSelectState onChange={(state) => console.log(state)} />
```

-   InputSelectState deshabilitado

```tsx copy
<InputSelectState disabled={true} />
```
