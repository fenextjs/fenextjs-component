#### Input

<details>
  <summary>InputAutocompleteGoogleMaps</summary>

El componente InputAutocompleteGoogleMaps es un campo de entrada que utiliza el servicio de Autocompletado de Google Maps para buscar ubicaciones y autocompletar direcciones. Al ingresar una dirección o ubicación en el campo de entrada, se mostrarán sugerencias proporcionadas por Google Maps.

```tsx
import {
    InputAutocompleteGoogleMaps,
    InputAutocompleteGoogleMapsProps,
} from "fenextjs-component/cjs/Input/AutocompleteGoogleMaps";

const handleAutocompleteChange = (address) => {
    console.log("Selected address:", address);
};
<InputAutocompleteGoogleMaps
    onChange={handleAutocompleteChange}
    defaultValue={{
        formatted_address: "1600 Amphitheatre Parkway, Mountain View, CA",
        geometry: {
            location: {
                lat: 37.423576,
                lng: -122.084189,
            },
        },
    }}
/>;
```

</details>

<details>
  <summary>InputCheckbox</summary>

El componente InputCheckbox es un campo de entrada de tipo checkbox. Permite al usuario seleccionar o deseleccionar una opción.

```tsx
import {
    InputCheckbox,
    InputCheckboxProps,
} from "fenextjs-component/cjs/Input/Checkbox";

const handleCheckboxChange = (checked) => {
    console.log("Checkbox is checked:", checked);
};

const handleValidation = async () => {
    // Perform validation logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an asynchronous operation
    console.log("Validation completed.");
};
<InputCheckbox
    label="Enable Feature"
    onChange={handleCheckboxChange}
    onValidateCheck={handleValidation}
/>;
```

</details>

<details>
  <summary>InputDate</summary>

El componente InputDate es un campo de entrada que permite al usuario seleccionar una fecha o hora. Es compatible con varios tipos de fechas, como "date", "month", "week" y "time".

```tsx
import { InputDate, InputDateProps } from "fenextjs-component/cjs/Input/Date";

const handleDateChange = (date) => {
    console.log("Selected date:", date);
};
<InputDate type="date" label="Select a date:" onChange={handleDateChange} />;
```

</details>

<details>
  <summary>InputDateRange</summary>

El componente InputDateRange es un campo de entrada que permite al usuario seleccionar un rango de fechas. Está compuesto por dos campos de entrada InputDate, uno para la fecha de inicio del rango y otro para la fecha de finalización del rango.

```tsx
import {
    InputDateRange,
    InputDateRangeProps,
} from "fenextjs-component/cjs/Input/DateRange";

const handleDateRangeChange = (dateRange) => {
    console.log("Selected date range:", dateRange);
};
<InputDateRange
    label="Select a date range:"
    onChange={handleDateRangeChange}
/>;
```

</details>

<details>
  <summary>InputFile</summary>

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

</details>

<details>
  <summary>InputGallery</summary>

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

</details>

<details>
  <summary>InputImg</summary>

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

</details>

<details>
  <summary>InputNumber</summary>

El componente InputNumber es un campo de entrada que permite a los usuarios ingresar y mostrar números. También proporciona botones para aumentar o disminuir el valor numérico.

```tsx
import {
    InputNumber,
    InputNumberProps,
} from "fenextjs-component/cjs/Input/Number";

<InputNumber
    defaultValue={5}
    onChange={handleNumberChange}
    useBtnIncreaseDecrease={true}
    min={0}
    max={10}
/>;
```

</details>

<details>
  <summary>InputNumberCount</summary>

El componente InputNumberCount es un campo de entrada de texto que permite a los usuarios ingresar y mostrar números en un formato con símbolos de moneda al inicio y al final del número.

```tsx
import {
    InputNumberCount,
    InputNumberCountProps,
} from "fenextjs-component/cjs/Input/NumberCount";

<InputNumberCount
    defaultValue="1000"
    onChange={handleNumberChange}
    symbolInit="€"
/>;
```

</details>

<details>
  <summary>InputPassword</summary>

El componente InputPassword es un campo de entrada de texto que se utiliza para contraseñas y oculta el texto ingresado a menos que el usuario elija revelarlo haciendo clic en un ícono de ojo.

```tsx
import {
    InputPassword,
    InputPasswordProps,
} from "fenextjs-component/cjs/Input/Password";

<InputPassword placeholder="Enter password" />;
```

</details>
<details>
  <summary>InputPhone</summary>

El componente InputPhone es un campo de entrada que combina un código de país selecto y un número de teléfono. También puede mostrar una bandera junto al código de país. 

