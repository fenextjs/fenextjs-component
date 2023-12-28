#### PaginationItemPage

El componente PaginationItemPage es un componente de paginación que te permite navegar por una lista de elementos divididos en páginas. Este componente muestra una serie de botones que permiten al usuario avanzar o retroceder entre las páginas de la lista.

```tsx
import {
    PaginationItemPage,
    PaginationItemPageProps,
} from "fenextjs-component/cjs/Pagination/PaginationItemPage";

<PaginationItemPage
    defaultPage={currentPage}
    nItems={100}
    nItemsPage={10}
    onChangePage={handlePageChange}
/>;
```
