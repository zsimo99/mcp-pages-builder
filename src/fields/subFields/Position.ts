import { Field } from "payload";

const Position: Field[] = [

    {
        type: "select",
        name: "position",
        label: "Position",
        options: [
            {
                label: "Static",
                value: "static"
            },
            {
                label: "Relative",
                value: "relative"
            },
            {
                label: "Absolute",
                value: "absolute"
            },
            {
                label: "Fixed",
                value: "fixed"
            },
            {
                label: "Sticky",
                value: "sticky"
            },
        ],
        defaultValue: "static"
    },
    {
        type: "row",
        fields: [
            // top
            {
                type: "number",
                name: "top",
                label: "Top",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.position === "absolute" || siblingData?.position === "fixed" || siblingData?.position === "sticky" || siblingData?.position === "relative"
                    }
                }
            },
            // bottom
            {
                type: "number",
                name: "bottom",
                label: "Bottom",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.position === "absolute" || siblingData?.position === "fixed" || siblingData?.position === "sticky" || siblingData?.position === "relative"
                    }
                }
            },
            // left
            {
                type: "number",
                name: "left",
                label: "Left",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.position === "absolute" || siblingData?.position === "fixed" || siblingData?.position === "sticky" || siblingData?.position === "relative"
                    }
                }
            },
            // right
            {
                type: "number",
                name: "right",
                label: "Right",
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.position === "absolute" || siblingData?.position === "fixed" || siblingData?.position === "sticky" || siblingData?.position === "relative"
                    }
                }
            },
        ]
    },
    {
        type: "number",
        name: "z-index",
        label: "z index"
    }
]
export default Position