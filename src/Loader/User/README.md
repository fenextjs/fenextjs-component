#### LoaderUser

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
