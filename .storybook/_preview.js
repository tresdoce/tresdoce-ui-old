import React from 'react';
import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { createTheme } from '../packages/brand/src/';
import { Layout } from '../packages/core/src/index';

//import { select, boolean } from '@storybook/addon-knobs';

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
    order: ['Intro', 'Design System', ['Colors', 'Font'], 'Components'],
    //storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { disable: false, expanded: false },
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

  const containerFluidOpt = {
    'container': false,
    'container-fluid': true,
  };
  const containerFluid = true;//select('Preview Container', containerFluidOpt, false);
  const row = true;//boolean('Preview Container Row', false)

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


