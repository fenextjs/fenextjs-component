# Fenextjs-component

## Instalación

Para utilizar Fenextjs-component en tu proyecto, debes instalarlo mediante npm. Ejecuta el siguiente comando en la terminal para instalar el paquete:

```bash
npm i fenextjs-component
```

## Agregar Estilos

Una vez que hayas instalado Fenextjs-component, debes importar los estilos en tu proyecto para que los componentes se muestren correctamente. Asegúrate de importar los estilos en tu archivo de código fuente (generalmente en el archivo principal de la aplicación) de la siguiente manera:

```tsx
import "fenextjs-component/styles/index.css";
```

## Storybook

[https://fenextjs-component-storybook.vercel.app/](https://fenextjs-component-storybook.vercel.app/)

## Componentes

<details>
  <summary>Back</summary>
El componente Back es una representación visual de un botón de retroceso (atrás) que permite al usuario navegar a la página anterior en la historia del navegador, utilizar la funcionalidad de Next.js Router, redirigir a una URL específica o simplemente ejecutar una función personalizada al hacer clic en el botón.

```tsx
import { Back, BackProps } from "fenextjs-component/cjs/Back";

/* Ejemplo 1: Uso básico del componente Back con texto personalizado */
<Back>Go Back</Back>;

/* Ejemplo 2: Back con icono personalizado y tipo de redirección a una URL */
<Back
    icon={<img src="/custom-back-icon.svg" alt="Back Icon" />}
    typeOnBack="link"
    link="/previous-page"
>
    Back to Previous Page
</Back>;

/* Ejemplo 3: Back en estado de carga (loader) */
<Back loader>Loading...</Back>;

/* Ejemplo 4: Back deshabilitado */
<Back disabled>Disabled Back</Back>;

/* Ejemplo 5: Back con redirección a la página anterior mediante Next.js Router */
<Back typeOnBack="router">Go to Previous Route</Back>;

/* Ejemplo 6: Back con redirección a la página anterior mediante la historia del navegador */
<Back typeOnBack="history">Go Back in History</Back>;

/* Ejemplo 7: Back con función personalizada */
<Back onClick={() => alert("Custom function executed!")}>
    Custom Click Function
</Back>;
```

</details>

<details>
  <summary>Box</summary>
El componente Box es un componente simple que representa un contenedor que puede ser utilizado para agrupar contenido dentro de una caja con estilos personalizados.

```tsx
import { Box, BoxProps } from "fenextjs-component/cjs/Box";

/* Ejemplo 1: Uso básico del componente Box */
<Box>
    <h2>Contenido dentro del Box</h2>
    <p>Este es un párrafo dentro del Box.</p>
</Box>

/* Ejemplo 2: Box con clase de estilo personalizada */
<Box className="custom-box">
    <h2>Contenido personalizado dentro del Box</h2>
    <p>Este es otro párrafo dentro del Box con estilos personalizados.</p>
</Box>

```

</details>

<details>
  <summary>Breadcrumb</summary>
El componente Breadcrumb es una representación visual de una lista de enlaces que proporcionan una navegación jerárquica en una aplicación web. Cada enlace en la lista se muestra con una etiqueta "a" que permite redirigir al usuario a la URL especificada.

```tsx
import { Breadcrumb, BreadcrumbProps } from "fenextjs-component/cjs/Breadcrumb";

const breadcrumbLinks = [
    { href: "/", children: "Home" },
    { href: "/products", children: "Products" },
    { href: "/products/category", children: "Category" },
];

const handleLinkClick = () => {
    console.log("Breadcrumb link clicked!");
};

/* Ejemplo 1: Uso básico del componente Breadcrumb */
<Breadcrumb links={breadcrumbLinks} />;

/* Ejemplo 2: Breadcrumb con clase de estilo personalizada */
<Breadcrumb
    links={breadcrumbLinks}
    className="custom-breadcrumb"
    classNameItem="custom-breadcrumb-item"
    classNameLink="custom-breadcrumb-link"
/>;

/* Ejemplo 3: Breadcrumb con evento de clic personalizado */
<Breadcrumb
    links={[
        { href: "/", children: "Home" },
        {
            href: "/products",
            children: "Products",
            onClick: handleLinkClick,
        },
        { href: "/products/category", children: "Category" },
    ]}
/>;
```

</details>

<details>
  <summary>Button</summary>

El componente Button es un componente versátil que representa un botón interactivo. Puede renderizarse como un elemento "button" o como un contenedor "div", y proporciona varias opciones de personalización, incluyendo tamaño, icono y estado de carga.

```tsx
import { Button, ButtonProps } from "fenextjs-component/cjs/Button";

const handleButtonClick = () => {
    console.log("Button clicked!");
};

/* Ejemplo 1: Uso básico del componente Button */
<Button onClick={handleButtonClick}>Click Me</Button>;

/* Ejemplo 2: Button con clase de estilo personalizada */
<Button className="custom-button" onClick={handleButtonClick}>
    Custom Button
</Button>;

/* Ejemplo 3: Button con icono */
<Button icon={<i className="fa fa-check" />} onClick={handleButtonClick}>
    Save
</Button>;

/* Ejemplo 4: Button con estado de carga */
<Button loader onClick={handleButtonClick}>
    Loading...
</Button>;

/* Ejemplo 5: Button deshabilitado */
<Button disabled onClick={handleButtonClick}>
    Disabled Button
</Button>;

/* Ejemplo 6: Button como un contenedor <div> */
<Button isBtn={false} onClick={handleButtonClick}>
    Div Button
</Button>;

/* Ejemplo 7: Button con tamaño personalizado */
<Button size="extra-strong" onClick={handleButtonClick}>
    Extra Strong Button
</Button>;

/* Ejemplo 8: Button a lo ancho */
<Button full onClick={handleButtonClick}>
    Full Width Button
</Button>;
```

</details>

<details>
  <summary>Collapse</summary>
<details>
  <summary>Simple</summary>

El componente Collapse es un componente utilizado para mostrar y ocultar contenido, como acordeones, en una interfaz. Permite definir encabezados personalizados para controlar el colapso del contenido y ofrece opciones para mostrar un icono de carga mientras se realiza una acción.

```tsx
import {
    Collapse,
    CollapseProps,
} from "fenextjs-component/cjs/Collapse/Simple";

/* Ejemplo 1: Uso básico del componente Collapse */
<Collapse header="Click to Collapse">
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 2: Collapse con encabezado personalizado */
<Collapse header={<h3>Custom Header</h3>}>
    <p>Custom content</p>
</Collapse>;

/* Ejemplo 3: Collapse deshabilitado */
<Collapse header="Disabled Collapse" disabled>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 4: Collapse activo por defecto */
<Collapse header="Default Active Collapse" defaultActive>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 5: Collapse con tipo "radio" */
<Collapse header="Radio Collapse" type="radio">
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 6: Collapse con icono de carga */
<Collapse header="Collapse with Loader" loader>
    <p>Content goes here</p>
</Collapse>;

/* Ejemplo 7: Collapse con tipo de show "focus" */
<Collapse header="Focus Collapse" show="focus">
    <p>Content goes here</p>
</Collapse>;
```

</details>
<details>
  <summary>Multiple</summary>

El componente CollapseMultiple es una extensión del componente Collapse que permite mostrar múltiples elementos colapsables. Permite proporcionar una lista de elementos (items) que se colapsarán individualmente y ofrece opciones para controlar si los elementos son de tipo "checkbox" o "radio" y compartir el mismo nombre de grupo para que solo uno pueda estar activo a la vez.

```tsx
import {
    CollapseMultiple,
    CollapseMultipleProps,
} from "fenextjs-component/cjs/Collapse/Multiple";

const collapseItems = [
    {
        header: "Item 1",
        children: <p>Content for Item 1</p>,
    },
    {
        header: "Item 2",
        children: <p>Content for Item 2</p>,
    },
    {
        header: "Item 3",
        children: <p>Content for Item 3</p>,
    },
];

/* Ejemplo 1: Uso del componente CollapseMultiple con tipo "checkbox" */
<CollapseMultiple
    items={collapseItems}
    name="checkbox-group"
    type="checkbox"
/>

/* Ejemplo 2: Uso del componente CollapseMultiple con tipo "radio" */
<CollapseMultiple items={collapseItems} name="radio-group" type="radio" />;
```

</details>
</details>

<details>
  <summary>Container</summary>
El componente Container es una caja que envuelve y limita su contenido. Permite personalizar el tamaño del contenedor y aplicar padding inline (espacio interno horizontal) si es necesario.

```tsx
import { Container, ContainerProps } from "fenextjs-component/cjs/Container";

/* Ejemplo 1: Uso del componente Container con tamaño personalizado y padding inline */
<Container customSize={480} usePaddingInline>
    <p>Contenido del contenedor</p>
</Container>;

/* Ejemplo 2: Uso del componente Container sin padding inline */
<Container usePaddingInline={false}>
    <p>Otro contenido del contenedor</p>
</Container>;
```

</details>

<details>
  <summary>ContentLoading</summary>

El componente ContentLoading es un componente que representa un contenedor para el contenido que puede estar cargando o aún no estar disponible. Puede mostrar un spinner de carga mientras se está cargando el contenido, o simplemente mostrar el contenido cuando esté listo.

```tsx
import {
    ContentLoading,
    ContentLoadingProps,
} from "fenextjs-component/cjs/ContentLoading";

const [loading, setLoading] = useState(true);

useEffect(() => {
    // Simulación de una carga asincrónica
    setTimeout(() => {
        setLoading(false);
    }, 3000);
}, []);
<ContentLoading loader={loading}>
    <p>Contenido listo para mostrar</p>
</ContentLoading>;
```

</details>
<details>
  <summary>Counter</summary>

El componente Counter es un contador que muestra un número y, opcionalmente, un texto asociado. El contador anima el cambio del número desde el valor actual hasta el número objetivo con una animación suave de incremento.

```tsx
import { Counter, CounterProps } from "fenextjs-component/cjs/Counter";

/* Ejemplo 1: Uso básico del componente Counter */
<Counter number={1000} text="Total Count" />;

/* Ejemplo 2: Personalización del tiempo de incremento y el número de decimales */
<Counter number={2000.75} text="Sales Count" time={2000} decimal={1} />;

/* Ejemplo 3: Uso de un formato personalizado para el número */
<Counter
    number={3000.12345}
    text="Average Score"
    parseNumber={(n) => `$${n.toFixed(2)}`}
/>;
```

</details>
<details>
  <summary>DropDown</summary>

El componente DropDown es un componente que muestra un contenido colapsable que se despliega hacia arriba o hacia abajo según el espacio disponible en el contenedor padre. Es útil para crear menús desplegables o listas que deben ajustarse automáticamente según el espacio disponible.

```tsx
import { DropDown, DropDownProps } from "fenextjs-component/cjs/DropDown";

/* Ejemplo 1: DropDown hacia abajo */
<DropDown header="Menu">
    <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </ul>
</DropDown>;

/* Ejemplo 2: DropDown hacia arriba */
<DropDown header="Profile" show="focus">
    <div>
        <p>Username: john_doe</p>
        <button>Logout</button>
    </div>
</DropDown>;
```

</details>
<details>
  <summary>ErrorComponent</summary>

El componente ErrorComponent es un componente que se utiliza para mostrar mensajes de error en la interfaz de usuario. Es útil para manejar errores generados por la biblioteca fenextjs-error.

```tsx
import {
    ErrorComponent,
    ErrorComponentProps,
} from "fenextjs-component/cjs/Error";

const handleError: ErrorFenextjs = {
    code: "INPUT_REQUIRED",
    message: "Este campo es obligatorio.",
};

/* Ejemplo 1: Mostrar un mensaje de error */
<ErrorComponent error={handleError} />;

/* Ejemplo 2: Mostrar contenido si no hay error */
<ErrorComponent error={null}>
    <p>Contenido sin errores.</p>
</ErrorComponent>;
```

</details>
<details>
  <summary>Form</summary>

El componente Form es un componente que se utiliza para manejar formularios en React. Proporciona funciones para validar los datos del formulario usando Yup, enviar el formulario y manejar las notificaciones de éxito o error después del envío.

```tsx
import { Form, FormProps } from "fenextjs-component/cjs/Form";

// Datos iniciales del formulario
const initialData = {
    name: "",
    email: "",
    message: "",
};

// Función para manejar la envío del formulario
const handleSubmit: FormProps["onSubmit"] = async (data) => {
    // Aquí deberías realizar la lógica para enviar los datos del formulario al servidor.
    // Retorna una promesa con el resultado del envío del formulario (puede ser un objeto con propiedades type, message, etc.).
    // Simularemos una solicitud exitosa aquí con un retraso de 1 segundo:
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        type: "success",
        message: "Formulario enviado con éxito.",
    };
};

// Función para manejar el evento después del envío exitoso del formulario
const handleAfterSubmit: FormProps["onAfterSubmit"] = (data) => {
    console.log("Formulario enviado con éxito:", data);
    // Aquí puedes realizar acciones después de que el formulario se envíe con éxito.
};

<Form
    data={initialData}
    onSubmit={handleSubmit}
    onAfterSubmit={handleAfterSubmit}
>
    {/* Aquí irían los campos del formulario */}
</Form>;
```

</details>
<details>
  <summary>GridGallery</summary>

El componente GridGallery es una galería de elementos dispuestos en una cuadrícula. Toma una lista de elementos de tipo React.ReactNode y los muestra en una cuadrícula con un estilo personalizado.

```tsx
import {
    GridGallery,
    GridGalleryProps,
} from "fenextjs-component/cjs/GridGallery";

// Lista de elementos para mostrar en la galería
const galleryItems = [
    <img src="imagen1.jpg" alt="Imagen 1" />,
    <img src="imagen2.jpg" alt="Imagen 2" />,
    <img src="imagen3.jpg" alt="Imagen 3" />,
    // Agrega más elementos aquí...
];

<GridGallery
    items={galleryItems}
    className="my-gallery"
    classNameItem="gallery-item"
/>;
```

</details>

<details>
  <summary>Header</summary>
<details>
  <summary>ButtonMenu</summary>

El componente ButtonMenu es un botón desplegable que muestra un menú cuando se hace clic en él. Tiene opciones para personalizar su apariencia, como agregar un ícono y contenido dentro del menú. También puede estar en un estado de carga (loader) y ser desactivado (disabled). El menú se activa mediante una casilla de verificación oculta que se marca o desmarca al hacer clic en el botón.

```tsx
import {
    ButtonMenu,
    ButtonMenuProps,
} from "fenextjs-component/cjs/Header/ButtonMenu";

<ButtonMenu
    loader={false}
    disabled={false}
    defaultActive={false}
    className="custom-btn-menu"
    classNameIcon="custom-icon"
    classNameIconBarClose="custom-icon-bar"
    classNameContent="custom-content"
>
    <img src="logo.png" />
</ButtonMenu>;
```

</details>

<details>
  <summary>ItemMenu</summary>

El componente ItemMenu representa un elemento de menú desplegable que muestra un enlace ("a") y, opcionalmente, un ícono junto al texto del enlace. También puede contener subelementos (subItems) que se mostrarán en un menú desplegable cuando se haga clic en el elemento principal. El elemento principal puede tener un estado predeterminado activo (defaultActive) para mostrar el menú desplegable cuando se muestra inicialmente.

```tsx
import {
    ItemMenu,
    ItemMenuProps,
} from "fenextjs-component/cjs/Header/ItemMenu";

<ItemMenu
    text="Home"
    url="/"
    icon={<i className="fas fa-home" />}
    defaultActive={false}
    className="custom-menu-item"
    classNameA="custom-link"
    classNameText="custom-text"
    classNameIcon="custom-icon"
    subItems={[
        {
            text: "Subitem 1",
            url: "/subitem1",
        },
        {
            text: "Subitem 2",
            url: "/subitem2",
        },
    ]}
/>;
```

</details>

<details>
  <summary>Menu</summary>

El componente Menu es un contenedor que muestra una lista de elementos de menú (ItemMenu) de forma vertical. Cada elemento de menú puede contener un enlace (<a>) con texto y un ícono opcional, así como subelementos que se mostrarán en un menú desplegable cuando se haga clic en el elemento principal.

```tsx
import { Menu, MenuProps } from "fenextjs-component/cjs/Header/Menu";

const menuItems = [
    {
        text: "Home",
        url: "/",
        icon: <i className="fas fa-home" />,
        defaultActive: false,
        subItems: [
            {
                text: "Subitem 1",
                url: "/subitem1",
            },
            {
                text: "Subitem 2",
                url: "/subitem2",
            },
        ],
    },
    {
        text: "About",
        url: "/about",
    },
    {
        text: "Contact",
        url: "/contact",
    },
];
<Menu items={menuItems} className="custom-menu" />;
```

</details>
</details>

<details>
  <summary>Img</summary>

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

</details>

<details>
  <summary>ImgGallery</summary>
  
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

</details>
<details>
  <summary>Input</summary>

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
    defaultValue={1000}
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

El componente InputPhone es un campo de entrada que combina un código de país selecto y un número de teléfono. También puede mostrar una bandera junto al código de país. Utiliza la librería Yup para validar el código de país y el número de teléfono.

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
</details>

<details>
  <summary>InputSelectState</summary>


El componente InputSelectState es un componente que representa un campo de entrada tipo select para seleccionar un estado. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un estado.

```tsx
import {
    InputSelectState,
    InputSelectStateProps,
} from "fenextjs-component/cjs/Input/SelectState";

<InputSelectState
    onChange={handleStateChange}
    className="custom-select"
    placeholder="Seleccione un estado"
    disabled={false}
    countryId={number}
/>;
```


<details>


<details>
  <summary>InputSelectCity</summary>

El componente InputSelectCity es un componente que representa un campo de entrada tipo select para seleccionar un ciudad. Utiliza el componente InputSelect como base para mostrar las opciones disponibles para elegir un ciudad.

```tsx
import {
    InputSelectCity,
    InputSelectCityProps,
} from "fenextjs-component/cjs/Input/SelectCity";

<InputSelectCity
    onChange={handleCityChange}
    className="custom-select"
    placeholder="Seleccione una ciudad"
    disabled={false}
    stateId={number}
/>;
```



<details>



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

El componente InputText es un componente para renderizar campos de entrada de texto. Proporciona funcionalidades como validación de entrada utilizando el esquema Yup, manejo de errores y carga, y opciones adicionales para personalizar la apariencia del campo de entrada.

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
</details>

<details>
  <summary>LayoutGrid</summary>

<details>
  <summary>LayoutGridMenuLeft</summary>
  
El componente LayoutGridMenuLeft es un diseño de cuadrícula con un menú izquierdo que puede estar activo o inactivo, y puede cambiar entre estados activos o inactivos en dispositivos móviles. También puede mostrar un loader (cargador) mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuLeft,
    LayoutGridMenuLeftProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuLeft";

const menuContent = (
    <>
        <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ul>
    </>
);
<LayoutGridMenuLeft
    loader={true}
    menuLeft={menuContent}
    menuLeftActive={true}
    menuLeftMovilActive={false}
    useHeaderButtonMenu={true}
>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuLeft>;
```

</details>

<details>
  <summary>LayoutGridMenuTop</summary>

El componente LayoutGridMenuTop es un diseño de cuadrícula con un menú en la parte superior. También puede mostrar un loader (cargador) mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuTop,
    LayoutGridMenuTopProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuTop";
const menuContent = (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
);
<LayoutGridMenuTop loader={true} menuTop={menuContent}>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuTop>;
```

</details>
<details>
  <summary>LayoutGridMenuTopLeft</summary>

El componente LayoutGridMenuTopLeft es una combinación de los componentes LayoutGridMenuTop y LayoutGridMenuLeft. Este componente permite crear un diseño de cuadrícula con un menú en la parte superior y otro menú a la izquierda, y también puede mostrar un loader mientras se encuentra en el estado de carga.

```tsx
import {
    LayoutGridMenuTopLeft,
    LayoutGridMenuTopLeftProps,
} from "fenextjs-component/cjs/Layout/Grid/GridMenuTopLeft";

const menuContentTop = (
    <>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </>
);

const menuContentLeft = (
    <>
        <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
        </ul>
    </>
);

<LayoutGridMenuTopLeft
    loader={true}
    menuTop={menuContentTop}
    menuLeft={menuContentLeft}
    menuLeftActive={true}
    menuLeftMovilActive={false}
    useHeaderButtonMenu={false}
>
    <div>
        <h1>Welcome to My Website</h1>
        <p>This is the content of the website.</p>
    </div>
</LayoutGridMenuTopLeft>;
```

</details>

</details>

<details>
  <summary>Loader</summary>

El componente Loader que proporcionaste es bastante sencillo y parece ser una representación básica de un elemento cargador. A continuación, te muestro cómo podrías utilizar este componente junto con otros componentes existentes para construir una página simple que muestre un mensaje y un cargador:

```tsx
import { Loader, LoaderProps } from "fenextjs-component/cjs/Loader/Current";

<Loader classNameLoader="custom-loader" />;
```

<details>
  <summary>LoaderLine</summary>

El componente LoaderLine es una representación visual de un indicador de carga en forma de línea horizontal. Es una animación sencilla pero efectiva que se utiliza comúnmente en aplicaciones web para mostrar a los usuarios que el contenido está siendo cargado y que deben esperar antes de que esté disponible.

```tsx
import {
    LoaderLine,
    LoaderLineProps,
} from "fenextjs-component/cjs/Loader/Line";

<LoaderLine classNameLoaderLine="custom-loader-line" height={10} />;
```

</details>

<details>
  <summary>LoaderSpinner</summary>

El componente LoaderSpinner es una representación visual de un indicador de carga en forma de un círculo giratorio. Este tipo de animación es muy común en aplicaciones web para mostrar a los usuarios que el contenido está siendo cargado y que deben esperar antes de que esté disponible.

```tsx
import {
    LoaderSpinner,
    LoaderSpinnerProps,
} from "fenextjs-component/cjs/Loader/Spinner";

<LoaderSpinner classNameLoaderSpinner="custom-spinner" />;
```

</details>

<details>
  <summary>LoaderUser</summary>

El componente LoaderUser es un componente que combina tres instancias del componente LoaderLine para simular la carga de una sección de información de usuario. Cada instancia de LoaderLine representa una parte diferente de la información del usuario, como la imagen, el nombre y el correo electrónico.

```tsx
import {
    LoaderUser,
    LoaderUserProps,
} from "fenextjs-component/cjs/Loader/User";

<LoaderUser
    classNameLoaderUser="custom-loader-user"
    classNameLoaderUserImg="custom-loader-user-img"
    classNameLoaderUserName="custom-loader-user-name"
    classNameLoaderUserEmail="custom-loader-user-email"
/>;
```

</details>

</details>

<details>
  <summary>Media</summary>

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

</details>
<details>
  <summary>Modal</summary>

El componente Modal es un componente de nivel superior que utiliza el componente ModalBase para crear un modal en la pantalla. Este componente toma algunas propiedades adicionales y también incluye un elemento que, al hacer clic en él, activa el modal.

```tsx
import { Modal, ModalProps } from "fenextjs-component/cjs/Modal";

<Modal
    ElementActionModalActive={<button>Open Modal</button>}
    type="center"
    classNameElementActionModalActive="custom-modal-btn"
    classNameModal={{
        className: "custom-modal",
        classNameBg: "custom-modal-bg",
        classNameContent: "custom-modal-content",
        classNameClose: "custom-modal-close",
    }}
>
    <h2>This is a Modal</h2>
    <p>Hello, this is the content of the modal.</p>
    <button>Close Modal</button>
</Modal>;
```

<details>
  <summary>ModalBase</summary>
  
El componente ModalBase es un componente que representa un modal o ventana emergente que se puede mostrar en la pantalla. El modal puede tener diferentes posiciones en la pantalla, como arriba, izquierda, derecha, abajo o en el centro. El modal puede activarse o desactivarse mediante la propiedad active, y también se puede cerrar haciendo clic en el icono de cierre.

```tsx
import { ModalBase, ModalBaseProps } from "fenextjs-component/cjs/Modal/Base";
const [isModalActive, setIsModalActive] = useState(false);

const handleOpenModal = () => {
    setIsModalActive(true);
};

const handleCloseModal = () => {
    setIsModalActive(false);
};

<button onClick={handleOpenModal}>Open Modal</button>;
<ModalBase
    active={isModalActive}
    type="center"
    onClose={handleCloseModal}
    className="custom-modal"
    classNameBg="custom-modal-bg"
    classNameContent="custom-modal-content"
    classNameClose="custom-modal-close"
>
    <h2>This is a Modal</h2>
    <p>Hello, this is the content of the modal.</p>
    <button onClick={handleCloseModal}>Close Modal</button>
</ModalBase>;
```

</details>

</details>

<details>
  <summary>Notification</summary>

El componente Notification es un componente que muestra un mensaje de notificación en la pantalla.
El componente Notification utiliza la propiedad type para aplicar una clase CSS específica relacionada con el tipo de notificación seleccionado. Por ejemplo, si el tipo de notificación es "SUCCESS", se aplicará la clase CSS "fenext-notification-success" al componente, lo que cambiará el estilo de la notificación para que se muestre como una notificación de éxito.

```tsx
import {
    Notification,
    NotificationProps,
} from "fenextjs-component/cjs/Notification/Fixed";

<Notification type="SUCCESS" className="custom-notification">
    ¡Operación exitosa! El artículo se ha guardado correctamente.
</Notification>;
<Notification type="ERROR" className="custom-notification">
    ¡Error! No se pudo completar la operación.
</Notification>;
<Notification type="WARNING" className="custom-notification">
    Advertencia: Esta acción es irreversible.
</Notification>;
<Notification type="NORMAL" className="custom-notification">
    Hola, esta es una notificación normal.
</Notification>;
```

<details>
  <summary>NotificationPop</summary>

El componente NotificationPop es un componente que muestra una notificación emergente en la parte superior o inferior de la pantalla. Este componente utiliza el hook useNotification para obtener y controlar el estado de las notificaciones.

```tsx
import {
    NotificationPop,
    NotificationPopProps,
} from "fenextjs-component/cjs/Notification/Pop";
import {
    useNotification,
    useNotificationProps,
} from "fenextjs-hook/cjs/useNotification";
import { RequestResultTypeProps } from "fenextjs-interface/cjs/Request";
const { pop } = useNotification({ time });

const handleShowNotification = () => {
    pop({
        message: "message",
        type: RequestResultTypeProps.OK,
    });
};
<button onClick={handleShowNotification}>Mostrar Notificación</button>;

<NotificationPop
    typePop="top"
    time={5000}
    classNamePop="custom-notification-pop"
    className="custom-notification"
/>;
```

</details>

</details>

<details>
  <summary>Pagination</summary>

El componente Pagination es un componente que combina los componentes PaginationItemPage y PaginationNPage para ofrecer una paginación completa. Permite al usuario cambiar el número de página y la cantidad de elementos que se mostrarán por página.

```tsx
import {
    Pagination,
    PaginationProps,
} from "fenextjs-component/cjs/Pagination/PaginationAll";

<Pagination
    nItems={totalItems} // Total de elementos a paginar
    nItemsPage={itemsPerPage} // Cantidad de elementos por página
    currentPage={currentPage} // Página actual
    onChangePage={handlePageChange} // Función de cambio de página
    onChangeNPage={handleItemsPerPageChange} // Función de cambio de cantidad de elementos por página
    listNpage={[
        // Lista de opciones para cantidad de elementos por página
        { id: "10", text: "10" },
        { id: "20", text: "20" },
        { id: "50", text: "50" },
        { id: "100", text: "100" },
        { id: "all", text: "All" },
    ]}
/>;
```

<details>
  <summary>PaginationItemPage</summary>

El componente PaginationItemPage es un componente de paginación que te permite navegar por una lista de elementos divididos en páginas. Este componente muestra una serie de botones que permiten al usuario avanzar o retroceder entre las páginas de la lista.

```tsx
import {
    PaginationItemPage,
    PaginationItemPageProps,
} from "fenextjs-component/cjs/Pagination/PaginationItemPage";

<PaginationItemPage
    defaultPage={currentPage}
    nItems={100}
    nItemsPage={10}
    onChangePage={handlePageChange}
/>;
```

</details>
<details>
  <summary>PaginationNPage</summary>

El componente PaginationNPage es un componente que te permite seleccionar la cantidad de elementos que deseas mostrar por página en una paginación. Utiliza el componente InputSelect para ofrecer una lista desplegable con diferentes opciones de cantidad de elementos por página.

```tsx
import {
    PaginationNPage,
    PaginationNPageProps,
} from "fenextjs-component/cjs/Pagination/PaginationNPage";

<PaginationNPage
    listNpage={[
        { id: "10", text: "10" },
        { id: "20", text: "20" },
        { id: "50", text: "50" },
        { id: "100", text: "100" },
        { id: "all", text: "All" },
    ]}
    onChangeNPage={handleItemsPerPageChange}
/>;
```

</details>
</details>
<details>
  <summary>Progress</summary>

<details>
  <summary>ProgressCircle</summary>

El componente ProgressCircle es un componente que muestra un círculo de progreso y opcionalmente el número de progreso.

```tsx
import {
    ProgressCircle,
    ProgressCircleProps,
} from "fenextjs-component/cjs/Progress/Circle";

<ProgressCircle p={progress} showP={true} className="custom-circle" />;
```

</details>

<details>
  <summary>ProgressLine</summary>

El componente ProgressLine es similar al componente ProgressCircle, pero en lugar de mostrar un círculo de progreso, muestra una barra de progreso horizontal.

```tsx
import {
    ProgressLine,
    ProgressLineProps,
} from "fenextjs-component/cjs/Progress/Line";

<ProgressLine p={progress} showP={true} className="custom-progress" />;
```

</details>
</details>

<details>
  <summary>Schedule</summary>

<details>
  <summary>ScheduleDay</summary>

El componente ScheduleDay es un componente que permite al usuario agregar y eliminar rangos de tiempo en un día específico. El componente utiliza el componente InputDateRange para mostrar los campos de entrada de hora de inicio y hora final para cada rango de tiempo. También incluye un botón "Add Time Range" que permite al usuario agregar nuevos rangos de tiempo.

```tsx
import {
    ScheduleDay,
    ScheduleDayProps,
} from "fenextjs-component/cjs/Schedule/Day";

const [schedule, setSchedule] = useState([]);

const handleScheduleChange = (newSchedule) => {
    setSchedule(newSchedule);
};
<ScheduleDay
    value={schedule}
    onChange={handleScheduleChange}
    propsStart={{ label: "Start Time", placeholder: "Start Time" }}
    propsEnd={{ label: "End Time", placeholder: "End Time" }}
    ButtonProps={{ children: "Add Time Range" }}
/>;
```

</details>

<details>
  <summary>ScheduleWeekly</summary>

El componente ScheduleWeekly es un componente que permite al usuario definir un horario semanal para cada día de la semana. El componente utiliza el componente ScheduleDay para permitir al usuario agregar y eliminar rangos de tiempo para cada día.

```tsx
import {
    ScheduleWeekly,
    ScheduleWeeklyProps,
} from "fenextjs-component/cjs/Schedule/Weekly";

const [schedule, setSchedule] = useState({});

const handleScheduleChange = (newSchedule) => {
    setSchedule(newSchedule);
};

<ScheduleWeekly
    title="My Weekly Schedule"
    value={schedule}
    onChange={handleScheduleChange}
/>;
```

</details>

</details>

<details>
  <summary>Share</summary>

El componente Share es una componente que representa un conjunto de botones para compartir contenido en varias redes sociales y servicios de comunicación. Permite compartir un texto específico en diferentes plataformas como WhatsApp, Facebook, Twitter, LinkedIn y correo electrónico.

```tsx
import { Share, ShareProps, ShareListType } from "fenextjs-component/cjs/Share";

const shareText = "¡Echa un vistazo a este increíble sitio web!";
const shareOptions: ShareListType[] = ["whatsapp", "facebook", "twitter"];
<Share
    share={shareText}
    shareList={shareOptions}
    ButtonProps={{
        children: "Compartir",
    }}
    TitleProps={{
        children: "Compartir con tus amigos",
        tag: "h3",
    }}
/>;
```

</details>
<details>
  <summary>Slider</summary>

El componente Slider es un componente que muestra una lista de elementos en forma de carrusel deslizante. Los elementos se muestran en un número específico por fila, y el carrusel puede avanzar automáticamente o mediante flechas de navegación.

```tsx
import { Slider, SliderProps } from "fenextjs-component/cjs/Slider";

const items = [
    <div>Elemento 1</div>,
    <div>Elemento 2</div>,
    <div>Elemento 3</div>,
    // Agregar más elementos aquí
];
<Slider items={items} />;
```

</details>

<details>
  <summary>Steps</summary>

El componente Steps es un componente que muestra una serie de pasos en una lista y el contenido asociado a cada paso. Cada paso se representa mediante un círculo numerado y una etiqueta. El componente también puede mostrar botones de navegación para avanzar o retroceder entre los pasos.

```tsx
import { Steps, StepsProps } from "fenextjs-component/cjs/Steps";

const steps = [
    {
        label: "Step 1",
        content: <div>Content of Step 1</div>,
    },
    {
        label: "Step 2",
        content: <div>Content of Step 2</div>,
        status: "ok",
    },
    {
        label: "Step 3",
        content: <div>Content of Step 3</div>,
        status: "error",
    },
];

const handleNextStep = async (step) => {
    console.log("Next Step:", step);
    // Puedes realizar acciones adicionales aquí antes de avanzar al siguiente paso.
};

const handlePrevStep = async (step) => {
    console.log("Previous Step:", step);
    // Puedes realizar acciones adicionales aquí antes de retroceder al paso anterior.
};
<Steps
    items={steps}
    onNext={handleNextStep}
    onPrev={handlePrevStep}
    stepPos="top"
/>;
```

</details>
<details>
  <summary>Tab</summary>

El componente Tab es un componente que muestra una lista de pestañas y el contenido asociado a cada una de ellas. Cada pestaña se representa mediante un encabezado y un cuerpo, y el contenido del cuerpo cambia según la pestaña seleccionada.

```tsx
import { Tab, TabProps } from "fenextjs-component/cjs/Tab";

const tabs = [
    {
        id: "tab1",
        head: <span>Tab 1</span>,
        body: <div>Content of Tab 1</div>,
    },
    {
        id: "tab2",
        head: <span>Tab 2</span>,
        body: <div>Content of Tab 2</div>,
    },
    {
        id: "tab3",
        head: <span>Tab 3</span>,
        body: <div>Content of Tab 3</div>,
    },
];

const handleTabChange = (item) => {
    console.log("Selected Tab:", item.id);
    // Puedes realizar acciones adicionales aquí cuando se seleccione una pestaña diferente.
};
<Tab items={tabs} onChange={handleTabChange} />;
```

</details>
<details>
  <summary>Table</summary>

El componente Table es una tabla que muestra una lista de datos en forma de filas y columnas. Puedes configurar el encabezado de la tabla, la paginación, y otras opciones a través de sus propiedades.

```tsx
import { Table, TableProps } from "fenextjs-component/cjs/Table";

const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 40, city: "Chicago" },
    // ...
];

const header = [
    { id: "name", th: "Name" },
    { id: "age", th: "Age" },
    { id: "city", th: "City" },
    // ...
];

const handleOrderBy = (order) => {
    // Handle ordering logic here
    console.log("Ordering by:", order);
};

const handleShowHidden = (showHidden) => {
    // Handle show/hide logic here
    console.log("Show/Hide:", showHidden);
};

const handleChecked = (selectedItems) => {
    // Handle selected items logic here
    console.log("Selected Items:", selectedItems);
};
<Table
    name="usersTable"
    items={data}
    header={header}
    pagination={{ totalPages: 5, currentPage: 1 }}
    useCheckbox={true}
    onOrderBy={handleOrderBy}
    onShowHidden={handleShowHidden}
    onChecked={handleChecked}
/>;
```

</details>
<details>
  <summary>Text</summary>

El componente Text es un componente que permite renderizar texto con diferentes estilos según el valor de la propiedad tag. Puedes utilizar este componente para renderizar texto en varios elementos HTML, como párrafos (p), texto enfatizado (em), negrita (b), etc.

```tsx
import { Text, TextProps } from "fenextjs-component/cjs/Text";

<Text tag="p" className="my-text">
    Este es un texto de ejemplo en un párrafo.
</Text>;

<Text tag="strong" className="my-strong-text">
    Este es un texto enfatizado.
</Text>;

<Text tag="em" className="my-emphasized-text">
    Este es un texto en cursiva.
</Text>;
```

</details>
<details>
  <summary>Theme</summary>

El componente Theme es un componente que permite cambiar el tema de una aplicación entre opciones predefinidas. Este componente utiliza el hook useLocalStorage para guardar y recuperar la selección del tema en el almacenamiento local del navegador.

```tsx
import { Theme, ThemeProps } from "fenextjs-component/cjs/Theme";

<Theme
    listTheme={["light", "dark", "blue"]} // Opciones de temas disponibles
    defaultTheme="light" // Tema predeterminado
    className="theme-selector" // Clase CSS adicional para el componente
    classNameItem="theme-item" // Clase CSS adicional para cada elemento del tema
/>;
```

</details>

<details>
  <summary>Title</summary>

El componente Title es un componente que se utiliza para renderizar títulos con diferentes niveles de encabezado (por ejemplo, h1, h2, h3, etc.). Permite especificar el nivel de encabezado y aplicar clases CSS adicionales si es necesario.

```tsx
import { Title, TitleProps } from "fenextjs-component/cjs/Title";

<Title tag="h1" className="main-title">
    Título Principal
</Title>;
<Title tag="h2" className="sub-title">
    Subtítulo
</Title>;
<Title tag="h3" className="sub-sub-title">
    Sub-subtítulo
</Title>;
```

</details>

<details>
  <summary>TwoColSticky</summary>

El componente TwoColSticky es una estructura de dos columnas donde una de las columnas es "sticky" (fija) y la otra es desplazable. La columna sticky permanecerá en su posición mientras la columna de los hijos se desplaza con el contenido.

```tsx
import {
    TwoColSticky,
    TwoColStickyProps,
} from "fenextjs-component/cjs/TwoColSticky";

<TwoColSticky colSticky={<>Col Sticky</>}>Content</TwoColSticky>;
```

</details>
<details>
  <summary>User</summary>

El componente User es un componente que muestra la información de un usuario, como su imagen de perfil, nombre y correo electrónico. También tiene una opción para mostrar un loader mientras se carga la información del usuario.

```tsx
import { User, UserProps } from "fenextjs-component/cjs/User";

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    img: "https://example.com/profile.jpg",
};

<User
    user={user}
    loader={false} // Cambia a true para ver el loader
    className="custom-user"
    classNamePicture="custom-picture"
    classNameImg="custom-img"
    classNameName="custom-name"
    classNameLetter="custom-letter"
    classNameEmail="custom-email"
    classNameLoader={{
        className: "custom-loader",
        classNameSpinner: "custom-spinner",
    }}
/>;
```

</details>

## Developer

[Francisco Blanco](https://franciscoblanco.vercel.app/)

[Gitlab franciscoblancojn](https://gitlab.com/franciscoblancojn)

[Email blancofrancisco34@gmail.com](mailto:blancofrancisco34@gmail.com)

## Repositories

-   [Gitlab](https://gitlab.com/franciscoblancojn/fenextjs-component)
