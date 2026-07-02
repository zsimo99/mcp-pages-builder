import { Field } from "payload";

const Spacing: Field[] = [{
    // margin 
    type: "row",
    fields: [
        {
            type: "number",
            name: "mt",
            label: "top margin",
        },
        {
            type: "number",
            name: "mb",
            label: "bottom margin",
        },
        {
            type: "number",
            name: "ml",
            label: "left margin",
        },
        {
            type: "number",
            name: "mr",
            label: "right margin",
        }
    ],
},
// padding
{
    type: "row",
    fields: [
        {
            type: "number",
            name: "pt",
            label: "top padding",
        },
        {
            type: "number",
            name: "pb",
            label: "bottom padding",
        },
        {
            type: "number",
            name: "pl",
            label: "left padding",
        },
        {
            type: "number",
            name: "pr",
            label: "right padding",
        }
    ],
}
]

export default Spacing