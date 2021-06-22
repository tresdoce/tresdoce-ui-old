import * as React from "react";
import { render } from "@testing-library/react";
import { createTheme } from '@tresdoce-ui/brand';
import Layout from '../Layout';

import Title from "./Title";
import { TitleProps } from "./Title.types";


describe("Component - Title", () => {
  let props: TitleProps;

  beforeEach(() => {
    props = {
      'className':'',
      'level': null,
      'color':'',
      'size':'',
      'align': '',
      'fontStyle':'',
      'weight':'',
      'capitalize':'',
      'children': 'This is a heading'
    };
  });

  const renderComponent = () => render(<Layout theme={createTheme()} cdnBasepath={''}><Title {...props} /></Layout>);
  const updateComponent = (rerender, props) => rerender(<Layout theme={createTheme()} cdnBasepath={''}><Title {...props} /></Layout>);

  it('Should has a correct displayName', () =>{
    expect(Title.displayName).toEqual('@tresdoce-ui/core/Title');
  });

  it('Should be dont render heading component', () => {
    props.level = 7;
    props['data-testId'] = 'id-test-heading-component';

    const { queryByTestId } = renderComponent();
    const component = queryByTestId(props['data-testId']);
    expect(component).toBeNull()
  });

  it('Should be render heading component', () => {
    props.level = 1;
    props['data-testId'] = 'id-test-heading-component';

    const { getByTestId } = renderComponent();
    expect(getByTestId).not.toBeNull();
    const component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual('H1');
    expect(component).toHaveTextContent(props.children);
    expect(component).toHaveStyle(`text-align: left`);
    expect(component).toHaveStyle(`font-style: normal`);
    expect(component).toHaveStyle(`font-weight: 700`);
    expect(component).toHaveStyle(`text-transform: initial`);
  });

  it('Should be render H1, H2, H3, H4, H5 and H6 heading component', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);

    props.level = 2;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);

    props.level = 3;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);

    props.level = 4;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);

    props.level = 5;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);

    props.level = 6;
    updateComponent(rerender, props);
    component = getByTestId(props['data-testId']);
    expect(component.tagName).toEqual(`H${props.level}`);
  })

  it('Should be render heading component with different align', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`text-align: left`);

    props.align = 'center';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'right';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);

    props.align = 'justify';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-align: ${props.align}`);
  });

  it('Should be render heading component with different color', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`color: #1B1C1D`);

    props.color = '#34354A';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`color: ${props.color}`);
  });

  it('Should be render heading component with different size', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-size: 2.625rem`);

    props.size = '30px';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-size: ${props.size}`);
  });

  it('Should be render heading component with different font style', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-style: normal`);

    props.fontStyle = 'italic';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-style: ${props.fontStyle}`);
  });

  it('Should be render heading component with different font weight', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`font-weight: 700`);

    props.weight = 'thin';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 100`);

    props.weight = 'light';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 300`);

    props.weight = 'regular';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 400`);

    props.weight = 'medium';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 500`);

    props.weight = 'bold';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 700`);

    props.weight = 'black';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`font-weight: 900`);
  });

  it('Should be render heading component with different capitalize', () => {
    props['data-testId'] = 'id-test-heading-component';
    props.level = 1;

    const { getByTestId, rerender } = renderComponent();
    expect(getByTestId).not.toBeNull();
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveStyle(`text-transform: initial`);

    props.capitalize = 'capitalize';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'lowercase';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'uppercase';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);

    props.capitalize = 'first-letter';
    updateComponent(rerender, props);
    expect(component).toHaveStyle(`text-transform: ${props.capitalize}`);
  });
});
