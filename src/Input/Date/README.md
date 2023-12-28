#### InputDate

El componente InputDate es un campo de entrada que permite al usuario seleccionar una fecha o hora. Es compatible con varios tipos de fechas, como "date", "month", "week" y "time".

```tsx
import { InputDate, InputDateProps } from "fenextjs-component/cjs/Input/Date";

const handleDateChange = (date) => {
    console.log("Selected date:", date);
};
<InputDate type="date" label="Select a date:" onChange={handleDateChange} />;
```
