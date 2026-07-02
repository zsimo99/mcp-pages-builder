import { Field, Block } from "payload";
import Layout from "./subFields/Layout";
import Spacing from "./subFields/Spacing";
import Position from "./subFields/Position";
import Typography from "./subFields/Typography";
import Background from "./subFields/Background";
import { Fields } from "./subFields";
import { TextBlock } from "@/blocks/TextBlock";
import { ContainerBlock } from "@/blocks/ContainerBlock";
import { ImageBlock } from "@/blocks/ImageBlock";



export const Section: Field[] = [
    {
        type: "tabs",
        tabs: [
            {
                label: "Content",
                name: "content",
                fields: [
                    {
                        type: "blocks",
                        name: "widgets",
                        label: "Widgets",
                        blocks: [
                            TextBlock,
                            ContainerBlock,
                            ImageBlock
                        ]
                    }
                ]
            },
            {
                label: "Section Style",
                name: "style",
                fields: Fields
            }
        ]
    }
];