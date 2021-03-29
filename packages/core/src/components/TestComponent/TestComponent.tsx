import * as React from 'react';
import styled from 'styled-components';

import { TestComponentProps } from './TestComponent.types';
import './style.css'

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div data-testid='test-component' className={theme}>
    <h1 className='heading'>I'm the test component</h1>
    <h2>Made with love by mex ❤</h2>
  </div>
);

export default TestComponent;
