const districts = [
  { id: 1, name: "Аламудунский район", region: "Чуйская область" },
  { id: 2, name: "Жайыльский район", region: "Чуйская область" },
  { id: 3, name: "Кеминский район", region: "Чуйская область" },
  { id: 4, name: "Московский район", region: "Чуйская область" },
  { id: 5, name: "Панфиловский район", region: "Чуйская область" },
  { id: 6, name: "Сокулукский район", region: "Чуйская область" },
  { id: 7, name: "Ысык-Атинский район", region: "Чуйская область" },
  { id: 8, name: "Ноокенский район", region: "Джалал-Абадская область" },
  { id: 9, name: "Базар-Коргонский район", region: "Джалал-Абадская область" },
  { id: 10, name: "Аксыйский район", region: "Джалал-Абадская область" },
  { id: 11, name: "Алайский район", region: "Ошская область" },
  { id: 12, name: "Араванский район", region: "Ошская область" },
  { id: 13, name: "Кара-Суйский район", region: "Ошская область" },
  { id: 14, name: "Ноокатский район", region: "Ошская область" },
  { id: 15, name: "Чаткальский район", region: "Джалал-Абадская область" },
  { id: 16, name: "Кочкорский район", region: "Нарынская область" },
  { id: 17, name: "Тогуз-Тороуский район", region: "Джалал-Абадская область" },
  { id: 18, name: "Тонский район", region: "Иссык-Кульская область" },
  { id: 19, name: "Ак-Талинский район", region: "Нарынская область" },
  { id: 20, name: "Таласский район", region: "Таласская область" },
];

const cities = [
  { id: 1, name: "Бишкек", region: "Чуйская область" },
  { id: 2, name: "Ош", region: "Ошская область" },
  { id: 3, name: "Джалал-Абад", region: "Джалал-Абадская область" },
  { id: 4, name: "Каракол", region: "Иссык-Кульская область" },
  { id: 5, name: "Талас", region: "Таласская область" },
  { id: 6, name: "Нарын", region: "Нарынская область" },
  { id: 7, name: "Баткен", region: "Баткенская область" },
  { id: 8, name: "Кант", region: "Чуйская область" },
  { id: 9, name: "Токмок", region: "Чуйская область" },
  { id: 10, name: "Кара-Балта", region: "Чуйская область" },
  { id: 11, name: "Исфана", region: "Баткенская область" },
  { id: 12, name: "Кызыл-Кыя", region: "Баткенская область" },
  { id: 13, name: "Сулюкта", region: "Баткенская область" },
  { id: 14, name: "Майлуу-Суу", region: "Джалал-Абадская область" },
  { id: 15, name: "Таш-Кумыр", region: "Джалал-Абадская область" },
  { id: 16, name: "Кочкор-Ата", region: "Джалал-Абадская область" },
  { id: 17, name: "Балыкчы", region: "Иссык-Кульская область" },
  { id: 18, name: "Чолпон-Ата", region: "Иссык-Кульская область" },
  { id: 19, name: "Кара-Куль", region: "Джалал-Абадская область" },
  { id: 20, name: "Орловка", region: "Чуйская область" },
];
export const OffersOnRegions = () => {
  return (
    <section className={`bg-gray-100 py-5`}>
      <div className={`max-w-screen-2xl mx-auto`}>
        <div>
          <h1 className={`text-2xl font-semibold my-5`}>Квартиры по районам</h1>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-1">
            {districts.map((district) => (
              <div key={district.id} className="text-gray-800">
                {district.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className={`text-2xl font-semibold my-5`}>Квартиры по городам</h1>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-1">
            {cities.map((city) => (
              <div key={city.id} className="text-gray-800">
                {city.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
