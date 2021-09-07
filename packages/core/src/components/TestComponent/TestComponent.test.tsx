import * as React from 'react';
import { render } from '../../utils/test-utils';

import TestComponent from './TestComponent';
import { TestComponentProps } from './TestComponent.types';

describe('Component - TestComponent', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      mode: 'primary',
    };
    props['data-testId'] = 'test-component';
  });

  it('Should has a correct displayName', () => {
    expect(TestComponent.displayName).toEqual('TestComponent');
  });

  it('should have primary className with default props', () => {
    const wrapper = render(<TestComponent {...props} />);
    const testComponent = wrapper.getByTestId(props['data-testId']);
    expect(testComponent).toHaveClass('test-component-primary');
  });

  it('should have secondary className with theme set as secondary', () => {
    /*props.mode = 'secondary';
    const wrapper = render(<TestComponent {...props} />);
    let testComponent = wrapper.getByTestId(props['data-testId']);
    expect(testComponent).toHaveClass('test-component-secondary');

    props.mode = 'primary';
    wrapper.rerender(<TestComponent {...props} />);
    testComponent = wrapper.getByTestId(props['data-testId']);
    expect(testComponent).toHaveClass('test-component-primarys');*/

    props.mode = 'secondary';
    const { getByTestId, rerender } = render(<TestComponent {...props} />);
    let component = getByTestId(props['data-testId']);
    expect(component).toHaveClass('test-component-secondary');

    props.mode = 'primary';
    rerender(<TestComponent {...props} />);
    component = getByTestId(props['data-testId']);
    expect(component).toHaveClass('test-component-primary');
  });
});
