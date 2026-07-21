interface SpokenLanguageShape {
  /** Key into the localized `languages.names` / `languages.levels` maps. */
  key: string;
  /** Proficiency, as a 0-100 meter width. */
  meter: number;
}

export const spokenLanguages = [
  { key: 'uzbek', meter: 100 },
  { key: 'russian', meter: 100 },
  { key: 'english', meter: 88 },
  { key: 'german', meter: 52 },
] as const satisfies readonly SpokenLanguageShape[];

export type SpokenLanguageKey = (typeof spokenLanguages)[number]['key'];
