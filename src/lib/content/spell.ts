export interface Spell {
  'casting-time': string;
  classes: string;
  components: string;
  duration: string;
  level: number;
  link: string;
  range: string;
  school: string;
  source: string;
  spell: string;
  ritual?: boolean;
  concentration?: boolean;
}

export const Schools = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation'
] as const;

export type SchoolType = typeof Schools[number];

