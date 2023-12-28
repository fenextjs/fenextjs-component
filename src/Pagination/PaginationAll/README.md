#### PaginationAll

El componente Pagination es un componente que combina los componentes PaginationItemPage y PaginationNPage para ofrecer una paginación completa. Permite al usuario cambiar el número de página y la cantidad de elementos que se mostrarán por página.

```tsx
import {
    Pagination,
    PaginationProps,
} from "fenextjs-component/cjs/Pagination/PaginationAll";

<Pagination
    nItems={totalItems} // Total de elementos a paginar
    nItemsPage={itemsPerPage} // Cantidad de elementos por página
    currentPage={currentPage} // Página actual
    onChangePage={handlePageChange} // Función de cambio de página
    onChangeNPage={handleItemsPerPageChange} // Función de cambio de cantidad de elementos por página
    listNpage={[
        // Lista de opciones para cantidad de elementos por página
        { id: "10", text: "10" },
        { id: "20", text: "20" },
        { id: "50", text: "50" },
        { id: "100", text: "100" },
        { id: "all", text: "All" },
    ]}
/>;
```
