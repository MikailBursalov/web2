import { PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { AddProductModalWindow } from '@/components/root/profile/landlord/AddProductModalWindow'
import { MyPropertiesList } from '@/components/root/profile/landlord/myProperties'

export const ApartmentsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={'space-y-4 bg-white p-4 rounded-md mb-4'}>
        <div className="w-full py-3 bg-gray-200 px-5 text-end rounded-md">
          <button
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center gap-2 bg-blue-500/30 border border-blue-500 rounded-md text-blue-700 text-2xl px-3 py-1 hover:bg-blue-500/50 transition-colors duration-200 ease-in-out cursor-pointer ml-auto`}
          >
            <PlusIcon className="" />
            <span>Добавить объявление</span>
          </button>
        </div>

        <MyPropertiesList />
      </div>
      {isModalOpen && (
        <AddProductModalWindow close={() => setIsModalOpen(false)} />
      )}
    </>
  )
}
