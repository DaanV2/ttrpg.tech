export const moons = ['🌑', '🌑', '🌒', '🌒', '🌔', '🌕', '🌖', '🌘', '🌘', '🌑'] as const;
export const once_per_month = 28 / moons.length;

export function moonAt(index: number) {
  index = index % moons.length;
  return moons[index];
}

export function allMoonsAt(day_of_year: number) {
  return [
    moonAt(Math.floor(day_of_year / once_per_month)),
    moonAt(Math.floor(day_of_year / (once_per_month * 3))),
    moonAt(Math.floor(day_of_year / (once_per_month * 13)))
  ];
}
