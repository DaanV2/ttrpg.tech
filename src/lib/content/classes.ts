export const Classes = [
  'Bard',
  'Cleric',
  'Druid',
  'Paladin',
  'Ranger',
  'Sorcerer',
  'Wizard',
  'Warlock',
] as const;

export type ClassType = typeof Classes[number];