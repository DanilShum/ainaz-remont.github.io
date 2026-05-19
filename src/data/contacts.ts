export interface Contacts {
  phone: string;
  phoneClean: string;
  city: string;
  address: string;
  owner: string;
  companyName: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const contacts: Contacts = {
  phone: "+7 939 386 83 81",
  phoneClean: "+79393868381",
  city: "Казань",
  address: "Проспект Победы",
  owner: "Айназ",
  companyName: "Айназ Ремонт"
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "#hero" },
  { label: "Команда", href: "#team" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contacts" }
];