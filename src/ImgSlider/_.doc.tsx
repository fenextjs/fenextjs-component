export default {
    id: "img-slider",
    idStorybook: "component-img-slider",
    name: "ImgSlider",
    description:
        "El componente ImgSlider permite navegar entre una lista de imágenes utilizando un sistema de pasos. Se puede controlar el paso actual y navegar entre las imágenes usando botones de paginación.",
    props: [
        {
            id: "imgs",
            type: "ImgProps[]",
            require: true,
            description: "Lista de imágenes que se muestran en el deslizador.",
        },
        {
            id: "step",
            type: "number",
            require: false,
            default: "0",
            description: "Paso actual en el deslizador de imágenes.",
        },
        {
            id: "setStep",
            type: "(e: number) => void",
            require: false,
            description:
                "Función para actualizar el paso actual en el deslizador.",
        },
        {
            id: "className",
            type: "string",
            require: false,
            default: "''",
            description:
                "Clase CSS para personalizar el contenedor del deslizador.",
        },
    ],
    useExample: [
        {
            text: "Deslizador básico",
            content: `<ImgSlider imgs={imageList} />`,
        },
        {
            text: "Deslizador con paso controlado",
            content: `<ImgSlider imgs={imageList} step={2} setStep={(e) => console.log(e)} />`,
        },
    ],
};
