export const accentBgColors = {
  flamingo: 'bg-flamingo',
  fuchsia: 'bg-fuchsia',
  lavender: 'bg-lavender',
  lime: 'bg-lime',
  'palo-alto': 'bg-palo-alto',
  periwinkle: 'bg-periwinkle',
  poppy: 'bg-poppy',
  'robins-egg': 'bg-robins-egg',
  sapphire: 'bg-sapphire',
  spirited: 'bg-spirited',
  'cardinal-red': 'bg-cardinal-red',
  'digital-red': 'bg-digital-red',
  'digital-red-light': 'bg-digital-red-light',
};
export type AccentColorType = keyof typeof accentBgColors;

export const accentBorderColors = {
  flamingo: 'border-flamingo',
  fuchsia: 'border-fuchsia',
  lavender: 'border-lavender',
  lime: 'border-lime',
  'palo-alto': 'border-palo-alto',
  periwinkle: 'border-periwinkle',
  poppy: 'border-poppy',
  'robins-egg': 'border-robins-egg',
  sapphire: 'border-sapphire',
  spirited: 'border-spirited',
  'cardinal-red': 'border-cardinal-red',
  'digital-red': 'border-digital-red',
  'digital-red-light': 'border-digital-red-light',
};
export type AccentBorderColorType = AccentColorType;

// TODO: We might be not need this
export const storyHeroAspectRatios = {
  '1x1': 'aspect-w-1 aspect-h-1',
  '2x1': 'aspect-w-2 aspect-h-1',
  '5x8': 'aspect-w-5 aspect-h-8',
  '16x9': 'aspect-w-16 aspect-h-9',
  'free': '',
};
export type StoryHeroAspectRatioType = keyof typeof storyHeroAspectRatios;

export const storyHeroAspectRatiosDesktop = {
  '1x1': 'lg:aspect-w-1 lg:aspect-h-1',
  '2x1': 'lg:aspect-w-2 lg:aspect-h-1',
  '5x8': 'lg:aspect-w-5 lg:aspect-h-8',
  '16x9': 'lg:aspect-w-16 lg:aspect-h-9',
  'free': '',
};

// Many components have dark and light themes - these are the basic options
export const bgTextColorPairsBlackWhite = {
  black: 'bg-gc-black text-white',
  white: 'bg-white text-gc-black',
};
export type BgTextColorPairBlackWhiteType = keyof typeof bgTextColorPairsBlackWhite;

// Some components, eg, Split Posters, have additional options
export const bgTextColorPairsAdditional = {
  'black-70': 'bg-black-true/70 text-white',
  'white-80': 'bg-white/80 text-gc-black',
};

export const bgTextColorPairs = {
  ...bgTextColorPairsBlackWhite,
  ...bgTextColorPairsAdditional,
};
export type BgTextColorPairType = keyof typeof bgTextColorPairs;

export const paddingTops = {
  none: '',
  base: 'rs-pt-0',
  1: 'rs-pt-1',
  2: 'rs-pt-2',
  3: 'rs-pt-3',
  4: 'rs-pt-4',
  5: 'rs-pt-5',
  6: 'rs-pt-6',
  7: 'rs-pt-7',
  8: 'rs-pt-8',
  9: 'rs-pt-9',
  10: 'rs-pt-10',
};

export const paddingBottoms = {
  none: '',
  base: 'rs-pb-0',
  1: 'rs-pb-1',
  2: 'rs-pb-2',
  3: 'rs-pb-3',
  4: 'rs-pb-4',
  5: 'rs-pb-5',
  6: 'rs-pb-6',
  7: 'rs-pb-7',
  8: 'rs-pb-8',
  9: 'rs-pb-9',
  10: 'rs-pb-10',
};

export const paddingVerticals = {
  none: '',
  base: 'rs-py-0',
  1: 'rs-py-1',
  2: 'rs-py-2',
  3: 'rs-py-3',
  4: 'rs-py-4',
  5: 'rs-py-5',
  6: 'rs-py-6',
  7: 'rs-py-7',
  8: 'rs-py-8',
  9: 'rs-py-9',
  10: 'rs-py-10',
};
export type PaddingType = keyof typeof paddingTops;

// Add other margins as needed. Used for spacing between elements.
export const marginBottoms = {
  none: '',
  base: 'rs-mb-0',
  1: 'rs-mb-1',
  2: 'rs-mb-2',
  3: 'rs-mb-3',
  4: 'rs-mb-4',
  5: 'rs-mb-5',
  6: 'rs-mb-6',
  7: 'rs-mb-7',
  8: 'rs-mb-8',
  9: 'rs-mb-9',
  10: 'rs-mb-10',
};
export type MarginType = keyof typeof marginBottoms;