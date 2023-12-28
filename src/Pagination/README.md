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

<details>
  <summary>PaginationItemPage</summary>

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

</details>
<details>
  <summary>PaginationNPage</summary>

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

</details>
