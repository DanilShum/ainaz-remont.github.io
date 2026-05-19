export interface Project {
  id: number;
  title: string;
  area: string;
  year: string;
  description: string;
  image: string;
}

export const portfolio: Project[] = [
  {
    id: 1,
    title: "ЖК Легенда",
    area: "78 м²",
    year: "2025",
    description: "Современный ремонт в светлых тонах",
    image: "https://img.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400"
  },
  {
    id: 2,
    title: "ЖК Ричмонд",
    area: "90 м²",
    year: "2025",
    description: "Стильный интерьер в стиле минимализм",
    image: "https://img.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400"
  },
  {
    id: 3,
    title: "ЖК Ричмонд",
    area: "52 м²",
    year: "2023",
    description: "Уютная квартира для молодой семьи",
    image: "https://img.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400"
  },
  {
    id: 4,
    title: "ЖК Savin Premier",
    area: "60 м²",
    year: "2024",
    description: "Светлый интерьер с панорамными окнами",
    image: "https://img.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400"
  },
  {
    id: 5,
    title: "Частный дом",
    area: "210 м²",
    year: "2025",
    description: "Просторный дом с авторским дизайном",
    image: "https://img.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400"
  },
  {
    id: 6,
    title: "ул. Чатаева",
    area: "78 м²",
    year: "2025",
    description: "Классический ремонт с современными акцентами",
    image: "https://img.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400"
  }
];