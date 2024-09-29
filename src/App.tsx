import './App.css'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

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
    },
  })

  function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <body className='bg-background h-screen'>
      <Card className='w-82'>
        <CardHeader>
          <CardTitle>Compound Interest Calculator</CardTitle>
          <CardDescription>Calculate your investment growth over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="initialDeposit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Initial deposit</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="1000" {...field} />
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
                      <Input type="number" placeholder="100" {...field} />
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
                      <Input type="number" placeholder="shadcn" {...field} />
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
                      <Input type="number" placeholder="1.000" {...field} />
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
                      <Input type="number" placeholder="2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="outline" type="submit" className='bg-primary'>Submit</Button>
            </form>
          </Form>
        </CardContent >
      </Card>
    </body>
  )
}

export default App
