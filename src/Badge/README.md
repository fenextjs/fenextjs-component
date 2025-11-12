# Badge

El componente Badge se utiliza para mostrar un indicador visual asociado a un estado o tipo específico, como 'pendding', 'completed' o 'error'. Es útil para resaltar información de estado dentro de la interfaz de usuario.

### Importación

Para importar el componente Badge, se puede hacer desde fenextjs

```tsx copy
import { Badge } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo      | Requerido | Default | Descripcion                                                                                                  |
| --------- | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| children  | ReactNode | sí        |         | Contenido que se mostrará dentro del badge. Puede ser texto o un elemento React.                             |
| type      | BadgeType | sí        |         | Define el tipo o estado del badge, el cual determina su estilo visual.                                       |
| className | string    | no        | ""      | Clase personalizada para aplicar estilos adicionales al badge.                                               |
| \_t       | function  | no        |         | Función de traducción proveniente de `use_T`, utilizada para traducir el contenido del badge si se requiere. |

### BadgeType

Dependiendo del valor de 'BadgeType', el estilo y color del badge varían para representar diferentes estados.

| BadgeType | Descripción                                                    |
| --------- | -------------------------------------------------------------- |
| pendding  | Indica que una tarea o proceso está pendiente.                 |
| loader    | Indica que un proceso está en curso o cargando.                |
| completed | Indica que la tarea o proceso ha sido completado exitosamente. |
| error     | Indica que ocurrió un error en la tarea o proceso.             |
| processed | Indica que el proceso ha sido correctamente procesado.         |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-badge--index)

### Usos

-   Básico

```tsx copy
<Badge type="completed">Completado</Badge>
```

-   Badge de error

```tsx copy
<Badge type="error">Error en el proceso</Badge>
```

-   Badge pendiente con clase personalizada

```tsx copy
<Badge type="pendding" className="custom-badge">
    Pendiente
</Badge>
```
