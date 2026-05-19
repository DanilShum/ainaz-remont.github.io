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
    image: "https://img.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400"
  },
  {
    id: 2,
    name: "Радик",
    role: "Прораб",
    bio: "Координирует работу бригады. Опыт в строительстве более 10 лет.",
    image: "https://img.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400"
  },
  {
    id: 3,
    name: "Алексей",
    role: "Дизайнер-проектировщик",
    bio: "Разрабатывает дизайн-проекты с учетом пожеланий клиента и технических возможностей.",
    image: "https://img.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400"
  },
  {
    id: 4,
    name: "Ильнур",
    role: "Мастер отделочных работ",
    bio: "Специалист по финишной отделке: покраска, обои, декоративные покрытия.",
    image: "https://img.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400"
  }
];