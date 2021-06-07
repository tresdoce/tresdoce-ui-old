import React from 'react';

type GridJustify = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'initial';

type GridAlign = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'initial';

export interface GridProps {
  className?: string;
  children: React.ReactNode;
  gutter?: number;
  grow?: boolean;
  columns?: number;
  justify?: GridJustify;
  align?: GridAlign;
}