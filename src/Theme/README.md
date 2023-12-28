#### Theme

El componente Theme es un componente que permite cambiar el tema de una aplicación entre opciones predefinidas. Este componente utiliza el hook useLocalStorage para guardar y recuperar la selección del tema en el almacenamiento local del navegador.

```tsx
import { Theme, ThemeProps } from "fenextjs-component/cjs/Theme";

<Theme
    listTheme={["light", "dark", "blue"]} // Opciones de temas disponibles
    defaultTheme="light" // Tema predeterminado
    className="theme-selector" // Clase CSS adicional para el componente
    classNameItem="theme-item" // Clase CSS adicional para cada elemento del tema
/>;
```
