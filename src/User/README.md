#### User

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
