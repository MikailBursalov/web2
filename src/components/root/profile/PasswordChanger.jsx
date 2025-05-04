'use client'
import { useState } from 'react'
import {
  ChangePassword,
  requestPasswordReset,
  resetPassword,
} from '@/service/api/changePassword'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import useUserStore from '@/service/stores/useUser.store'
import { useAuth } from '@/service/providers/AuthProvider'
import { ClipLoader } from 'react-spinners'

export const PasswordChanger = () => {
  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false)
  const [isPrevPasswordShow, setIsPrevPasswordShow] = useState(false)
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false)
  const { profile } = useUserStore()
  const { token } = useAuth()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [tempToken, setTempToken] = useState(null)
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleOpen = async () => {
    setIsPasswordChangeOpen(true)
  }

  const handleSave = async () => {
    if (!profile?.email) return
    setLoading(true)
    if (profile.email) {
      const data = {
        email: profile.email,
      }
      const response = await requestPasswordReset(token, data)
      if (response) {
        if (passwordData.newPassword !== passwordData.confirmPassword) return
        const newPass = {
          resetToken: response.resetToken,
          newPassword: passwordData.newPassword,
        }
        const res = await resetPassword(token, newPass)
        if (res) {
          console.log('res: ', res)
          setLoading(false)
          setSuccess(true)
          setTimeout(() => setSuccess(false), 5000)

          setPasswordData({ newPassword: '', confirmPassword: '' })
        }
      } else setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-md p-10 my-4">
      <div className="">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-xl font-bold">Данные входа</h1>
          <button
            className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 py-2 px-5 rounded-md text-xl"
            onClick={() => (isPasswordChangeOpen ? handleSave() : handleOpen())}
          >
            {isPasswordChangeOpen ? 'Сохранить' : 'Изменить пароль'}
          </button>
        </div>
        <div className="bg-gray-500 h-[1px] w-full my-5" />
      </div>
      {loading ? (
        <div className={`w-full flex justify-center`}>
          <ClipLoader />
        </div>
      ) : (
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isPasswordChangeOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex justify-between items-center gap-4 mt-4">
            <div className={`relative flex-1`}>
              <input
                type={isNewPasswordShow ? 'text' : 'password'}
                placeholder="Новый пароль"
                value={passwordData.newPassword || ''}
                onChange={(e) =>
                  setPasswordData((prev) => ({
                    ...prev,
                    newPassword: e.target.value,
                  }))
                }
                className="w-full text-xl font-semibold border rounded-md py-2 px-3 border-slate-500"
              />
              <span
                className={`absolute top-1/2 -translate-y-1/2 right-2 text-slate-500 cursor-pointer`}
                onClick={(e) => {
                  setIsNewPasswordShow(!isNewPasswordShow)
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                {isNewPasswordShow ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
            <input
              type={isNewPasswordShow ? 'text' : 'password'}
              placeholder="Подтвердите пароль"
              value={passwordData.confirmPassword || ''}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              className="flex-1 text-xl font-semibold border rounded-md py-2 px-3 border-slate-500"
            />
          </div>
        </div>
      )}
      {success && (
        <p className="text-green-600 mt-4 text-center text-lg font-semibold">
          Пароль успешно изменён
        </p>
      )}
    </div>
  )
}