```tsx
import {
    InputPhone,
    InputPhoneProps,
} from "fenextjs-component/cjs/Input/Phone";

<InputPhone label="Phone Number" />;
```

</details>
<details>
  <summary>InputRadio</summary>

El componente InputRadio es una serie de botones de opción que permiten al usuario seleccionar una opción de una lista. Cada botón de opción está asociado a un ítem que contiene un id y una etiqueta label.

```tsx
import {
    InputRadio,
    InputRadioProps,
} from "fenextjs-component/cjs/Input/Phone";

const items = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
];

const handleRadioChange = (selectedItem) => {
    console.log("Selected Item:", selectedItem);
};
<InputRadio
    items={items}
    defaultValue={items[0]}
    onChange={handleRadioChange}
/>;
```

</details>

<details>
  <summary>InputRange</summary>

El componente InputRange es una barra de desplazamiento (slider) que permite al usuario seleccionar un valor dentro de un rango determinado. El rango de valores se especifica mediante las propiedades min y max, y el valor seleccionado se puede controlar mediante las propiedades defaultValue o value.

```tsx
import {
    InputRange,
    InputRangeProps,
} from "fenextjs-component/cjs/Input/Range";

<InputRange
    min={0}
    max={100}
    defaultValue={50}
    step={5}
    onChange={handleRangeChange}
    showNumber="bottom"
/>;
```

</details>
<details>
  <summary>InputRate</summary>

El componente InputRate es una barra de desplazamiento (slider) que permite al usuario seleccionar un valor dentro de un rango determinado. El rango de valores se especifica mediante las propiedades min y max, y el valor seleccionado se puede controlar mediante las propiedades defaultValue o value.

```tsx
import { InputRate, InputRateProps } from "fenextjs-component/cjs/Input/Rate";

<InputRate defaultValue={3.5} onChange={handleRateChange} />;
```

</details>
<details>
  <summary>InputSearch</summary>

El componente InputSearch es una caja de entrada de búsqueda que muestra una lista de resultados sugeridos mientras el usuario escribe en ella. Permite realizar búsquedas basadas en la entrada del usuario y muestra una lista de resultados sugeridos que se obtienen a través de la función onSearch. El usuario puede seleccionar un resultado de la lista o presionar "Enter" para realizar una acción específica.

```tsx
import {
    InputSearch,
    InputSearchProps,
} from "fenextjs-component/cjs/Input/Search";
const handleSearch = async (searchValue) => {
    // Aquí se realizaría una búsqueda real utilizando el valor de búsqueda.
    // La función debe devolver una promesa que resuelva en un arreglo de resultados sugeridos.
    // En este ejemplo, se utiliza un conjunto de resultados simulados.
    const fakeSearchResults = [
        { id: "1", text: "Result 1", content: <div>Content of Result 1</div> },
        { id: "2", text: "Result 2", content: <div>Content of Result 2</div> },
        { id: "3", text: "Result 3", content: <div>Content of Result 3</div> },
    ];

    // Simulación de tiempo de espera para mostrar el indicador de carga
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return fakeSearchResults;
};

const handleResultClick = (selectedResult) => {
    console.log("Selected Result:", selectedResult);
};

<InputSearch
    placeholder="Search..."
    onSearch={handleSearch}
    onClickSearch={handleResultClick}
/>;
```

</details>
<details>
  <summary>InputSelect</summary>

El componente InputSelect es un componente de entrada que muestra una lista desplegable de opciones cuando el usuario interactúa con él. Permite seleccionar una opción de la lista o buscar opciones específicas a medida que el usuario escribe en el campo de entrada.

```tsx
import {
    InputSelect,
    InputSelectProps,
} from "fenextjs-component/cjs/Input/Select";

const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
    { id: "4", text: "Option 4" },
    { id: "5", text: "Option 5" },
];

const handleSelectChange = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
};

<InputSelect options={options} onChange={handleSelectChange} />;
```

</details>

<details>
  <summary>InputSelectCountry</summary>

El componente InputSelectCountry es un componente que representa un campo de entrada tipo select para seleccionar un país. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un país.

```tsx
import {
    InputSelectCountry,
    InputSelectCountryProps,
} from "fenextjs-component/cjs/Input/SelectCountry";

<InputSelectCountry
    onChange={handleCountryChange}
    className="custom-select"
    placeholder="Seleccione un país"
    disabled={false}
/>;
```

</details>

<details>
  <summary>InputSelectCountryMultiple</summary>

