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
  initialDeposit: z.number(),
  periodicalContributionAmout: z.number(),
  investmentFrequency: z.number(),
  anualInterestRate: z.number(),
  duration: z.number()
})

type FormData = z.infer<typeof formSchema>;

function App() {

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialDeposit: 1000,
      periodicalContributionAmout: 100,
      investmentFrequency: 100,
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
            name="initialDeposit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Initial deposit</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="periodicalContributionAmout"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Periodical contribution amout</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="investmentFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment frequency</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="anualInterestRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anual interest rate</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Investment duration</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
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
