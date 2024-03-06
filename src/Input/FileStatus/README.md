#### InputFileStatus

El componente InputFileStatus es un componente para cargar archivos. Proporciona una interfaz para arrastrar y soltar archivos o seleccionarlos a través de un botón de carga. También admite vista previa del archivo cargado y muestra el progreso de la carga en caso de que se esté cargando un archivo.

```tsx
import {
    InputFileStatus,
    InputFileStatusProps,
} from "fenextjs-component/cjs/Input/FileStatus";
const handleChange = (data) => {
    console.log("File data:", data);
};

<InputFileStatus
    title="FileStatus File"
    text="Drag and drop your file or click to choose."
    onChange={handleChange}
/>;
```
