import { DEFAULT_TAGS } from 'state/types/reports';

export const compareTags = (category: string, activeTags: string[]) =>
  activeTags.includes(category) || activeTags.includes(DEFAULT_TAGS.ALL);
