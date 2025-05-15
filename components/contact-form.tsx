"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      })
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-900">Имя</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите ваше имя"
                    {...field}
                    className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-900">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Введите ваш email"
                    {...field}
                    className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-900">Сообщение</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    className="min-h-[120px] border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить сообщение"}
          </Button>
        </form>
      </Form>
    </motion.div>
  )
}
