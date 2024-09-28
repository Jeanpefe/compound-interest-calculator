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
    <body className="bg-primary h-screen">
      <section className="bg-card h-screen w-2/5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="initialDeposit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Initial deposit</FormLabel>
                  <FormControl>
                    <Input className="text-card-foreground" placeholder="1000" {...field} />
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
                    <Input placeholder="100" {...field} />
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
                    <Input placeholder="1.000" {...field} />
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
                    <Input placeholder="2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="outline" type="submit" className='bg-primary'>Submit</Button>
          </form>
        </Form>
      </section >
    </body>
  )
}

export default App
