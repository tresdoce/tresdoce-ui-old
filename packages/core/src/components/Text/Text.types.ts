export type AlignHeadings = 'left' | 'center' | 'right' | 'justify';

export interface TextProps {
    className?: string;
    align?: AlignHeadings;
    children: any;
}

export interface StyleTextProps {
    align?: AlignHeadings;
}
