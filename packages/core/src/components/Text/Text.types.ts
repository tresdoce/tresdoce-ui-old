export type AlignHeadings = 'left' | 'center' | 'right' | 'justify' | string;
export type FontCapitalize = 'initial' | 'inherit' | 'capitalize' | 'lowercase' | 'uppercase' | 'first-letter' | 'none' | string ;
export type FontWeight = 'extraLight' | 'light' | 'normal' | 'regular' | 'semiBold' | 'bold' | 'ultraBold' | string ;
export type FontStyle = 'normal' | 'italic' | 'oblique' | 'inherit' | 'initial' | 'unset' | string ;

export interface TextProps {
    className?: string;
    align?: AlignHeadings;
    capitalize?: FontCapitalize;
    weight?: FontWeight;
    fontStyle?: FontStyle;
    children: any;
}

export interface StyleTextProps {
    align?: AlignHeadings;
    capitalize?: FontCapitalize;
    weight?: FontWeight;
    fontStyle?: FontStyle;
}
