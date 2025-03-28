import { useEffect, useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Login } from '@/service/api/auth/login'
import { Register } from '@/service/api/auth/register'
import { XIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Eye, EyeOff } from 'lucide-react'

export const Auth = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const formSchema = z.object({
    email: z.string().email({ message: 'Введите корректный email.' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен быть не менее 6 символов.' }),
    ...(isLogin
      ? {}
      : {
          name: z
            .string()
            .min(2, { message: 'Имя должно быть не менее 2 символов.' }),
          role: z.enum(['admin', 'landlord', 'tenant'], {
            required_error: 'Выберите роль.',
          }),
        }),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      role: '',
    },
  })

  const onSubmit = async (values) => {
    try {
      if (isLogin) {
        await Login(values)
        console.log('Вход выполнен')
      } else {
        await Register(values)
        console.log('Регистрация успешна')
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  useEffect(() => {}, [isLogin])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-[400px] sm:w-[450px] md:w-[500px] min-h-[400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold ">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </h1>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="h-6 w-6 text-slate-800" />
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {!isLogin && (
              <FormField
                control={form.control}
                name="username"
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
            )}
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
                        onClick={(e) => {
                          e.preventDefault()
                          setShowPassword(!showPassword)
                        }}
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
            {!isLogin && (
              <>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem
                      className={`flex items-center justify-start gap-5`}
                    >
                      <FormLabel>Роль</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
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
              </>
            )}
            <div className="flex items-center gap-2">
              <span>{isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}</span>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsLogin(!isLogin)
                }}
                className="text-blue-500 cursor-pointer"
              >
                {isLogin ? 'Регистрация' : 'Войти'}
              </button>
            </div>
            <Button type="submit" className="w-full bg-blue-500">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
