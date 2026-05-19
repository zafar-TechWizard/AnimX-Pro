import { cards } from './cards';
import { buttons } from './buttons';
import { cursors } from './cursors';
import { backgrounds } from './backgrounds';
import { loaders } from './loaders';
import { typography } from './typography';
import { navigations } from './navigations';
import { inputs } from './inputs';
import { dataViz } from './data-viz';

export type Category = 'Cards' | 'Buttons' | 'Cursors' | 'Backgrounds' | 'Loaders' | 'Typography' | 'Navigations' | 'Inputs' | 'Data Visualization';

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
  ...navigations,
  ...inputs,
  ...dataViz,
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
