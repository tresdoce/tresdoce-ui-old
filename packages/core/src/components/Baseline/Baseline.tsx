import * as React from 'react';
import { withTheme } from '../Theme';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean | string;
    global?: boolean | string;
  }
}

export interface FontBaselineProps {
  cdnBasepath: string;
}

export const Baseline: React.FC<FontBaselineProps> = ({ cdnBasepath }) => (
  <>
    <style jsx={"true"} global={"true"}>{`
      @import url('${cdnBasepath}/css/app.min.css');
    `}</style>
  </>
);

Baseline.displayName = 'Baseline';

export default withTheme(Baseline);
