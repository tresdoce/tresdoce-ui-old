export type LevelHeadings = 1 | 2 | 3 | 4 | 5 | 6;
export type AlignHeadings = 'left' | 'center' | 'right' | 'justify';

export interface TitleProps {
    className?: string;
    level: LevelHeadings;
    align?: AlignHeadings;
    children: any;
}

export interface StyleTitleProps {
    align?: AlignHeadings;
}
