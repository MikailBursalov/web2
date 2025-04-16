'use client'
import Image from 'next/image'
import { useAuth } from '@/service/providers/AuthProvider'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import useUserStore from '@/service/stores/useUser.store'

const genderData = ['Мужской', 'Женский', 'Не выбрано']

export const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '' })
  const [genderSelectOpen, setGenderSelectOpen] = useState(false)
  const [selectedGender, setSelectedGender] = useState(genderData[2])
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState('/placeholder/male.png')
  const [isPasswordChangeOpen, setIsPasswordChangeOpen] = useState(false)

  const genderRef = useRef(null)
  const fileInputRef = useRef(null)

  const { token } = useAuth()
  const { profile, updateProfile } = useUserStore()

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setAvatarFile(file)
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  const UpdateProfileData = async () => {
    const formData = new FormData()
    formData.append('gender', selectedGender)
    formData.append('name', userInfo.name || profile?.name || '')
    formData.append('email', userInfo.email || profile?.email || '')
    if (avatarFile) {
      formData.append('avatar', avatarFile)
    }

    await updateProfile(token, formData)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genderRef.current && !genderRef.current.contains(event.target)) {
        setGenderSelectOpen(false)
      }
    }

    if (profile) {
      setUserInfo({ name: profile.name || '', email: profile.email || '' })
      if (profile.avatarUrl) {
        setAvatarPreview(profile.avatarUrl)
      }
      setSelectedGender(profile.gender || genderData[2])
    }

    document.addEventListener('mousedown', handleClickOutside)
    console.log('onClickOutside', profile)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [profile])

  return (
    <div className="bg-gray-100 rounded-md p-10">
      <h1 className="text-3xl font-bold">Мой профиль</h1>
      <div className="bg-gray-500 h-[1px] w-full my-5" />
      <div className="bg-white rounded-md p-3 flex justify-between items-start">
        <div className="flex justify-start items-center gap-4 w-3/4">
          <div
            className="border p-1 rounded-sm w-52 aspect-square cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image
              src={avatarPreview}
              alt="avatar"
              width={200}
              height={200}
              unoptimized
              className="rounded-sm object-cover w-full h-full"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
          <div className="space-y-5 flex-1">
            <div className="flex flex-col gap-2">
              <label className="text-xl text-gray-600 font-normal">Имя</label>
              <input
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, name: e.target.value }))
                }
                className="text-xl font-semibold border rounded-md py-1 px-3 border-slate-500 w-full"
                type="text"
                placeholder="ФИО"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl text-gray-600 font-normal">Электронный адрес</label>
              <input
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                className="text-xl font-semibold border rounded-md py-1 px-3 border-slate-500 w-full"
                type="text"
                placeholder="Электронный адрес"
              />
            </div>
          </div>
        </div>
        <button
          onClick={UpdateProfileData}
          className="text-blue-500 bg-blue-500/30 hover:bg-blue-500/40 cursor-pointer duration-200 py-2 px-5 rounded-md text-xl"
        >
          Редактировать
        </button>
      </div>

      <div className="bg-white rounded-md p-3 mt-4">
        <h1 className="text-xl font-bold mb-4">Данные профиля</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="w-1/2">
            <label className="text-xl text-gray-600 font-normal">Номер телефона</label>
            <input
              type="text"
              className="mt-2 text-xl font-semibold border rounded-md py-2 px-3 border-slate-500 w-full"
              placeholder="phone number"
            />
          </div>
          <div ref={genderRef} className="relative w-1/2">
            <label className="text-xl text-gray-600 font-normal">Пол</label>
            <div
              className="mt-2 flex items-center justify-between border border-slate-500 rounded-md py-2 px-3 cursor-pointer select-none text-xl font-semibold"
              onClick={() => setGenderSelectOpen((prev) => !prev)}
            >
              <span>{selectedGender}</span>
              <ChevronDownIcon
                className={`text-gray-400 transition-transform duration-300 ${
                  genderSelectOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>

            <div
              className={`absolute z-10 left-0 right-0 mt-1 bg-white border border-slate-300 rounded-md shadow-md overflow-hidden transition-all duration-200 origin-top ${
                genderSelectOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
              }`}
            >
              {genderData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedGender(item==='мужской'? 'male' : 'female')
                    setGenderSelectOpen(false)
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item === 'male' ? 'мужской' : 'женский'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md p-3 mt-4">
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-xl font-bold">Данные входа</h1>
          <button
            className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 py-2 px-5 rounded-md text-xl"
            onClick={() => setIsPasswordChangeOpen((prev) => !prev)}
          >
            {isPasswordChangeOpen ? 'Сохранить' : 'Изменить пароль'}
          </button>
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isPasswordChangeOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex justify-between items-center gap-4 mt-4">
            <input
              type="password"
              placeholder="Старый пароль"
              className="flex-1 text-xl font-semibold border rounded-md py-2 px-3 border-slate-500"
            />
            <input
              type="password"
              placeholder="Новый пароль"
              className="flex-1 text-xl font-semibold border rounded-md py-2 px-3 border-slate-500"
            />
            <input
              type="password"
              placeholder="Подтвердите пароль"
              className="flex-1 text-xl font-semibold border rounded-md py-2 px-3 border-slate-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
