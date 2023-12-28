#### PaginationNPage

El componente PaginationNPage es un componente que te permite seleccionar la cantidad de elementos que deseas mostrar por página en una paginación. Utiliza el componente InputSelect para ofrecer una lista desplegable con diferentes opciones de cantidad de elementos por página.

```tsx
import {
    PaginationNPage,
    PaginationNPageProps,
} from "fenextjs-component/cjs/Pagination/PaginationNPage";

<PaginationNPage
    listNpage={[
        { id: "10", text: "10" },
        { id: "20", text: "20" },
        { id: "50", text: "50" },
        { id: "100", text: "100" },
        { id: "all", text: "All" },
    ]}
    onChangeNPage={handleItemsPerPageChange}
/>;
```
