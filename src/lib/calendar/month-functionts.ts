export const days = ['Mani', 'Tyr', 'Wodan', 'Donar', 'Freya', 'Saturnus', 'Sunna'] as const;

export function calculate_day_of_year(
  week_index: number,
  day_index: number,
  start_day_index: number
): number {
  return calculate_day(week_index, day_index) + start_day_index;
}

export function calculate_day(week_index: number, day_index: number): number {
  return week_index * 7 + day_index + 1;
}

export function getId(name: string) {
  return name.slice(3).toLowerCase().replaceAll(' ', '_');
}
