#### Media

<details>
  <summary>MediaInput</summary>
  
El componente MediaInput es una herramienta para seleccionar y cargar imágenes. Puede manejar tanto una sola imagen como múltiples imágenes. Proporciona una interfaz de usuario para cargar y previsualizar imágenes, y también se integra con Modal y MediaPage para una experiencia de usuario más completa.

```tsx
import {
    MediaInput,
    MediaInputProps,
} from "fenextjs-component/cjs/Media/Input";

<MediaInput
    titleView="Seleccionar Imagen"
    textView="Haga clic para seleccionar o cargar una imagen."
    defaultValue={[
        { src: "url_de_la_imagen_1", name: "imagen_1.jpg" },
        { src: "url_de_la_imagen_2", name: "imagen_2.jpg" },
    ]}
    multiple={true}
    onChange={handleImageChange}
    ButtonUploadProps={{
        children: "Cargar Imagen",
        full: true,
    }}
    MediaPageProps={{
        title: "Galería de Imágenes",
        description: "Seleccione las imágenes para su galería.",
        images: [
            { src: "url_de_la_imagen_1", name: "imagen_1.jpg" },
            { src: "url_de_la_imagen_2", name: "imagen_2.jpg" },
        ],
    }}
/>;
```

</details>

<details>
  <summary>MediaPage</summary>

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

</details>
