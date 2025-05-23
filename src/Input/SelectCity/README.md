# InputSelectCity

Componente InputSelectCity que permite seleccionar una ciudad basándose en el país y estado seleccionados.

### Importación

Para importar el componente InputSelectCity, se puede hacer desde fenextjs

```tsx copy
import { InputSelectCity } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                           | Requerido | Default   | Descripcion                                                              |
| --------- | ------------------------------ | --------- | --------- | ------------------------------------------------------------------------ |
| country   | CountryProps                   | no        | undefined | El país seleccionado, utilizado para filtrar las ciudades disponibles.   |
| state     | StateProps                     | no        | undefined | El estado seleccionado, utilizado para filtrar las ciudades disponibles. |
| ...props  | InputSelectTProps\<CityProps\> | no        |           | Cualquier otra propiedad que extiende de InputSelectTProps.              |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectcity--index)

### Usos

-   Básico

```tsx copy
<InputSelectCity
    country={{ name: "United States", isoCode: "US" }}
    state={{ name: "California", isoCode: "CA" }}
/>
```

-   InputSelectCity sin estado

```tsx copy
<InputSelectCity country={{ name: "United States", isoCode: "US" }} />
```

-   InputSelectCity con todas las ciudades

```tsx copy
<InputSelectCity />
```
