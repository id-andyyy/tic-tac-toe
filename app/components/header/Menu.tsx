import { MenuItem } from "@components/header/MenuItem";

export function Menu() {
  return (
    <ul className="flex items-center gap-6">
      <MenuItem>Создать</MenuItem>
      <MenuItem>Поиск</MenuItem>
      <MenuItem>Лидеры</MenuItem>
      <MenuItem>Правила</MenuItem>
    </ul>
  );
}
