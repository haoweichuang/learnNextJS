import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { FormSchema } from "@/lib/utils";

const formSchema = FormSchema();

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
}

const CustomInput = ({ control, name, label }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="md:flex form-item items-center">
          <FormLabel className="form-label w-1/6 text-[12px]">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                // placeholder={placeholder}
                className="input-class"
                type="text"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
