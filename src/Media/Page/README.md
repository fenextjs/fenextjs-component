#### MediaPage

El componente MediaPage es una interfaz para mostrar y gestionar imágenes. Permite al usuario cargar, seleccionar y eliminar imágenes. Puede usarse en conjunto con InputUpload y proporciona opciones para previsualizar, descargar y eliminar imágenes.

```tsx
import { MediaPage, MediaPageProps } from "fenextjs-component/cjs/Media/Page";

<MediaPage
    defaultValue={[
        { src: "url_de_la_imagen_1", name: "imagen_1.jpg" },
        { src: "url_de_la_imagen_2", name: "imagen_2.jpg" },
    ]}
    multiple={true}
    onChange={handleImageChange}
    onUploadImg={handleImageUpload}
    onDeleteImg={handleImageDelete}
/>;
```
