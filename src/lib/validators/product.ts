import { z } from "zod"

function isValidURL(value: string): boolean {
  const urlRegex = /^https:\/\//i
  return urlRegex.test(value)
}

export const ProductValidator = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 3 characters long",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 3 characters long",
  }),
  price: z.string().min(1),
  image: z.string().refine(value => isValidURL(value)),
  publish: z.boolean(),
})
