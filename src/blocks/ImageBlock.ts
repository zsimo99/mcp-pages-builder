import { Block } from "payload";
import { Fields } from "@/fields/subFields";

export const ImageBlock: Block = {
    slug: "image_block",
    labels: {
        singular: "Image Block",
        plural: "Image Blocks",
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
                            type: "relationship",
                            name: "image",
                            relationTo: "media",
                            required: true,
                        },
                        {
                            type: "text",
                            name: "altText",
                            label: "Alt Text",
                        }
                    ]
                },
                {
                    label: "style",
                    name: "style",
                    fields: Fields.filter((f: any) => f.name !== "tp" && f.name !== "layout")
                }
            ]
        }
    ]
};
