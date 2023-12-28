#### ImgGallery

El componente ImgGallery es una galería de imágenes que muestra una cuadrícula de imágenes en forma de GridGallery y permite mostrar más imágenes cuando se hace clic en el botón "Show more pictures".

```tsx
import { ImgGallery, ImgGalleryProps } from "fenextjs-component/cjs/ImgGallery";

const images = [
    {
        src: "https://example.com/image1.jpg",
        alt: "Image 1",
    },
    {
        src: "https://example.com/image2.jpg",
        alt: "Image 2",
    },
    // ... Add more images here
];
const buttonProps = {
    children: "Load more images",
    // Add other props for the Button component here if needed
};
<ImgGallery imgs={images} buttonShowMoreImg={buttonProps} />;
```
