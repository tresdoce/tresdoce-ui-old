import React from 'react';
import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { createTheme } from '../packages/brand/src/';
import { Layout } from '../packages/core/src/index';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    //container: DocsContainer,
    page: DocsPage,
  },
  options: {
    showPanel: true,
    isFullscreen: false,
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { disable: true, expanded: true },
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
  },
};


const GlobalWrapper = story => {
  const theme = createTheme();
  const cdnBasepath = '';

  return (
    <>
      <Layout theme={theme} containerFluid={false} cdnBasepath={cdnBasepath}>{story()}</Layout>
    </>
  );
};

addDecorator(GlobalWrapper);
