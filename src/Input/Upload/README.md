#### InputUpload

El componente InputUpload es un componente para cargar archivos. Proporciona una interfaz para arrastrar y soltar archivos o seleccionarlos a través de un botón de carga. También admite vista previa del archivo cargado y muestra el progreso de la carga en caso de que se esté cargando un archivo.

```tsx
import {
    InputUpload,
    InputUploadProps,
} from "fenextjs-component/cjs/Input/Upload";
const handleChange = (data) => {
    console.log("File data:", data);
};

<InputUpload
    title="Upload File"
    text="Drag and drop your file or click to choose."
    onChange={handleChange}
/>;
```
