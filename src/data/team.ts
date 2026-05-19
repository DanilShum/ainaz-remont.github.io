import team1 from '../assets/teem/people.png';
import room1 from '../assets/project/room1.jpeg';
import room2 from '../assets/project/room2.jpeg';
import img1 from '../assets/project/image-3252727.png';
import img2 from '../assets/project/image-3252729.png';
import img3 from '../assets/project/image-3252730.png';
import img4 from '../assets/project/image-3252732.png';

export const images = {
  team: team1,
  room1,
  room2,
  img1,
  img2,
  img3,
  img4,
};

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
    image: images.team
  },
  {
    id: 2,
    name: "Радик",
    role: "Прораб",
    bio: "Координирует работу бригады. Опыт в строительстве более 10 лет.",
    image: images.team
  },
  {
    id: 3,
    name: "Алексей",
    role: "Дизайнер-проектировщик",
    bio: "Разрабатывает дизайн-проекты с учетом пожеланий клиента и технических возможностей.",
    image: images.team
  },
  {
    id: 4,
    name: "Ильнур",
    role: "Мастер отделочных работ",
    bio: "Специалист по финишной отделке: покраска, обои, декоративные покрытия.",
    image: images.team
  }
];