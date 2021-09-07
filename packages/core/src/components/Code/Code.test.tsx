import * as React from 'react';
import { render } from '@testing-library/react';
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Code from './Code';
import { CodeProps } from './Code.types';

describe('Component - Code', () => {
  let props: CodeProps;
  const theme = createTheme();

  beforeEach(() => {
    props = {
      children: `<Code>React.createElement()</Code>`,
      block: false,
    };
    props['data-testId'] = 'id-test-Code-component';
  });

  const renderComponent = () =>
    render(
      <Layout theme={theme} cdnBasepath={''}>
        <Code {...props} />
      </Layout>
    );
  const updateComponent = (renderer, props) =>
    renderer(
      <Layout theme={theme} cdnBasepath={''}>
        <Code {...props} />
      </Layout>
    );

  it('Should has a correct displayName', () => {
    expect(Code.displayName).toEqual('Code');
  });

  it('should render text content correctly', () => {
    props.children = `<p>Test code</p>`;

    const { getByTestId, rerender } = renderComponent();
    const component = getByTestId(props['data-testId']);
    expect(component.textContent).toContain(props.children);

    props.children = `<p>Test code update</p>`;
    updateComponent(rerender, props);
    expect(component.textContent).toContain(props.children);
  });

  it('Should be render pre or code html tag by block prop', () => {
    props.children = `<p>Test code</p>`;
    props.block = false;

    const { getByTestId, rerender } = renderComponent();
    let component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual('CODE');

    props.children = `<p>Test code update</p>`;
    props.block = true;

    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual('PRE');
  });
});
