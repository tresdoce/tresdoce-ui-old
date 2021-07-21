import React from 'react';
import { withTheme } from '../Theme';
import { BaselineProps } from './Baseline.types';
//import { NormalizeCSS, GlobalStyles } from './styles';

const Baseline: React.FC<BaselineProps> = ({ cdnBasepath }) => {

  return (<>
    {/*<NormalizeCSS/>*/}
    {/*<GlobalStyles/>*/}
    {/*<style>{`
      @import url('${cdnBasepath}/css/app.min.css');
    `}</style>*/}
  </>);
};

Baseline.displayName = '@tresdoce-ui/core/Baseline';

export default withTheme(Baseline);
