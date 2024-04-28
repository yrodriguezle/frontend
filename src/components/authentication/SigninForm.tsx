import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReloadIcon } from '@radix-ui/react-icons';
import { Form } from "@/components/ui/form"
import Textfield from "@/components/ui/textfield"

const schema = z.object({
  username: z.string().min(1, {
    message: "Nome utente obbligatorio.",
  }),
  password: z.string().min(1, {
    message: "Password obbligatoria.",
  }),
});

export type SigninValues = z.infer<typeof schema>;

interface SigninFormProps {
  onSubmit: SubmitHandler<SigninValues>
}

function SigninForm({ onSubmit }: SigninFormProps) {
  const methods = useForm<SigninValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    },
  });

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Textfield
                    name="username"
                    label="Nome utente:"
                    inputProps={{
                      placeholder: "Nome utente"
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Textfield
                    name="password"
                    label="Password:"
                    inputProps={{
                      placeholder: "Password",
                      type: "password"
                    }}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit" disabled={methods.formState.isSubmitting}>
                {methods.formState.isSubmitting ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : null}
                Accedi
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </Form>
  )
}

export default SigninForm