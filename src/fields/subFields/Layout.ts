import { Field } from "payload";

const Layout: Field[] = [
    // display
    {
        type: "select",
        name: "display",
        options: [
            {
                label: "Flex",
                value: "flex"
            },
            {
                label: "Block",
                value: "block"
            }
        ],
        defaultValue: "flex"
    },
    {
        type: "row",
        fields: [
            // flexDirection
            {
                type: "select",
                name: "fd",
                label: "Flex Direction",
                options: [
                    {
                        label: "Row",
                        value: "row"
                    },
                    {
                        label: "Column",
                        value: "column"
                    },
                    {
                        label: "Row Reverse",
                        value: "row-reverse"
                    },
                    {
                        label: "Column Reverse",
                        value: "column-reverse"
                    },
                ],
                defaultValue: "row",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.display === "flex"
                    }
                }
            },
            // justifyContent
            {
                type: "select",
                name: "jc",
                label: "Justify Content",
                options: [
                    {
                        label: "Flex Start",
                        value: "flex-start"
                    },
                    {
                        label: "Flex End",
                        value: "flex-end"
                    },
                    {
                        label: "Center",
                        value: "center"
                    },
                    {
                        label: "Space Between",
                        value: "space-between"
                    },
                    {
                        label: "Space Around",
                        value: "space-around"
                    }
                ],
                defaultValue: "flex-start",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.display === "flex"
                    }
                }
            },
            // alignItems
            {
                type: "select",
                name: "ai",
                label: "Align Items",
                options: [
                    {
                        label: "Flex Start",
                        value: "flex-start"
                    },
                    {
                        label: "Flex End",
                        value: "flex-end"
                    },
                    {
                        label: "Center",
                        value: "center"
                    },
                    {
                        label: "Stretch",
                        value: "stretch"
                    }
                ],
                defaultValue: "stretch",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.display === "flex"
                    }
                }
            },
        ]
    },
    // gap property
    {
        type: "row",
        fields: [
            {
                type: "number",
                name: "cgap",
                label: "Column Gap",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.display === "flex"
                    }
                },
            },
            {
                type: "number",
                name: "rgap",
                label: "Row Gap",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.display === "flex"
                    }
                },
            }
        ]
    },
    // wrap 
    {
        type: "select",
        name: "wrap",
        label: "Wrap",
        options: [
            {
                label: "Wrap",
                value: "wrap"
            },
            {
                label: "No Wrap",
                value: "nowrap"
            }
        ],
        defaultValue: "wrap",
        admin: {
            condition: (data, siblingData) => {
                return siblingData?.display === "flex"
            }
        }
    }
]

export default Layout;