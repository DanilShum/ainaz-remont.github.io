export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Ремонт под ключ",
    description: "Полный комплекс работ от черновой до чистовой отделки. Вы получаете готовую к проживанию квартиру.",
    icon: "home"
  },
  {
    id: 2,
    title: "Дизайн-проект",
    description: "Разработка 3D-визуализации, чертежей и рабочей документации для реализации вашего интерьера.",
    icon: "pen-tool"
  },
  {
    id: 3,
    title: "Частичный ремонт",
    description: "Отдельные виды работ: отделка санузла, кухни, комнаты или ремонт по комнатам.",
    icon: "hammer"
  },
  {
    id: 4,
    title: "Замер и консультация",
    description: "Бесплатный выезд замерщика на объект. Консультация по материалам и срокам.",
    icon: "ruler"
  }
];