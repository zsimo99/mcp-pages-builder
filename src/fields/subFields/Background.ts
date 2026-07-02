import { Field } from "payload";

const Background: Field[] = [
    {
        type: "row",
        fields: [
            {
                type: "text",
                name: "bg",
                label: "Background Color (Hex, RGB, HSL)",
                admin: {
                    placeholder: "#ffffff or rgba(255,255,255,1)"
                }
            },
            {
                type: "relationship",
                name: "bgImage",
                label: "Background Image",
                relationTo: "media",
            }
        ]
    },
    {
        type: "row",
        fields: [
            {
                type: "select",
                name: "bgSize",
                label: "Background Image Size",
                options: [
                    { label: "Cover", value: "cover" },
                    { label: "Contain", value: "contain" },
                    { label: "Auto", value: "auto" }
                ],
                defaultValue: "cover",
                admin: {
                    condition: (data, siblingData) => {
                        return !!siblingData?.backgroundImage
                    }
                }
            },
            {
                type: "select",
                name: "bgPosition",
                label: "Background Image Position",
                options: [
                    { label: "Center", value: "center" },
                    { label: "Top", value: "top" },
                    { label: "Bottom", value: "bottom" },
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" }
                ],
                defaultValue: "center",
                admin: {
                    condition: (data, siblingData) => {
                        return !!siblingData?.backgroundImage
                    }
                }
            },
            {
                type: "select",
                name: "bgRepeat",
                label: "Background Image Repeat",
                options: [
                    { label: "No Repeat", value: "no-repeat" },
                    { label: "Repeat", value: "repeat" },
                    { label: "Repeat X", value: "repeat-x" },
                    { label: "Repeat Y", value: "repeat-y" }
                ],
                defaultValue: "no-repeat",
                admin: {
                    condition: (data, siblingData) => {
                        return !!siblingData?.backgroundImage
                    }
                }
            }
        ]
    }, {
        type: "checkbox",
        label: "Overlay",
        name: "overlay"
    }
    ,
    {
        type: "row",
        fields: [
            {
                type: "text",
                name: "overlayColor",
                label: "Overlay Color (Hex, RGB, HSL)",
                admin: {
                    placeholder: "rgba(0, 0, 0, 0.4)",
                    condition: (data, siblingData) => {
                        return siblingData?.overlay === true
                    }

                }
            },
            {
                type: "number",
                name: "overlayOpacity",
                label: "Overlay Opacity (0 - 1)",
                min: 0,
                max: 1,
                defaultValue: 0.5,
                admin: {
                    placeholder: "0.5",
                    condition: (data, siblingData) => {
                        return siblingData?.overlay === true
                    }
                }
            }
        ]
    }
];

export default Background;
