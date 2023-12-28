#### Img

El componente Img es una imagen optimizada que permite cargar diferentes versiones de la imagen según el ancho de pantalla del dispositivo. También permite agregar capas superpuestas a la imagen. Si la imagen principal no se carga correctamente, se muestra una imagen alternativa especificada por el usuario.

```tsx
import { Img, ImgProps } from "fenextjs-component/cjs/Img";

<Img
    src="/images/image.jpg"
    srcMin1680="/images/image-large.jpg"
    srcMin768="/images/image-medium.jpg"
    srcMin575="/images/image-small.jpg"
    imgIf404="/images/image-error.jpg"
    name="Example Image"
    className="custom-img"
    classNameImg="img-content"
    layers={[
        { background: "rgba(255, 255, 255, 0.5)", mixBlendMode: "multiply" },
        { filter: "brightness(1.2)" },
    ]}
    onErrorImg={(e) => {
        console.error("Error loading image:", e);
    }}
/>;
```
