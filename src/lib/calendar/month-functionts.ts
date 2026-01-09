export const days = ['Mani', 'Tyr', 'Wodan', 'Donar', 'Freya', 'Saturnus', 'Sunna'] as const;
export const months = [
  'Prima crescentis',
  'Secundus crescentis',
  'Tertium crescentis',
  'Quartus crescentis',
  'Prima summa',
  'Secundus summa',
  'Media summa',
  'Ultima secundi summa',
  'Ultima summa',
  'Prius decrescentes',
  'Secundus decrescentes',
  'Tertium decrescentes',
  'Quartus decrescentes'
];

export function calculate_day_of_year(
  week_index: number,
  day_index: number,
  start_day_index: number
): number {
  return calculate_day(week_index, day_index) + start_day_index;
}

export function day_name_at(day_of_year: number): string {
  return days[(day_of_year - 1) % days.length];
}

export function calculate_day_index_of_month(day_of_year: number): number {
  return (day_of_year - 1) % 28;
}

export function month_of_day(day_of_year: number): number {
  return Math.floor((day_of_year - 1) / 28);
}

export function calculate_day(week_index: number, day_index: number): number {
  return week_index * 7 + day_index + 1;
}

export function getId(name: string) {
  return name.slice(3).toLowerCase().replaceAll(' ', '_');
}
