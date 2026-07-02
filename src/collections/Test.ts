import { Block, CollectionConfig } from 'payload'
import Layout from '../fields/subFields/Layout'
import Spacing from '../fields/subFields/Spacing'

// Define a simple Text Block widget
const TextWidgetBlock: Block = {
    slug: 'text_widget',
    labels: {
        singular: 'Text Widget',
        plural: 'Text Widgets',
    },
    fields: [
        {
            name: 'content',
            type: 'textarea',
            label: 'Text Content',
            required: true,
        },
        {
            name: 'color',
            type: 'text',
            label: 'Text Color (hex/rgba)',
        }
    ]
}

// Define a simple Image Block widget
const ImageWidgetBlock: Block = {
    slug: 'image_widget',
    labels: {
        singular: 'Image Widget',
        plural: 'Image Widgets',
    },
    fields: [
        {
            name: 'image',
            type: 'relationship',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'altText',
            type: 'text',
            label: 'Alt Text',
        }
    ]
}

// The recursive container builder
const createContainerBlock = (currentDepth = 1, maxDepth = 6): Block => {
    return {
        slug: `container_level_${currentDepth}`,
        labels: {
            singular: `Container (Level ${currentDepth})`,
            plural: `Containers (Level ${currentDepth})`,
        },
        fields: [
            {
                type: 'tabs',
                tabs: [
                    {
                        label: 'Content',
                        fields: [
                            {
                                name: 'cssClasses',
                                type: 'text',
                                label: 'Custom CSS Classes',
                            },
                            {
                                name: 'subFields',
                                type: 'blocks',
                                label: 'Nested Elements / Child Divs',
                                blocks: [
                                    // If we haven't reached the maximum depth limit, allow nesting another container
                                    ...(currentDepth < maxDepth ? [createContainerBlock(currentDepth + 1, maxDepth)] : []),
                                    // Always allow widgets to be inserted
                                    TextWidgetBlock,
                                    ImageWidgetBlock,
                                ],
                            },
                        ]
                    },
                    {
                        label: 'Layout & Styling',
                        fields: [
                            {
                                type: 'group',
                                name: 'layout',
                                label: 'Layout Settings',
                                fields: Layout,
                            },
                            {
                                type: 'group',
                                name: 'spacing',
                                label: 'Spacing Settings',
                                fields: Spacing,
                            }
                        ]
                    }
                ]
            }
        ],
    }
}

// Initialize the root block starting at level 1 with a max depth of 6
const RootContainerBlock = createContainerBlock(1, 6)

const Testo: CollectionConfig = {
    slug: 'test',
    admin: {
        useAsTitle: 'id',
    },
    fields: [
        {
            name: 'layout',
            type: 'blocks',
            blocks: [RootContainerBlock],
        },
    ],
}

export default Testo