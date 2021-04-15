import React from 'react';
import { withTheme } from '../Theme';

export interface FontBaselineProps {
  cdnBasepath: string;
}

export const Baseline: React.FC<FontBaselineProps> = ({ cdnBasepath }) => (
  <>
    <style jsx global>{`
      @import url('${cdnBasepath}/css/app.min.css');
    `}</style>
  </>
);

Baseline.displayName = 'Baseline';

export default withTheme(Baseline);
