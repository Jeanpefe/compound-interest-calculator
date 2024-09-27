import './App.css'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  initialBalance: z.number(),
  periodicalDepositQuantity: z.number(),
  periodicalDepositTime: z.number(),
  anualInterestRate: z.number(),
  duration: z.number()
})

type FormData = z.infer<typeof formSchema>;

function App() {

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialBalance: 1000,
      periodicalDepositQuantity: 100,
      periodicalDepositTime: 100,
      anualInterestRate: 1.000,
      duration: 2
    },
  })

  function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <div className="bg-primary">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="initialBalance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div >
  )
}

export default App
