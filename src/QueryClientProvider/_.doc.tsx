export default {
    id: "alert",
    idStorybook: "component-alert",
    name: "QueryClientProvider",
    description:
        "El componente QueryClientProvider se utiliza para cargar la libreria @tanstack/react-query, se recomienda usar en el archivo principal.",
    props: [
        {
            id: "children",
            type: "ReactNode",
            require: true,
            description: "Contenido.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `<QueryClientProvider>Contenido</QueryClientProvider>`,
        },
    ],
};
