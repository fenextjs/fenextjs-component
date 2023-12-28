#### ScheduleWeekly

El componente ScheduleWeekly es un componente que permite al usuario definir un horario semanal para cada día de la semana. El componente utiliza el componente ScheduleDay para permitir al usuario agregar y eliminar rangos de tiempo para cada día.

```tsx
import {
    ScheduleWeekly,
    ScheduleWeeklyProps,
} from "fenextjs-component/cjs/Schedule/Weekly";

const [schedule, setSchedule] = useState({});

const handleScheduleChange = (newSchedule) => {
    setSchedule(newSchedule);
};

<ScheduleWeekly
    title="My Weekly Schedule"
    value={schedule}
    onChange={handleScheduleChange}
/>;
```
