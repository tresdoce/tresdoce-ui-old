import React from 'react';
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import tdTheme from './theme';

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
    theme: tdTheme,
    showPanel: true,
    isFullscreen: false,
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { expanded: true },
  exportedParameter: 'exportedParameter',
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'TresDoce',
    description: 'Global theme for components',
    defaultValue: 'light',
  }
};

addDecorator(withKnobs);
addDecorator(withA11y);

