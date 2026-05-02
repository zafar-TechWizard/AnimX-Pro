import { cards } from './cards';
import { buttons } from './buttons';
import { cursors } from './cursors';
import { backgrounds } from './backgrounds';
import { loaders } from './loaders';
import { typography } from './typography';

export type Category = 'Cards' | 'Buttons' | 'Cursors' | 'Backgrounds' | 'Loaders' | 'Typography';

export interface ComponentItem {
  id: string;
  name: string;
  description: string;
  category: Category;
  new?: boolean;
  code: {
    html: string;
    css: string;
    js: string;
  };
}

export const COMPONENTS: ComponentItem[] = [
  ...cards,
  ...buttons,
  ...cursors,
  ...backgrounds,
  ...loaders,
  ...typography,
];

export function getComponent(id: string) {
  return COMPONENTS.find((c) => c.id === id);
}

export function getComponentsByCategory() {
  const grouped: Record<string, ComponentItem[]> = {};
  COMPONENTS.forEach((c) => {
    if (!grouped[c.category]) grouped[c.category] = [];
    grouped[c.category].push(c);
  });
  return grouped;
}
