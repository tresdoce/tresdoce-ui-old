import React from 'react';
import { create, themes } from '@storybook/theming';
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { version } from '../packages/core/package.json';


const theme = create({
  base: 'light',
  brandTitle: `TresDoce-UI ${version}`,
  brandUrl: 'https://github.com/tresdoce/tresdoce-ui',
});

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport:{
    viewports: INITIAL_VIEWPORTS
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    theme,
    showPanel: true,
    isFullscreen: false,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { expanded: true },
};

export const globalTypes = {
  theme: {
    name: 'TresDoce',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { icon: 'circlehollow', title: 'light', value: 'light' },
        { icon: 'circle', title: 'dark', value: 'dark' },
      ],
    },
  }
};

addDecorator(withKnobs);
//addDecorator(withA11y);
