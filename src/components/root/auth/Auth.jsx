import { useState } from 'react'
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

export const Auth = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true)

  // Определяем схему валидации в зависимости от режима (логин/регистрация)
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: 'Имя должно быть не менее 2 символов.' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен быть не менее 6 символов.' }),
    ...(isLogin
      ? {} // В режиме логина не требуем email
      : {
          email: z.string().email({ message: 'Введите корректный email.' }),
        }),
  })

  // Инициализация useForm
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  })

  // Функция отправки формы
  const onSubmit = async (values) => {
    try {
      if (isLogin) {
        await Login(values)
      } else {
        await Register(values)
      }
      console.log(isLogin ? 'Вход выполнен' : 'Регистрация успешна')
    } catch (error) {
      console.error('Ошибка:', error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-[400px] sm:w-[450px] md:w-[500px] min-h-[400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-bold ">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </h1>
          <button onClick={onClose} className="cursor-pointer">
            <XIcon className="h-6 w-6 text-slate-800  " />
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Поле Username */}
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
            {/* Поле Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Введите пароль"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Поле Email (только для регистрации) */}
            {!isLogin && (
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
            )}
            <div className={`flex items-center gap-2`}>
              <span>{isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setIsLogin(!isLogin)
                }}
                className={`text-blue-500 cursor-pointer`}
              >
                {isLogin ? 'Регистрация' : 'Войти'}
              </button>
            </div>
            {/* Кнопка отправки */}
            <Button type="submit" className="w-full bg-blue-500">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
