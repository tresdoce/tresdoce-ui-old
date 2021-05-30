type LevelHeadings = 1 | 2 | 3 | 4 | 5 | 6 | number;

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

type FontWeight = 'thin' | 'light' | 'regular' | 'normal' | 'medium' | 'bold' | 'black' | number | string;

type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset' | string;

export interface TitleProps {
    className?: string;
    level: LevelHeadings;
    align?: AlignHeadings;
    capitalize?: FontCapitalize;
    weight?: FontWeight;
    fontStyle?: FontStyle;
    color?: string;
    size?: string;
    children: any;
}

export interface StyleTitleProps {
    align?: AlignHeadings;
    capitalize?: FontCapitalize;
    weight?: FontWeight;
    fontStyle?: FontStyle;
    color?: string;
    size?: string;
}
