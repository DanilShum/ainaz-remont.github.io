export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Айназ",
    role: "Руководитель",
    bio: "Ответственный за качество каждого проекта. Контролирует все этапы ремонта.",
    image: "./assets/teem/people.png"
  },
  {
    id: 2,
    name: "Радик",
    role: "Прораб",
    bio: "Координирует работу бригады. Опыт в строительстве более 10 лет.",
    image: "./assets/teem/people.png"
  },
  {
    id: 3,
    name: "Алексей",
    role: "Дизайнер-проектировщик",
    bio: "Разрабатывает дизайн-проекты с учетом пожеланий клиента и технических возможностей.",
    image: "./assets/teem/people.png"
  },
  {
    id: 4,
    name: "Ильнур",
    role: "Мастер отделочных работ",
    bio: "Специалист по финишной отделке: покраска, обои, декоративные покрытия.",
    image: "./assets/teem/people.png"
  }
];