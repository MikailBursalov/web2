import { BadgeCheckIcon } from 'lucide-react'

export const RealtorTitle = () => {
  return (
    <div className="space-y-5">
      <h1 className={'text-3xl font-semibold'}>Микаиль Бурсалов</h1>
      <div className={'flex justify-start items-center gap-2'}>
        <BadgeCheckIcon className={'text-blue-500 size-8'} />
        <span className={`text-xl text-blue-500`}>Достоверный агент</span>
      </div>
      <div></div>
    </div>
  )
}
