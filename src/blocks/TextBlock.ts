import { Fields } from "@/fields/subFields";
import Position from "@/fields/subFields/Position";
import Spacing from "@/fields/subFields/Spacing";
import Typography from "@/fields/subFields/Typography";
import { Block, Field } from "payload";

export const TextBlock: Block = {
    slug: "text_block",
    labels: {
        singular: "Text Block",
        plural: "Text Blocks",
    },

    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "Content",
                    name: "content",
                    fields: [
                        {
                            type: "text",
                            name: "text",
                            label: "Text",
                        },
                    ]
                }, {
                    label: "style",
                    name: "style",
                    fields: Fields.filter((f: any) => f.name !== "layout" && f.name !== "pos" && f.name !== "bg")
                }
            ]
        }
    ]
}