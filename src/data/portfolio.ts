export interface Project {
  id: number;
  title: string;
  area: string;
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  location: string;
  duration: string;
  price: string;
}

export const portfolio: Project[] = [
  {
    id: 1,
    title: "ЖК Легенда",
    area: "78 м²",
    year: "2025",
    description: "Современный ремонт в светлых тонах",
    fullDescription: "Полный ремонт квартиры в жилом комплексе «Легенда». Выполнен современный ремонт в светлых тонах с использованием качественных материалов. Особое внимание уделено зонированию пространства и организации освещения.",
    image: "https://i.pinimg.com/originals/6a/18/bb/6a18bb113502455c32aa2e6f39476fa3.jpg",
    images: [
      "https://i.pinimg.com/originals/6a/18/bb/6a18bb113502455c32aa2e6f39476fa3.jpg",
      "https://i.pinimg.com/originals/c4/44/5e/c4445e8405ed7e8b03e8e293b7bc99a0.jpg",
      "https://i.pinimg.com/originals/78/e5/fe/78e5fea3c8937be04c9266451c71aa3a.jpg"
    ],
    location: "ЖК Легенда, Казань",
    duration: "2,5 месяца",
    price: "780 000 ₽"
  },
  {
    id: 2,
    title: "ЖК Ричмонд",
    area: "90 м²",
    year: "2025",
    description: "Стильный интерьер в стиле минимализм",
    fullDescription: "Ремонт квартиры в стиле минимализм. Пространство организовано максимально функционально. Использованы качественные отделочные материалы, мебель на заказ.",
    image: "https://i.pinimg.com/originals/c4/44/5e/c4445e8405ed7e8b03e8e293b7bc99a0.jpg",
    images: [
      "https://i.pinimg.com/originals/c4/44/5e/c4445e8405ed7e8b03e8e293b7bc99a0.jpg",
      "https://i.pinimg.com/originals/7c/a5/f6/7ca5f6b6ded548f12c5be0d62f82984c.jpg",
      "https://i.pinimg.com/originals/66/98/b8/6698b89eaee79d02a44af19a56d6b678.jpg"
    ],
    location: "ЖК Ричмонд, Казань",
    duration: "3 месяца",
    price: "900 000 ₽"
  },
  {
    id: 3,
    title: "ЖК Ричмонд",
    area: "52 м²",
    year: "2023",
    description: "Уютная квартира для молодой семьи",
    fullDescription: "Уютный ремонт для молодой семьи. Квартира разделена на функциональные зоны. Использованы экологичные материалы, выполнена система умного дома.",
    image: "https://i.pinimg.com/originals/7c/a5/f6/7ca5f6b6ded548f12c5be0d62f82984c.jpg",
    images: [
      "https://i.pinimg.com/originals/7c/a5/f6/7ca5f6b6ded548f12c5be0d62f82984c.jpg",
      "https://i.pinimg.com/originals/66/98/b8/6698b89eaee79d02a44af19a56d6b678.jpg",
      "https://i.pinimg.com/736x/6e/06/7b/6e067bdcb61da470bf6e6d396dd22e83.jpg"
    ],
    location: "ЖК Ричмонд, Казань",
    duration: "2 месяца",
    price: "520 000 ₽"
  },
  {
    id: 4,
    title: "ЖК Savin Premier",
    area: "60 м²",
    year: "2024",
    description: "Светлый интерьер с панорамными окнами",
    fullDescription: "Ремонт квартиры с панорамным остеклением. Светлый интерьер с акцентными элементами. Выполнена перепланировка для максимального использования естественного освещения.",
    image: "https://i.pinimg.com/736x/6e/06/7b/6e067bdcb61da470bf6e6d396dd22e83.jpg",
    images: [
      "https://i.pinimg.com/736x/6e/06/7b/6e067bdcb61da470bf6e6d396dd22e83.jpg",
      "https://i.pinimg.com/originals/1a/c5/be/1ac5be952264312421bbd4619833bd22.jpg",
      "https://i.pinimg.com/originals/83/cb/c8/83cbc86b4a148e99a0740303787a7fb9.jpg"
    ],
    location: "ЖК Savin Premier, Казань",
    duration: "2 месяца",
    price: "600 000 ₽"
  },
  {
    id: 5,
    title: "Частный дом",
    area: "210 м²",
    year: "2025",
    description: "Просторный дом с авторским дизайном",
    fullDescription: "Авторский ремонт частного дома. Разработан индивидуальный дизайн-проект. Выполнены все виды работ: от черновой отделки до декора. Дом оборудован системой умного дома.",
    image: "https://img.freepik.com/premium-photo/3d-render-open-space-living-room-interior_175992-31.jpg",
    images: [
      "https://img.freepik.com/premium-photo/3d-render-open-space-living-room-interior_175992-31.jpg",
      "https://img.freepik.com/premium-photo/kitchen-apartment-room-before-after-renovation_10069-10932.jpg",
      "https://img.freepik.com/premium-photo/happy-young-couple-paint-green-blue-color-white-wall-their-new-home_530697-31495.jpg"
    ],
    location: "Казань, частный сектор",
    duration: "5 месяцев",
    price: "2 100 000 ₽"
  },
  {
    id: 6,
    title: "ул. Чатаева",
    area: "78 м²",
    year: "2025",
    description: "Классический ремонт с современными акцентами",
    fullDescription: "Ремонт квартиры в классическом стиле с современными элементами. Использованы качественные материалы: паркетная доска, натуральный камень, лепнина.",
    image: "https://t4.ftcdn.net/jpg/07/30/57/57/360_F_730575701_fiuluu1TeqZX1noYkWWCbHeyhKePnvPS.jpg",
    images: [
      "https://t4.ftcdn.net/jpg/07/30/57/57/360_F_730575701_fiuluu1TeqZX1noYkWWCbHeyhKePnvPS.jpg",
      "https://t3.ftcdn.net/jpg/07/44/07/30/360_F_744073002_EcSKgcUvD5aFw4gP2QuJLzWwikQLNTmB.jpg",
      "https://t4.ftcdn.net/jpg/06/83/96/03/360_F_683960310_iqUOBU6N58XUT55nqz4dvlOQKiPDOn9b.jpg"
    ],
    location: "ул. Чатаева, Казань",
    duration: "2,5 месяца",
    price: "780 000 ₽"
  }
];