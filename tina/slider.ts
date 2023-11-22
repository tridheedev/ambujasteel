import { Collection } from 'tinacms';

export const mainSlider: Collection = {
  label: 'main site slider',
  name: 'mainSlider',
  path: 'tinaui',
  format: 'mdx',
  ui: { router: ({ document }) => '/' },
  fields: [
    {
      label: 'Image Gallery',
      name: 'gallery',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string',
        },
        { label: 'Heading', name: 'heading', type: 'string' },
        { label: 'SubHeading', name: 'Subheading', type: 'string' },

        { label: 'Image', name: 'image', type: 'image', required: true },
      ],
    },

    {
      label: 'Industry',
      name: 'industryUse',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          label: 'Industry',
          name: 'industry',
          type: 'string',
          required: true,
        },
        { label: 'link', name: 'link', type: 'string', required: true },
        { label: 'Image', name: 'image', type: 'image', required: true },
      ],
    },
  ],
};
