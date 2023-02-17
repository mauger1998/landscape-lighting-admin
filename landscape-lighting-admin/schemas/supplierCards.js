export default {
  name: 'supplierCards',
  type: 'document',
  title: 'SupplierCards',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      description: 'Minimum 20 characters',
    },
  ],
}
