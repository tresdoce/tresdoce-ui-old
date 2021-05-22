import * as React from 'react';
import { withTheme } from '../Theme';
import filterProps from '../../utils/filter-props';

import { TestComponentProps } from './TestComponent.types';
import { StyledDescription, StyledDescription2, StyledDiv, StyledHeading } from './styles';

const TestComponent: React.FC<TestComponentProps> = ({
 mode,
 ...rest
}) => {
  const filteredProps = filterProps(rest);
  return (
    <StyledDiv {...filteredProps} data-testid='test-component' className={`test-component-${mode}`} mode={mode}>
      <StyledHeading className='heading'>I'm the test component</StyledHeading>
      <StyledDescription>Made with love by mex ❤</StyledDescription>
      <StyledDescription2>test</StyledDescription2>
    </StyledDiv>
  );
};

export default withTheme(TestComponent);
