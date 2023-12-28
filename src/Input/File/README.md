#### InputFile

El componente InputFile es un campo de entrada que permite a los usuarios cargar archivos. Al seleccionar un archivo, se muestra el nombre del archivo y se inicia una función de carga para subir el archivo al servidor. Además, el componente puede mostrar el progreso de carga y manejar errores durante el proceso de carga.

```tsx
import { InputFile, InputFileProps } from "fenextjs-component/cjs/Input/File";

const handleFileChange = (file) => {
    console.log("Selected file:", file);
};

const handleUploadFile = async (data) => {
    // Simulando la carga de archivo en el servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        fileData: "https://example.com/myfile.pdf",
        text: "myfile.pdf",
    };
};
<InputFile
    label="Select a file:"
    onChange={handleFileChange}
    onUploadFile={handleUploadFile}
    accept={[".pdf", ".jpg", ".png"]}
>
    <span>Click to browse files</span>
</InputFile>;
```
