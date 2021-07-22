type StrokeLinecap = 'round' | 'square' | 'butt'
type StrokeLinejoin = 'round' | 'bevel' | 'miter'

export interface IconProps {
  className?: string;
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  strokeColor?: string;
  strokeWidth?: number;
  strokeLinecap?: StrokeLinecap;
  strokeLinejoin?: StrokeLinejoin;
}
