# InputSelectButtonsGroup

El componente InputSelectButtonsGroup permite seleccionar múltiples opciones de una lista de elementos. Ofrece funcionalidades avanzadas como validación personalizada, deshabilitación de opciones y selección de estilo de visualización.

### Importación

Para importar el componente InputSelectButtonsGroup, se puede hacer desde fenextjs

```tsx copy
import { InputSelectButtonsGroup } from "fenextjs";
```

### Parámetros

| Parámetro                       | Tipo                          | Requerido | Default | Descripcion                                                                                              |
| ------------------------------- | ----------------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------- |
| classNameSelectButtonsGroup     | string                        | no        | ""      | Clase CSS personalizada para el contenedor principal del grupo de botones select.                        |
| classNameSelectButtonsGroupList | string                        | no        | ""      | Clase CSS personalizada para la lista de opciones del grupo de botones select.                           |
| defaultValue                    | T[]                           | no        | []      | Opciones predeterminadas seleccionadas al iniciar el componente.                                         |
| value                           | T[]                           | no        |         | Opciones seleccionadas actualmente.                                                                      |
| onChange                        | (v?: T[]) =\> void            | no        |         | Función que se ejecuta cuando los datos seleccionados cambian.                                           |
| validator                       | FenextjsValidatorClass\<T[]\> | no        |         | Instancia de `FenextjsValidatorClass` para validar los datos seleccionados.                              |
| CustomOptionsSelected           | typeof InputSelectOption\<T\> | no        |         | Componente personalizado para renderizar las opciones seleccionadas.                                     |
| options                         | T[]                           | no        |         | Lista de opciones disponibles para seleccionar.                                                          |
| label                           | string                        | no        |         | Etiqueta para el grupo de botones select.                                                                |
| optional                        | boolean                       | no        |         | Indica si el campo es opcional.                                                                          |
| optionalText                    | string                        | no        |         | Texto que se muestra cuando el campo es opcional.                                                        |
| required                        | boolean                       | no        |         | Indica si el campo es obligatorio.                                                                       |
| requiredText                    | string                        | no        |         | Texto que se muestra cuando el campo es obligatorio.                                                     |
| disabled                        | boolean                       | no        |         | Indica si el componente está deshabilitado.                                                              |
| isMultiple                      | boolean                       | no        | false   | Indica si se pueden seleccionar múltiples opciones. Si es `false`, solo se puede seleccionar una opción. |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/input-inputselectbuttonsgroup--index)

### Usos

-   Uso básico de InputSelectButtonsGroup

```tsx copy
<InputSelectButtonsGroup
    defaultValue={["Opción 1", "Opción 2"]}
    options={["Opción 1", "Opción 2", "Opción 3"]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    onChange={(selected) => console.log(selected)}
/>
```

-   InputSelectButtonsGroup con selección múltiple

```tsx copy
<InputSelectButtonsGroup
    isMultiple={true}
    options={["Opción 1", "Opción 2", "Opción 3"]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    onChange={(selected) => console.log("Opciones seleccionadas:", selected)}
/>
```

-   InputSelectButtonsGroup con validación personalizada

```tsx copy
<InputSelectButtonsGroup
    options={["Opción 1", "Opción 2", "Opción 3"]}
    onParse={(e) => ({
        id: e ?? "",
        text: e ?? "",
        data: e,
    })}
    isMultiple={true}
    validator={FV()
        .isArray(
            FV()
                .isString("string")
                .isCustom((e) =>
                    e === "Opción 1"
                        ? new ErrorFenextjs({
                              message: "No puedes seleccionar esta opción",
                          })
                        : true,
                ),
        )
        .isMinOrEqual(3, "mínimo 3 elementos")
        .isMaxOrEqual(5, "máximo 5 elementos")}
    onChange={(selected) => console.log("Opciones seleccionadas:", selected)}
/>
```
