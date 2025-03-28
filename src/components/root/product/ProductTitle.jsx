import { MapPin } from 'lucide-react'

export const ProductTitle = () => {
  return (
    <div>
      <div className={`space-y-4 my-4  flex justify-between items-center`}>
        <h1 className={`text-4xl font-semibold`}>
          Продается студия, 26.8м<sup>2</sup> <br /> в{' '}
          <span className={`text-blue-600`}> ЖК "Дом 56"</span>
        </h1>
        <h4 className={`flex justify-start gap-2 items-center text-gray-500`}>
          <MapPin />{' '}
          <span>Микрорайон Джал-23, 34/1 Ленинский район, Бишкек 720044</span>
        </h4>
      </div>
    </div>
  )
}
