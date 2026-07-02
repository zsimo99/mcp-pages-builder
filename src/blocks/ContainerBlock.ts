import { Block } from "payload";
import { Fields } from "@/fields/subFields";
import { TextBlock } from "./TextBlock";
import { ImageBlock } from "./ImageBlock";

// Helper function to build nested Container Blocks up to a safe depth of 8 levels.
// This prevents direct infinite recursion issues (stack overflow / Maximum call stack size exceeded)
// when Payload CMS dynamically builds form states.
const createContainerBlock = (currentDepth = 1, maxDepth = 8): Block => {
    return {
        slug: `container_block_l${currentDepth}`,
        labels: {
            singular: `Container Block (L${currentDepth})`,
            plural: `Container Blocks (L${currentDepth})`,
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
                                type: "blocks",
                                name: "children",
                                label: "Children",
                                blocks: [
                                    TextBlock,
                                    ImageBlock,
                                    ...(currentDepth < maxDepth ? [createContainerBlock(currentDepth + 1, maxDepth)] : [])
                                ]
                            }
                        ]
                    },
                    {
                        label: "style",
                        name: "style",
                        fields: Fields
                    }
                ]
            }
        ]
    };
};

export const ContainerBlock = createContainerBlock(1, 8);
