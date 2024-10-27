export default {
    id: "table-action-checkbox",
    idStorybook: "component-table-action-checkbox",
    name: "TableActionCheckbox",
    description: "Componente TableActionCheckbox que permite realizar acciones sobre un conjunto de datos seleccionados en una tabla, con la opción de seleccionar todos los elementos usando una casilla de verificación.",
    props: [
        {
            id: "className",
            type: "string",
            require: false,
            default: "\"\"",
            description: "Clase CSS para el contenedor principal del componente.",
        },
        {
            id: "actionAllCheckbox",
            type: "InputCheckboxProps",
            require: false,
            description: "Propiedades para la casilla de verificación que permite seleccionar o deseleccionar todos los elementos.",
        },
        {
            id: "actions",
            type: "((data: T[]) => ReactNode)[]",
            require: false,
            description: "Arreglo de funciones que toman los datos seleccionados como parámetro y devuelven un elemento React. Cada función representa una acción que se puede ejecutar en los datos seleccionados.",
        },
        {
            id: "data",
            type: "T[]",
            require: false,
            description: "Arreglo de datos en el que se aplicarán las acciones definidas.",
        }
    ],
    useExample: [
        {
            text: "Uso básico del TableActionCheckbox",
            content: `<TableActionCheckbox className="my-checkbox" data={[{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]} actionAllCheckbox={{ label: "Select All" }} />`
        },
        {
            text: "Uso con acciones personalizadas",
            content: `<TableActionCheckbox data={[{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]} actions={[
                (selectedData) => <button onClick={() => console.log(selectedData)}>Delete</button>,
                (selectedData) => <button onClick={() => console.log(selectedData)}>Edit</button>
            ]} />`
        }
    ]
};
