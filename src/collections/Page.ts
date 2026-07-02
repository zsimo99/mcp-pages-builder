import { Section } from "@/fields/Section";
import { CollectionConfig, slugField, Field } from "payload";



export const Page: CollectionConfig = {
    slug: "page",
    fields: [
        {
            type: "text",
            label: "Page title",
            name: "title",
            required: true,
        },
        {
            name: "Sections",
            type: "array",
            fields: Section,
        },
        slugField()
    ],


};