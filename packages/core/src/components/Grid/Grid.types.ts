import React from 'react';

type GridJustify = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'initial' | string;

type GridAlign = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'initial' | string;

export interface GridProps {
  className?: string;
  children: React.ReactNode;
  gutter?: string | number;
  spacing?: string | number;
  grow?: boolean;
  row?: boolean;
  columns?: number;
  justify?: GridJustify;
  align?: GridAlign;
  style?: React.CSSProperties;
}
