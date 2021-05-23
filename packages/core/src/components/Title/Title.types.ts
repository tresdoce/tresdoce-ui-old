export type LevelHeadings = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
    className?: string;
    level: LevelHeadings;
    children: any;
}
