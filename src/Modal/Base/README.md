#### ModalBase

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
