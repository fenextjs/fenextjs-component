#### InputSearch

El componente InputSearch es una caja de entrada de búsqueda que muestra una lista de resultados sugeridos mientras el usuario escribe en ella. Permite realizar búsquedas basadas en la entrada del usuario y muestra una lista de resultados sugeridos que se obtienen a través de la función onSearch. El usuario puede seleccionar un resultado de la lista o presionar "Enter" para realizar una acción específica.

```tsx
import {
    InputSearch,
    InputSearchProps,
} from "fenextjs-component/cjs/Input/Search";
const handleSearch = async (searchValue) => {
    // Aquí se realizaría una búsqueda real utilizando el valor de búsqueda.
    // La función debe devolver una promesa que resuelva en un arreglo de resultados sugeridos.
    // En este ejemplo, se utiliza un conjunto de resultados simulados.
    const fakeSearchResults = [
        { id: "1", text: "Result 1", content: <div>Content of Result 1</div> },
        { id: "2", text: "Result 2", content: <div>Content of Result 2</div> },
        { id: "3", text: "Result 3", content: <div>Content of Result 3</div> },
    ];

    // Simulación de tiempo de espera para mostrar el indicador de carga
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return fakeSearchResults;
};

const handleResultClick = (selectedResult) => {
    console.log("Selected Result:", selectedResult);
};

<InputSearch
    placeholder="Search..."
    onSearch={handleSearch}
    onClickSearch={handleResultClick}
/>;
```
