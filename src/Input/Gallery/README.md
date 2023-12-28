#### InputGallery

El componente InputGallery es una galería de imágenes que permite a los usuarios agregar y eliminar imágenes. Cada imagen se representa mediante el componente InputImg, que permite seleccionar una imagen de la computadora del usuario. El componente InputGallery muestra una lista de imágenes con la opción de agregar más imágenes haciendo clic en un botón. Cada imagen tiene una opción para eliminarla de la galería.

```tsx
import {
    InputGallery,
    InputGalleryProps,
} from "fenextjs-component/cjs/Input/Gallery";

const handleGalleryChange = (items) => {
    console.log("Gallery items:", items);
};

<InputGallery
    defaultValue={[
        {
            fileData: "https://example.com/image1.jpg",
            text: "image1.jpg",
        },
        {
            fileData: "https://example.com/image2.jpg",
            text: "image2.jpg",
        },
    ]}
    onChange={handleGalleryChange}
    textBtn="Add More Images"
/>;
```
