import { ControllerProps, FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"
import { Input, InputProps } from "./input";

interface TextfieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends Omit<ControllerProps<TFieldValues, TName>, "render"> {
  label?: string
  inputProps: InputProps
}

function Textfield<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: TextfieldProps<TFieldValues, TName>) {
  const methods = useFormContext<TFieldValues>();
  return (
    <FormField
      control={methods.control}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input {...props.inputProps} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default Textfield;
