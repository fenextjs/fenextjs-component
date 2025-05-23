# InputUnitVolumen

El componente InputUnitVolumen permite al usuario seleccionar y gestionar unidades de volumen, ofreciendo opciones predeterminadas y personalizadas. Está basado en `InputUnitBase` y extiende su funcionalidad con opciones específicas de volumen.

### Importación

Para importar el componente InputUnitVolumen, se puede hacer desde fenextjs

```tsx copy
import { InputUnitVolumen } from "fenextjs";
```

### Parámetros

| Parámetro         | Tipo                                              | Requerido | Default                                                | Descripcion                                                                                 |
| ----------------- | ------------------------------------------------- | --------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| defaultValue      | Partial\<InputUnitVolumenValue\>                  | no        | undefined                                              | Valor predeterminado para el componente, que incluye el valor y la unidad seleccionados.    |
| value             | Partial\<InputUnitVolumenValue\>                  | no        | undefined                                              | Valor actual del componente, que incluye el valor numérico y la unidad seleccionada.        |
| onChange          | (data: Partial\<InputUnitVolumenValue\>) =\> void | no        | undefined                                              | Función que se ejecuta al cambiar el valor o la unidad, devolviendo los datos actualizados. |
| options           | Unit_Volumen[]                                    | no        | Object.keys(Unit_Volumen).map((e) =\> Unit_Volumen[e]) | Opciones de unidades de volumen disponibles para seleccionar.                               |
| className         | string                                            | no        | ''                                                     | Clase CSS para personalizar el estilo del componente.                                       |
| classNameDisabled | string                                            | no        | ''                                                     | Clase CSS para el estado deshabilitado del componente.                                      |
| classNameInput    | string                                            | no        | ''                                                     | Clase CSS para el campo de entrada de texto.                                                |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputunitvolumen--index)

### Usos

-   Uso básico

```tsx copy
<InputUnitVolumen />
```

-   Con valor predeterminado

```tsx copy
<InputUnitVolumen defaultValue={{ value: 10, unit: "liters" }} />
```

-   Con función onChange

```tsx copy
<InputUnitVolumen onChange={(data) => console.log(data)} />
```
