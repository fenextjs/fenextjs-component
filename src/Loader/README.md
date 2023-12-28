#### Loader

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
