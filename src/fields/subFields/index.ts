import { Field } from "payload";
import Background from "./Background";
import Layout from "./Layout";
import Position from "./Position";
import Spacing from "./Spacing";
import Typography from "./Typography";
import Size from "./Size";

export const Fields: Field[] = [
    {
        type: "group",
        name: "layout",
        label: "Layout",
        fields: Layout
    },
    {
        type: "group",
        name: "space",
        label: "Spacing",
        fields: Spacing
    },
    {
        type: "group",
        name: "size",
        label: "Size",
        fields: Size
    },
    {
        type: "group",
        name: "pos",
        label: "Position",
        fields: Position
    },
    {
        type: "group",
        name: "tp",
        label: "Typography",
        fields: Typography
    },
    {
        type: "group",
        name: "bg",
        label: "Background",
        fields: Background
    },
]
