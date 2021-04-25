declare interface FontFamily {
    [name: string]: string;
}
declare interface FontSizes {
    [name: string]: number;
}
declare interface LineHeight {
    [name: string]: string;
}
declare interface LetterSpacing {
    [name: string]: string;
}
declare interface FontWeight {
    [name: string]: string | number;
}
declare interface FontAlign {
    [name: string]: string;
}
declare interface ApplicationsSizes {
    [name: string]: string;
}
export interface Typography {
    family: FontFamily;
    sizes: FontSizes;
    lineHeight: LineHeight;
    letterSpacing: LetterSpacing;
    weight: FontWeight;
    align: FontAlign;
    applicationsSizes: ApplicationsSizes;
}
export declare type TypographyInput = {
    +readonly [K in keyof Typography]+?: Typography[K];
} & {
    fontSize?: number;
    htmlFontSize?: number;
};
declare const createTypography: (typography: TypographyInput) => Typography;
export default createTypography;
