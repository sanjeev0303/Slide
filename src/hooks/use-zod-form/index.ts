import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const useZodForm = (
  schema: ZodSchema,
  mutation: UseMutateFunction,
  defaultValue?: any
) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultValue,
    },
  });

  const onFormSubmit = handleSubmit(async (value) => mutation({ ...value }));

  return {
    register,
    errors,
    onFormSubmit,
    watch,
    reset,
  };
};


export default useZodForm;
