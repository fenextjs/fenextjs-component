#### Steps

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
