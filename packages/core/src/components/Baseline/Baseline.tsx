import * as React from 'react';
import { withTheme } from '../Theme';
import { BaselineProps } from './Baseline.types';

const Baseline: React.FC<BaselineProps> = ({ cdnBasepath }) => {

  return (<>
    <style>{`
      @import url('${cdnBasepath}/css/app.min.css');
    `}</style>
  </>);
};

Baseline.displayName = '@tresdoce-ui/core/Baseline';

export default withTheme(Baseline);
