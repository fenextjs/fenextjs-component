#### GridGallery

El componente GridGallery es una galería de elementos dispuestos en una cuadrícula. Toma una lista de elementos de tipo ReactNode y los muestra en una cuadrícula con un estilo personalizado.

```tsx
import {
    GridGallery,
    GridGalleryProps,
} from "fenextjs-component/cjs/GridGallery";

// Lista de elementos para mostrar en la galería
const galleryItems = [
    <img src="imagen1.jpg" alt="Imagen 1" />,
    <img src="imagen2.jpg" alt="Imagen 2" />,
    <img src="imagen3.jpg" alt="Imagen 3" />,
    // Agrega más elementos aquí...
];

<GridGallery
    items={galleryItems}
    className="my-gallery"
    classNameItem="gallery-item"
/>;
```
