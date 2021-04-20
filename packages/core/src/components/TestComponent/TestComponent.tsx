import * as React from 'react';
import { withTheme } from '../Theme';
import { TestComponentProps } from './TestComponent.types';
import { StyledDescription,StyledDescription2, StyledDiv, StyledHeading } from './styles.jsx';

const TestComponent: React.FC<TestComponentProps> = ({ theme, type, ...rest }) => (
  <StyledDiv data-testid='test-component' theme={theme} type={type}>
    <StyledHeading theme={theme} className='heading'>I'm the test component</StyledHeading>
    <StyledDescription theme={theme}>Made with love by mex ❤</StyledDescription>
    <StyledDescription2>test</StyledDescription2>
  </StyledDiv>);

export default withTheme(TestComponent);
