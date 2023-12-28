#### InputDateRange

El componente InputDateRange es un campo de entrada que permite al usuario seleccionar un rango de fechas. Está compuesto por dos campos de entrada InputDate, uno para la fecha de inicio del rango y otro para la fecha de finalización del rango.

```tsx
import {
    InputDateRange,
    InputDateRangeProps,
} from "fenextjs-component/cjs/Input/DateRange";

const handleDateRangeChange = (dateRange) => {
    console.log("Selected date range:", dateRange);
};
<InputDateRange
    label="Select a date range:"
    onChange={handleDateRangeChange}
/>;
```
