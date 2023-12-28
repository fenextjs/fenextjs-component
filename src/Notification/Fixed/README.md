#### Notification

El componente Notification es un componente que muestra un mensaje de notificación en la pantalla.
El componente Notification utiliza la propiedad type para aplicar una clase CSS específica relacionada con el tipo de notificación seleccionado. Por ejemplo, si el tipo de notificación es "SUCCESS", se aplicará la clase CSS "fenext-notification-success" al componente, lo que cambiará el estilo de la notificación para que se muestre como una notificación de éxito.

```tsx
import {
    Notification,
    NotificationProps,
} from "fenextjs-component/cjs/Notification/Fixed";

<Notification type="SUCCESS" className="custom-notification">
    ¡Operación exitosa! El artículo se ha guardado correctamente.
</Notification>;
<Notification type="ERROR" className="custom-notification">
    ¡Error! No se pudo completar la operación.
</Notification>;
<Notification type="WARNING" className="custom-notification">
    Advertencia: Esta acción es irreversible.
</Notification>;
<Notification type="NORMAL" className="custom-notification">
    Hola, esta es una notificación normal.
</Notification>;
```
