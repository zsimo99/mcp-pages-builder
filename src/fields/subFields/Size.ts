import { Field } from "payload";

const Size: Field[] = [
    {
        type: "row",
        fields: [
            {
                type: "group",
                name: "width",
                label: "Width",
                fields: [
                    {
                        type: "row",
                        fields: [
                            {
                                type: "number",
                                name: "val",
                                label: "Value",
                            },
                            {
                                type: "select",
                                name: "unit",
                                label: "Unit",
                                options: [
                                    { label: "px", value: "px" },
                                    { label: "%", value: "%" },
                                    { label: "vw", value: "vw" },
                                    { label: "vh", value: "vh" },
                                ],
                                defaultValue: "px",
                            }
                        ]
                    }
                ]
            },
            {
                type: "group",
                name: "height",
                label: "Height",
                fields: [
                    {
                        type: "row",
                        fields: [
                            {
                                type: "number",
                                name: "val",
                                label: "Value",
                            },
                            {
                                type: "select",
                                name: "unit",
                                label: "Unit",
                                options: [
                                    { label: "px", value: "px" },
                                    { label: "%", value: "%" },
                                    { label: "vw", value: "vw" },
                                    { label: "vh", value: "vh" },
                                ],
                                defaultValue: "px",
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default Size;
