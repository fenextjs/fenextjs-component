#### Schedule

<details>
  <summary>ScheduleDay</summary>

El componente ScheduleDay es un componente que permite al usuario agregar y eliminar rangos de tiempo en un día específico. El componente utiliza el componente InputDateRange para mostrar los campos de entrada de hora de inicio y hora final para cada rango de tiempo. También incluye un botón "Add Time Range" que permite al usuario agregar nuevos rangos de tiempo.

```tsx
import {
    ScheduleDay,
    ScheduleDayProps,
} from "fenextjs-component/cjs/Schedule/Day";

const [schedule, setSchedule] = useState([]);

const handleScheduleChange = (newSchedule) => {
    setSchedule(newSchedule);
};
<ScheduleDay
    value={schedule}
    onChange={handleScheduleChange}
    propsStart={{ label: "Start Time", placeholder: "Start Time" }}
    propsEnd={{ label: "End Time", placeholder: "End Time" }}
    ButtonProps={{ children: "Add Time Range" }}
/>;
```

</details>

<details>
  <summary>ScheduleWeekly</summary>

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

</details>
