import * as React from 'react';
import { withTheme } from '../Theme';
import {BaselineProps} from './Baseline.types'

export const Baseline: React.FC<BaselineProps> = ({ cdnBasepath }) => (
  <>
    <style jsx={"true"} global={"true"}>{`
      @import url('${cdnBasepath}/css/app.min.css');
    `}</style>
  </>
);

Baseline.displayName = 'Baseline';

export default withTheme(Baseline);
