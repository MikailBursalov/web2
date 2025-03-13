"use client";
import { useState } from "react";
import Image from "next/image";
import { DotIcon, HeartIcon } from "lucide-react";

const popularAds = [
  {
    image: "/suggestedListings/image1.jpg",
    isInFavorite: false,
    price: 50000,
    paymentPeriod: "month",
    roomCount: 4,
    area: 134,
    floor: 3,
    totalFloors: 9,
    address: "8-й м-н, дом 17, Октябрьский район, Бишкек, 720075",
  },
  {
    image: "/suggestedListings/image2.jpg",
    isInFavorite: false,
    price: 890000,
    paymentPeriod: "year",
    roomCount: 3,
    area: 105,
    floor: 2,
    totalFloors: 12,
    address: "8-й м-н, дом 17, Октябрьский район, Бишкек, 720075",
  },
  {
    image: "/suggestedListings/image3.jpg",
    isInFavorite: true,
    price: 12000,
    paymentPeriod: "month",
    roomCount: 1,
    area: 52,
    floor: 8,
    totalFloors: 14,
    address: "Микрорайон Джал-23,Ленинский район, Бишкек, 720044, 5 этажей",
  },
  {
    image: "/suggestedListings/image4.jpg",
    isInFavorite: false,
    price: 30000,
    paymentPeriod: "month",
    roomCount: 2,
    area: 78,
    floor: 5,
    totalFloors: 20,
    address: "Улица Токтогула, 13, Первомайский район, Бишкек, 720001, 1 этаж",
  },
];

export const PopularADSContent = () => {
  const selling = ["Жилая", "Загородная", "Коммерческая"];
  const [selectedSelling, setSelectedSelling] = useState("Жилая");
  return (
    <div>
      <div className={`flex justify-between items-center`}>
        <h1 className={`text-3xl font-semibold`}>Популярные объявления</h1>
        <span className={`text-blue-400 text-md`}>Как сюда попасть?</span>
      </div>
      <div className={`flex justify-start gap-4 items-center my-4`}>
        <h5 className={`text-xl font-semibold`}>Продажа : </h5>
        <div className={`flex justify-between gap-5 items-center`}>
          {selling.map((selling, index) => (
            <p
              key={index}
              className={`${selectedSelling === selling ? "border-b border-b-blue-500 font-semibold text-blue-500" : ""} text-md md:hover:border-b text-xl md:hover:border-b-slate-800 cursor-pointer duration-300`}
              onClick={() => setSelectedSelling(selling)}
            >
              {selling}
            </p>
          ))}
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularAds.map((item, id) => (
            <li
              key={id}
              className="overflow-hidden border rounded-xl border-black w-full cursor-pointer group" // Убрали max-w-[330px] и добавили w-full
            >
              <div>
                <div className="relative w-full h-[250px] overflow-hidden rounded-t-xl">
                  <Image
                    src={item.image}
                    alt={item.address || "Фото квартиры"}
                    fill
                    className="object-cover w-full h-full md:group-hover:scale-105 duration-1000"
                  />
                  <span className="absolute top-2 right-2 bg-black/50 md:hover:bg-black/70 cursor-pointer duration-300 p-2 rounded-full">
                    <HeartIcon className="text-white size-4" />
                  </span>
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-bold">
                    {item.paymentPeriod === "month"
                      ? `${item.price} ⃀/мес.`
                      : `${item.price} ⃀/год`}
                  </h2>

                  <div className="flex items-center text-gray-600 text-sm">
                    <span>{item.roomCount}-комн. кв.</span>
                    <DotIcon />
                    <span>{item.area} м²</span>
                    <DotIcon />
                    <span>
                      {item.floor} / {item.totalFloors} этаж
                    </span>
                  </div>
                  <div>
                    <span className={`line-clamp-1`}>{item.address}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
