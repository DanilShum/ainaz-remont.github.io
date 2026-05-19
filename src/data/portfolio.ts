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
    image: "/assets/project/room1.jpeg",
    images: [
      "/assets/project/room1.jpeg",
      "/assets/project/room2.jpeg",
      "/assets/project/image-3252732.png"
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
    image: "/assets/project/room2.jpeg",
    images: [
      "/assets/project/room2.jpeg",
      "/assets/project/image-3252730.png",
      "/assets/project/image-3252729.png"
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
    image: "/assets/project/image-3252730.png",
    images: [
      "/assets/project/image-3252730.png",
      "/assets/project/image-3252729.png",
      "/assets/project/image-3252727.png"
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
    image: "/assets/project/image-3252729.png",
    images: [
      "/assets/project/image-3252729.png",
      "/assets/project/image-3252727.png",
      "/assets/project/image-3252732.png"
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
    image: "/assets/project/image-3252727.png",
    images: [
      "/assets/project/image-3252727.png",
      "/assets/project/room1.jpeg",
      "/assets/project/room2.jpeg"
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
    image: "/assets/project/image-3252732.png",
    images: [
      "/assets/project/image-3252732.png",
      "/assets/project/image-3252730.png",
      "/assets/project/image-3252729.png"
    ],
    location: "ул. Чатаева, Казань",
    duration: "2,5 месяца",
    price: "780 000 ₽"
  }
];