import { Field } from "payload";

const Typography: Field[] = [
    {
        type: "row",
        fields: [
            {
                type: "select",
                name: "textAlign",
                label: "Text Align",
                options: [
                    { label: "Left", value: "left" },
                    { label: "Center", value: "center" },
                    { label: "Right", value: "right" },
                    { label: "Justify", value: "justify" }
                ],
                defaultValue: "left"
            },
            {
                type: "select",
                name: "fontWeight",
                label: "Font Weight",
                options: [
                    { label: "Light (300)", value: "300" },
                    { label: "Normal (400)", value: "400" },
                    { label: "Medium (500)", value: "500" },
                    { label: "Semi-Bold (600)", value: "600" },
                    { label: "Bold (700)", value: "700" },
                    { label: "Extra Bold (800)", value: "800" }
                ],
                defaultValue: "400"
            }
        ]
    },
    {
        type: "row",
        fields: [
            {
                type: "text",
                name: "fontSize",
                label: "Font Size (e.g. 16px, 1.2rem)",
                admin: {
                    placeholder: "16px or 1rem"
                }
            },
            {
                type: "text",
                name: "lineHeight",
                label: "Line Height (e.g. 1.5, 24px)",
                admin: {
                    placeholder: "1.5 or 150%"
                }
            }
        ]
    },
    {
        type: "row",
        fields: [
            {
                type: "text",
                name: "color",
                label: "Text Color (Hex, RGB, HSL)",
                admin: {
                    placeholder: "#000000 or rgba(0,0,0,0.8)"
                }
            },
            {
                type: "select",
                name: "textTransform",
                label: "Text Transform",
                options: [
                    { label: "None", value: "none" },
                    { label: "Capitalize", value: "capitalize" },
                    { label: "Uppercase", value: "uppercase" },
                    { label: "Lowercase", value: "lowercase" }
                ],
                defaultValue: "none"
            }
        ]
    }
];

export default Typography;