El componente InputSelectCountryMultiple es una función que representa un campo de entrada tipo select múltiple para seleccionar múltiples países. Utiliza el componente InputSelectMultiple como base para mostrar las opciones disponibles para elegir múltiples países.

```tsx
import {
    InputSelectCountryMultiple,
    InputSelectCountryMultipleProps,
} from "fenextjs-component/cjs/Input/SelectCountryMultiple";

<InputSelectCountryMultiple
    onChange={handleCountryChange}
    className="custom-select"
    placeholder="Seleccione un país"
    disabled={false}
/>;
```

</details>
<details>
  <summary>InputSelectCSC</summary>

El componente InputSelectCSC es un componente de entrada que se utiliza para seleccionar un país, estado y ciudad en cascada (CSC). Permite al usuario elegir un país y, a continuación, se cargan automáticamente las opciones de estados disponibles para ese país. A continuación, cuando se selecciona un estado, se cargan las opciones de ciudades disponibles para ese estado.

```tsx
import {
    InputSelectCSC,
    InputSelectCSCProps,
} from "fenextjs-component/cjs/Input/SelectCSC";

<InputSelectCSC onChange={handleCSCChange} />;
```

</details>
<details>
  <summary>InputSelectMultiple</summary>

El componente InputSelectMultiple es un componente de entrada que permite al usuario seleccionar múltiples opciones de una lista desplegable. El componente muestra las opciones disponibles en un campo de entrada tipo "select" y permite agregar o eliminar opciones seleccionadas en una lista debajo del campo de entrada.

```tsx
import {
    InputSelectMultiple,
    InputSelectMultipleProps,
} from "fenextjs-component/cjs/Input/SelectMultiple";
const handleSelectMultipleChange = (selectedOptions) => {
    console.log("Selected Options:", selectedOptions);
};

const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
    // ... Add more options as needed
];
<InputSelectMultiple options={options} onChange={handleSelectMultipleChange} />;
```

</details>
<details>
  <summary>InputSelectOption</summary>

El componente InputSelectOption es un componente que representa una opción en una lista desplegable (InputSelect). Puede mostrar texto e imágenes, y también puede incluir un botón de eliminar si se utiliza en una lista de selección múltiple (InputSelectMultiple).

```tsx
import {
    InputSelectOption,
    InputSelectOptionProps,
} from "fenextjs-component/cjs/Input/SelectOption";

const handleOptionClick = (item) => {
    console.log("Clicked Option:", item);
};

const handleOptionDelete = (item) => {
    console.log("Deleted Option:", item);
};

<InputSelectOption
    id={2}
    text="Option 2"
    img="url/to/image"
    onClick={handleOptionClick}
    onDelete={handleOptionDelete}
    type="multiple"
/>;
```

</details>

<details>
  <summary>InputSwich</summary>

El componente InputSwich es un componente que representa un interruptor o switch de selección. Permite al usuario cambiar entre dos estados (encendido/apagado) mediante una animación de deslizamiento.

```tsx
import {
    InputSwich,
    InputSwichProps,
} from "fenextjs-component/cjs/Input/Swich";
const handleChange = (isChecked) => {
    console.log("Switch is checked:", isChecked);
};

const handleValidateCheck = async () => {
    // Simulación de una operación de validación asincrónica
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Switch is being validated...");
};

<InputSwich onChange={handleChange} defaultValue={false} />;
<InputSwich onChange={handleChange} defaultValue={true} disabled />;
<InputSwich
    onChange={handleChange}
    defaultValue={false}
    onValidateCheck={handleValidateCheck}
/>;
```

</details>

<details>
  <summary>InputText</summary>

El componente InputText es un componente para renderizar campos de entrada de texto. 
```tsx
import { InputText, InputTextProps } from "fenextjs-component/cjs/Input/Text";
const handleChange = (value) => {
    console.log("Input value changed:", value);
};

const handleBlur = (value) => {
    console.log("Input blurred:", value);
};

const handleEnter = () => {
    console.log("Enter key pressed in input");
};

const handleCustomValidation = async (value) => {
    if (value === "forbidden") {
        throw new Error("Value is forbidden!");
    }
    return value;
};
<InputText
    label="Name"
    placeholder="Enter your name"
    onChange={handleChange}
    onBlur={handleBlur}
    onEnter={handleEnter}
/>;
<InputText
    label="Custom Validation"
    placeholder="Type 'forbidden' to see error"
    onChange={handleChange}
    onChangeValidate={handleCustomValidation}
/>;
```

</details>

<details>
  <summary>InputUpload</summary>

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

</details>
