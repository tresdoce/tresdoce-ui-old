const path = require('path');
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import tdTheme from './theme';

import { createTheme } from '../packages/brand/src/';
import { Layout } from '../packages/core/src/index';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    //container: DocsContainer,
    page: DocsPage,
  },
  options: {
    theme: tdTheme,
    showPanel: true,
    isFullscreen: false,
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: { disabled: true, expanded: true },
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
  const theme = createTheme({
    palette:{
    }
  });

  const cdnBasepath = '';

  return (
    <>
      <Layout theme={theme} cdnBasepath={cdnBasepath}>{story()}</Layout>
    </>
  );
};

addDecorator(GlobalWrapper);
addDecorator(withKnobs);
