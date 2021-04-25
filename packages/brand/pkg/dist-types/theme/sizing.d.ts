export declare type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare enum EnumBreakPoints {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "lg",
    xxl = "xxl"
}
declare type MQSizes = {
    [key: string]: string;
};
declare type Breakpoints = {
    [key: string]: string;
};
export interface Sizing {
    MQSizes: MQSizes;
    breakpoints: Breakpoints;
}
export declare type SizingInput = {
    +readonly [K in keyof Sizing]+?: Sizing[K];
} & {
    MQSizes?: MQSizes;
    breakpoints?: Breakpoints;
};
declare const createSizing: (sizing: SizingInput) => Sizing;
export default createSizing;
