import * as React from 'react';
import { withTheme } from '../Theme';
import filterProps from '../../utils/filter-props';

import { TestComponentProps } from './TestComponent.types';
import { StyledDescription, StyledDescription2, StyledDiv, StyledHeading } from './styles.jsx';

const TestComponent: React.FC<TestComponentProps> = ({
 type,
 ...rest
}) => {
  const filteredProps = filterProps(rest);
  return (
    <StyledDiv {...filteredProps} data-testid='test-component' className={`test-component-${type}`} type={type}>
      <StyledHeading className='heading'>I'm the test component</StyledHeading>
      <StyledDescription>Made with love by mex ❤</StyledDescription>
      <StyledDescription2>test</StyledDescription2>
    </StyledDiv>
  );
};

export default withTheme(TestComponent);
