import { useEffect, useState } from "react"

const realtorsData = [
  {
    id: 1,
    rating: 5,
    reviews: [
      {
        userId: 1,
        name: '',
        text: '',
      },
      {
        userId: 2,
        name: '',
        text: '',
      },
      {
        userId: 3,
        name: '',
        text: '',
      },
    ],
    aboutUser: '',
    region: '',

    avatar: '/realtors/woman-ava1.jpg',
    name: 'Айсулуу Тыныбекова',
    offersCount: 8,
  },
  {
    id: 2,
    avatar: '/realtors/woman-ava2.jpg',
    name: 'Аида Сапарбек кызы',
    offersCount: 5,
  },
  {
    id: 3,
    avatar: '/realtors/boy-ava4.jpg',
    name: 'Дастан Рысбеков',
    offersCount: 2,
  },
  {
    id: 4,
    avatar: '/realtors/boy-ava3.png',
    name: 'Микаиль Бурсалов',
    offersCount: 4,
  },
  {
    id: 5,
    avatar: '/realtors/boy-ava2.jpg',
    name: 'Эркебулан Дуйшеналиев',
    offersCount: 9,
  },
  {
    id: 6,
    avatar: '/realtors/boy-ava1.avif',
    name: 'Касым Барыктабасов',
    offersCount: 1,
  },
]
export const RealtorPageContent = () => {
  const [realtorsList, setRealtorsList] = useState([])

  useEffect (()=>{
    console.log('realtors page: ');
    
  },[]) 
  return (
    <div>
      <div>lfl</div>
    </div>
  )
}
