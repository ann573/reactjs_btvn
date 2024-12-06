import * as z from 'zod'

const schemaProduct = z.object({
    title: z.string().trim().min(6 , { message: "Yêu cầu tên tối thiểu 3 kí tự" }),
    price: z.number().positive(),
    description: z.string().optional()
  });

export default schemaProduct