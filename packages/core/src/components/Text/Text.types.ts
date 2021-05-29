type AlignHeadings = 'left' | 'center' | 'right' | 'justify' | string;
type FontCapitalize =
  'initial'
  | 'inherit'
  | 'capitalize'
  | 'lowercase'
  | 'uppercase'
  | 'first-letter'
  | 'none'
  | string;

type FontWeight = 'thin' | 'light' | 'regular' | 'normal' | 'medium' | 'bold' | 'black' | number;

type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset' | string;

export interface TextProps {
  className?: string;
  align?: AlignHeadings;
  capitalize?: FontCapitalize;
  weight?: FontWeight;
  fontStyle?: FontStyle;
  color?: string;
  size?: string;
  children: any;
}

export interface StyleTextProps {
  align?: AlignHeadings;
  capitalize?: FontCapitalize;
  weight?: FontWeight;
  fontStyle?: FontStyle;
  color?: string;
  size?: string;
}
