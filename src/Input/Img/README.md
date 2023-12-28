#### InputImg

El componente InputImg es una galería de imágenes que permite a los usuarios agregar y eliminar imágenes. Cada imagen se representa mediante el componente InputImg, que permite seleccionar una imagen de la computadora del usuario. El componente InputImg muestra una lista de imágenes con la opción de agregar más imágenes haciendo clic en un botón. Cada imagen tiene una opción para eliminarla de la galería.

```tsx
import { InputImg, InputImgProps } from "fenextjs-component/cjs/Input/Img";

const handleImageChange = (data) => {
    console.log("Image data:", data);
};

const handleImageRemove = () => {
    console.log("Image removed");
};

<InputImg
    defaultValue={{
        fileData: "https://example.com/image.jpg",
        text: "image.jpg",
    }}
    onChange={handleImageChange}
    onRemove={handleImageRemove}
/>;
```
