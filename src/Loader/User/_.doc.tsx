export default {
    id: "loaderUser",
    idStorybook: "component-loader-user",
    name: "LoaderUser",
    description: "El componente LoaderUser muestra un indicador de carga simulando la carga de información de un usuario, incluyendo imagen, nombre y correo electrónico. Se pueden personalizar las clases CSS para cada parte del componente.",
    props: [
        {
            id: "classNameLoaderUser",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el contenedor del componente del usuario cargando.",
        },
        {
            id: "classNameLoaderUserImg",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar la imagen del indicador de carga del usuario.",
        },
        {
            id: "classNameLoaderUserName",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el nombre del indicador de carga del usuario.",
        },
        {
            id: "classNameLoaderUserEmail",
            type: "string",
            require: false,
            default: "''",
            description: "Clase CSS para personalizar el correo electrónico del indicador de carga del usuario.",
        }
    ],
    extras: [],
    useExample: [
        {
            text: "LoaderUser básico",
            content: `<LoaderUser />`
        },
        {
            text: "LoaderUser con clases personalizadas",
            content: `<LoaderUser classNameLoaderUser="custom-user" classNameLoaderUserImg="custom-img" />`
        }
    ]
};
