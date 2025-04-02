'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Eye, EyeOff, XIcon } from 'lucide-react'
import { Register } from '@/service/api/auth/register'

export const RegisterForm = ({ close, changeForm }) => {
  const [showPassword, setShowPassword] = useState(false)

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: 'Имя должно быть не менее 2 символов.' }),
    email: z.string().email({ message: 'Введите корректный email.' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен быть не менее 6 символов.' }),
    role: z.enum(['admin', 'landlord', 'tenant'], {
      required_error: 'Выберите роль.',
    }),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
  })

  const onSubmit = async (values) => {
    try {
      const res = await Register(values)
      if (res) {
        changeForm()
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        if (status === 400) {
          form.setError('email', {
            type: 'manual',
            message: 'Введите корректные данные.',
          })
          form.setError('password', {
            type: 'manual',
            message: 'Введите корректные данные.',
          })
          form.setError('name', {
            type: 'manual',
            message: 'Введите корректные данные.',
          })
        } else if (status >= 500) {
          form.setError('_', {
            type: 'manual',
            message: 'Ошибка сервера. Попробуйте позже.',
          })
        }
      } else {
        form.setError('_', {
          type: 'manual',
          message: 'Неизвестная ошибка. Попробуйте позже.',
        })
      }
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={close}
    >
      <div
        className="w-[400px] sm:w-[450px] md:w-[500px] min-h-[400px] bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold">Регистрация</h1>
          <button onClick={close} className="cursor-pointer">
            <XIcon className="h-6 w-6 text-slate-800" />
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя пользователя</FormLabel>
                  <FormControl>
                    <Input placeholder="Введите имя" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Введите email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Введите пароль"
                        {...field}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex items-center justify-start gap-5">
                  <FormLabel>Роль</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите роль" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Админ</SelectItem>
                      <SelectItem value="landlord">Продавец</SelectItem>
                      <SelectItem value="tenant">Покупатель</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors._ && (
              <div className="text-red-500 text-sm text-center">
                {form.formState.errors._.message}
              </div>
            )}

            <div className="flex items-center gap-2">
              <span>Уже есть аккаунт?</span>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  changeForm()
                }}
                className="text-blue-500 cursor-pointer"
              >
                Войти
              </button>
            </div>
            <Button type="submit" className="w-full bg-blue-500">
              Зарегистрироваться
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
