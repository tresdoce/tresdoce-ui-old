import * as React from 'react';

import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { version } from '../packages/core/package.json';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: `TresDoce-UI ${version}`,
  brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
});

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  options: {
    theme,
    showPanel: true,
    isFullscreen: false,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

export const globalTypes = {
  theme: {
    name: 'TresDoce',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};

addDecorator(withKnobs);
addDecorator(withA11y);
