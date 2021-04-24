import * as React from 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean | string;
    global?: boolean | string;
  }
}

export interface BaselineProps {
  cdnBasepath: string;
}
