export interface Advantage {
  id: number;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const advantages: Advantage[] = [
  {
    id: 1,
    title: "Работаем без посредников",
    description: "Своя бригада мастеров. Никаких сторонних подрядчиков — один договор, одна ответственность.",
    stat: "100%",
    statLabel: "контроль качества"
  },
  {
    id: 2,
    title: "Фиксированная смета",
    description: "Цена согласовывается до начала работ и не меняется в процессе ремонта.",
    stat: "0%",
    statLabel: "непредвиденных расходов"
  },
  {
    id: 3,
    title: "Соблюдаем сроки",
    description: "Работаем по графику. Задержка — компенсация. Это прописано в договоре.",
    stat: "15+",
    statLabel: "лет опыта"
  },
  {
    id: 4,
    title: "Гарантия на работы",
    description: "Даем официальную гарантию на все выполненные работы до 3 лет.",
    stat: "3 года",
    statLabel: "гарантия"
  }
];