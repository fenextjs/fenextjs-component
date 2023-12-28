#### NotificationPop

El componente NotificationPop es un componente que muestra una notificación emergente en la parte superior o inferior de la pantalla. Este componente utiliza el hook useNotification para obtener y controlar el estado de las notificaciones.

```tsx
import {
    NotificationPop,
    NotificationPopProps,
} from "fenextjs-component/cjs/Notification/Pop";
import {
    useNotification,
    useNotificationProps,
} from "fenextjs-hook/cjs/useNotification";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
const { pop } = useNotification({ time });

const handleShowNotification = () => {
    pop({
        message: "message",
        type: RequestResultTypeProps.OK,
    });
};
<button onClick={handleShowNotification}>Mostrar Notificación</button>;

<NotificationPop
    typePop="top"
    time={5000}
    classNamePop="custom-notification-pop"
    className="custom-notification"
/>;
```
