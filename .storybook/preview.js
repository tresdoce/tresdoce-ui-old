import React from 'react';
import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { createTheme } from '../packages/brand/src/';
import { Layout } from '../packages/core/src/index';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    showPanel: true,
    isFullscreen: false,
    storySort: {
      method: 'alphabetical',
      order: ['Intro', 'Design System', ['Colors', 'Font'], 'Components'],
    },
  },
  controls: {
    disable: false,
    expanded: false,
    hideNoControlsWarning: true
  },
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

  const containerFluid = true;
  const row = true;

  return (
    <>
      <Layout
        theme={theme}
        cdnBasepath={cdnBasepath}
        containerFluid={containerFluid}
        row={row}
      >
        {story()}
      </Layout>
    </>
  );
};

addDecorator(GlobalWrapper);


