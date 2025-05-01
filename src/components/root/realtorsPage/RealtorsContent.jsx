import { RealtorsList } from '@/components/root/realtorsPage/RealtorsList'

export const RealtorsContent = () => {
  return (
    <div className={`max-w-screen-2xl mx-auto`}>
      <h1 className={`font-bold text-3xl`}>Каталог агентов</h1>
      <RealtorsList />
    </div>
  )
}
