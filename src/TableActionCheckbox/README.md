# TableActionCheckbox

Componente TableActionCheckbox que permite realizar acciones sobre un conjunto de datos seleccionados en una tabla, con la opción de seleccionar todos los elementos usando una casilla de verificación.

### Importación

Para importar el componente TableActionCheckbox, se puede hacer desde fenextjs

```tsx copy
import { TableActionCheckbox } from "fenextjs";
```

### Parámetros

| Parámetro         | Tipo                          | Requerido | Default | Descripcion                                                                                                                                                                               |
| ----------------- | ----------------------------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className         | string                        | no        | ""      | Clase CSS para el contenedor principal del componente.                                                                                                                                    |
| actionAllCheckbox | InputCheckboxProps            | no        |         | Propiedades para la casilla de verificación que permite seleccionar o deseleccionar todos los elementos.                                                                                  |
| actions           | ((data: T[]) =\> ReactNode)[] | no        |         | Arreglo de funciones que toman los datos seleccionados como parámetro y devuelven un elemento React. Cada función representa una acción que se puede ejecutar en los datos seleccionados. |
| data              | T[]                           | no        |         | Arreglo de datos en el que se aplicarán las acciones definidas.                                                                                                                           |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/table-tableactioncheckbox--index)

### Usos

-   Uso básico del TableActionCheckbox

```tsx copy
<TableActionCheckbox
    className="my-checkbox"
    data={[
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
    ]}
    actionAllCheckbox={{ label: "Select All" }}
/>
```

-   Uso con acciones personalizadas

```tsx copy
<TableActionCheckbox
    data={[
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
    ]}
    actions={[
        (selectedData) => (
            <button onClick={() => console.log(selectedData)}>Delete</button>
        ),
        (selectedData) => (
            <button onClick={() => console.log(selectedData)}>Edit</button>
        ),
    ]}
/>
```
