#### Modal

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
