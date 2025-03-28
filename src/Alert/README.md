# Alert

El componente Alert se utiliza para mostrar mensajes de alerta en la interfaz de usuario, proporcionando diferentes tipos de alertas y permitiendo la opción de cerrarlas.

### Importación

Para importar el componente Alert, se puede hacer desde fenextjs

```tsx copy
import { Alert } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo      | Requerido | Default     | Descripcion                                                                                |
| --------- | --------- | --------- | ----------- | ------------------------------------------------------------------------------------------ |
| message   | string    | sí        |             | El mensaje que se mostrará en el contenido de la alerta.                                   |
| type      | AlertType | sí        |             | El tipo de alerta a mostrar, que puede estar relacionado con el estilo visual de la misma. |
| iconClose | ReactNode | no        | \<Close /\> | El icono que se mostrará para cerrar la alerta.                                            |
| onClose   | function  | no        |             | Función que se ejecuta cuando se cierra la alerta.                                         |
| className | string    | no        | ""          | Clase personalizada para el componente de alerta.                                          |
| data      | any       | no        |             | Datos adicionales o metadatos que se pueden agregar al componente de alerta.               |

### AlertType

Dependiendo del valor de 'AlertType', el estilo de la alerta sera diferente

| AlertType | Descripción                     |
| --------- | ------------------------------- |
| OK        | Mensaje de éxito.               |
| ERROR     | Mensaje de error.               |
| NORMAL    | Mensaje sin estatus específico. |
| WARNING   | Mensaje de advertencia.         |

### Storybook

Para ver el storybook del componente lo puede hacer con este [link](https://fenextjs-component-storybook.vercel.app/?path=/story/component-alert--index)

### Usos

-   Básico

```tsx copy
<Alert message="This is an alert!" type="info" />
```

-   Alerta con función de cierre

```tsx copy
<Alert
    message="Close this alert"
    type="warning"
    onClose={() => alert("¡Alerta cerró!")}
/>
```

-   Alerta con icono personalizado

```tsx copy
<Alert message="Custom icon alert" type="error" iconClose={<CustomIcon />} />
```
