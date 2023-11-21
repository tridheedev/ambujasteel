import { defineConfig, wrapFieldsWithMeta } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: 'mdx',
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },

          { type: 'image', name: 'productImage', label: 'productImage' },
        ],

        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/products/${document._sys.filename}`,
        },
      },
      {
        label: 'Products',
        name: 'product',
        path: 'content/products',
        format: 'mdx',
        ui: { router: ({ document }) => `/p/${document._sys.filename}` },
        fields: [
          { type: 'string', label: 'Product Title', name: 'title' },
          {
            label: 'Sub Heading',
            name: 'subHeading',
            isBody: true,
            type: 'rich-text',
          },
          {
            label: 'short Desc',
            name: 'shortDisc',
            isBody: true,
            type: 'string',
            ui: {
              validate: (value) => {
                if (value?.length > 250) {
                  return 'Title cannot be more than 250 characters long';
                }
              },
            },
          },
          // images
          // ...Other fields
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
              { label: 'Image', name: 'image', type: 'image' },
              {
                label: 'Size',
                name: 'size',
                type: 'string',
                options: ['sm', 'med', 'lg', 'xl'],
              },
            ],
          },

          {
            type: 'rich-text',
            label: 'product Details',
            name: 'productDetails',
          },
          {
            type: 'string',
            label: 'product type',
            name: 'type',
            options: [
              'material',
              'pipes',
              'flanges',
              'filter',
              'valves',
              'bars',
            ],
          },
          {
            label: 'Product Specification',
            name: 'productSpec',
            type: 'object',
            list: true,

            templates: [
              {
                label: 'spec',
                name: 'spec',

                fields: [
                  {
                    label: 'spec Name',
                    name: 'specName',
                    type: 'string',
                  },
                  { label: 'spec Value', name: 'specValue', type: 'string' },
                ],
              },
            ],
          },
          // chemical
          {
            label: 'Chemical Composition',
            name: 'chemicalCompo',
            type: 'object',
            list: true,
            fields: [
              { label: 'Chemical Name', name: 'chemName', type: 'string' },
              { label: 'Chem value', name: 'chemValue', type: 'string' },
            ],
          },
          // mech
          {
            label: 'Mechanical Composition',
            name: 'mechanicalCompo',
            type: 'object',
            list: true,
            fields: [
              { label: 'Name', name: 'machName', type: 'string' },
              { label: 'value', name: 'mechValue', type: 'string' },
            ],
          },
          // application
          {
            label: 'Application',
            name: 'application',
            type: 'string',
            list: true,
          },

          // /rags
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          // products

          {
            type: 'string',
            name: 'star',
            label: 'Start',
          },
          // options
        ],
      },
    ],
  },
});
