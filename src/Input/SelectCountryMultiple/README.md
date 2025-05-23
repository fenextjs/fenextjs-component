# InputSelectCountryMultiple

El componente InputSelectCountryMultiple permite seleccionar múltiples países de una lista de opciones, con posibilidad de personalización adicional a través de las propiedades del componente.

### Importación

Para importar el componente InputSelectCountryMultiple, se puede hacer desde fenextjs

```tsx copy
import { InputSelectCountryMultiple } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo                                      | Requerido | Default | Descripcion                                                                                                        |
| --------- | ----------------------------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| ...props  | InputSelectMultipleTProps\<CountryProps\> | no        |         | Propiedades adicionales que extienden de InputSelectMultipleTProps, como eventos o configuraciones del componente. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectcountrymultiple--index)

### Usos

-   Selección múltiple de países

```tsx copy
<InputSelectCountryMultiple />
```

-   InputSelectCountryMultiple con estilos personalizados

```tsx copy
<InputSelectCountryMultiple classNameSelect="custom-select-multiple" />
```

-   InputSelectCountryMultiple con opciones predeterminadas

```tsx copy
<InputSelectCountryMultiple
    value={[
        { name: "United States", isoCode: "US" },
        { name: "Canada", isoCode: "CA" },
    ]}
/>
```
