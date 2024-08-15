#### Form

El componente Form es un componente que se utiliza para manejar formularios en React. Enviar el formulario y manejar las notificaciones de éxito o error después del envío.

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
