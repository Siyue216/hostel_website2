import z, { ZodSchema } from "zod";

export default function validate(
  formData: z.infer<typeof schema>,
  schema: ZodSchema
) {
  const { data, error } = schema.safeParse(formData);

  if(error){
    throw new Error(error.message);
  }

  return data;
}
