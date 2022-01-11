/* eslint-disable import/prefer-default-export */
export const PRODUCT_TEMPLATE = {
  mobile: [
    {
      displayName: 'Rear Camera Lens',
      inputType: 'text',
      dataType: 'text',
      fieldName: 'Camera',
      validation: {
        required: true,
      },
    },
    {
      displayName: 'Screen Size ',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Screen Size',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Screen Type',
      inputType: 'list',
      dataType: 'list',
      fieldName: 'ScreenType',
      validation: {
        required: true,
        type: 'decimal',
      },
      data: [
        {
          value: '1',
          name: 'AMOLED',
        },
        {
          value: '1',
          name: 'TFT',
        },
      ],
    },
    {
      displayName: 'Battery Power (In mAH) ',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Battery Capacity',
      validation: {
        required: true,
        type: 'decimal',
      },

    },
    {
      displayName: 'Battery type',
      inputType: 'list',
      dataType: 'list',
      fieldName: 'Battery Capacity',
      validation: {
        required: true,
        type: 'decimal',
      },
      datat: [
        {
          value: '1',
          name: 'Lithium Ion',
        },
      ],
    },
    {
      displayName: 'Inbuilt Storage (in GB) ',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Inbuilt Storage Capacity',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Expandable Storage(in GB) ',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Expandable Storage Capacity',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Processor Brand ',
      inputType: 'text',
      dataType: 'text',
      fieldName: 'Processor',
      validation: {
        required: true,
        type: 'text',
      },
    },
    {
      displayName: 'Operating System ',
      inputType: 'text',
      dataType: 'text',
      fieldName: 'Operating System',
      validation: {
        required: true,
        type: 'text',
      },
    },
    {
      displayName: 'Warranty Details',
      inputType: 'text',
      dataType: 'text',
      fieldName: 'Warranty',
      validation: {
        required: true,
        type: 'text',
      },
    },
    {
      displayName: 'RAM',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'RAM',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Processor Speed',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Processor Speed',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Item Weight',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Processor Speed',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Item Dimensions',
      inputType: 'number',
      dataType: 'number',
      fieldName: 'Item Dimensions',
      validation: {
        required: true,
        type: 'decimal',
      },
    },
    {
      displayName: 'Colour',
      inputType: 'list',
      dataType: 'list',
      fieldName: 'Colour',
      validation: {
        required: true,
        type: 'text',
      },
      data: [
        {
          value: '1',
          name: 'black',
        },
        {
          value: '2',
          name: 'blue',
        },
      ],
    },

  ],
};
