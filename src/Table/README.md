#### Table

El componente Table es una tabla que muestra una lista de datos en forma de filas y columnas. Puedes configurar el encabezado de la tabla, la paginación, y otras opciones a través de sus propiedades.

```tsx
import { Table, TableProps } from "fenextjs-component/cjs/Table";

const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 40, city: "Chicago" },
    // ...
];

const header = [
    { id: "name", th: "Name" },
    { id: "age", th: "Age" },
    { id: "city", th: "City" },
    // ...
];

const handleOrderBy = (order) => {
    // Handle ordering logic here
    console.log("Ordering by:", order);
};

const handleShowHidden = (showHidden) => {
    // Handle show/hide logic here
    console.log("Show/Hide:", showHidden);
};

const handleChecked = (selectedItems) => {
    // Handle selected items logic here
    console.log("Selected Items:", selectedItems);
};
<Table
    name="usersTable"
    items={data}
    header={header}
    pagination={{ totalPages: 5, currentPage: 1 }}
    useCheckbox={true}
    onOrderBy={handleOrderBy}
    onShowHidden={handleShowHidden}
    onChecked={handleChecked}
/>;
```
