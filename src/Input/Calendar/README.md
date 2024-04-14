#### InputCalendar

El componente InputCalendar es un campo de entrada que permite al usuario seleccionar una fecha o hora. Es compatible con varios tipos de fechas, como "Calendar", "month", "week" y "time".

```tsx
import { InputCalendar, InputCalendarProps } from "fenextjs-component/cjs/Input/Calendar";

const handleCalendarChange = (Calendar) => {
    console.log("Selected Calendar:", Calendar);
};
<InputCalendar type="Calendar" label="Select a Calendar:" onChange={handleCalendarChange} />;
```
