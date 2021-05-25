export type AlignHeadings = 'left' | 'center' | 'right' | 'justify';
export type TextCaitalize = 'initial' | 'inherit' | 'capitalize' | 'lowercase' | 'lowercase' | 'uppercase' | 'first-letter' | 'none';

export interface TextProps {
    className?: string;
    align?: AlignHeadings;
    capitalize?: TextCaitalize;
    children: any;
}

export interface StyleTextProps {
    align?: AlignHeadings;
    capitalize?: TextCaitalize;
}
