import * as React from 'react';
import { TestComponentProps } from './TestComponent.types';
import {StyledDiv, StyledHeading ,StyledDescription } from './styles.jsx';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <StyledDiv data-testid='test-component' theme={theme}>
    <StyledHeading className='heading'>I'm the test component</StyledHeading>
    <StyledDescription>Made with love by mex ❤</StyledDescription>
  </StyledDiv>
);

export default TestComponent;
