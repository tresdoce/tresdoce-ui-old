declare type KeyPallet = string | number;
declare type ColorPalette = {
    [K in keyof KeyPallet]: string;
};
export interface Palette {
    color: ColorPalette;
    primary: ColorPalette;
    success: ColorPalette;
    info: ColorPalette;
    warning: ColorPalette;
    danger: ColorPalette;
    [key: string]: ColorPalette;
}
export declare type PaletteInput = {
    +readonly [K in keyof Palette]+?: Palette[K];
} & {
    color?: ColorPalette;
    primary?: ColorPalette;
    gray?: ColorPalette;
    success?: ColorPalette;
    info?: ColorPalette;
    warning?: ColorPalette;
    danger?: ColorPalette;
    [key: string]: ColorPalette;
};
export declare const defaultPallete: {
    color: {
        white: string;
        gray: string;
        black: string;
        brown: string;
        pink: string;
        purple: string;
        violet: string;
        blue: string;
        teal: string;
        green: string;
        olive: string;
        yellow: string;
        orange: string;
        red: string;
    };
    primary: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
    gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
    success: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
    info: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
    warning: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
    danger: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        default: string;
        transparent: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
        };
    };
};
declare const createPalette: (palette?: PaletteInput) => Palette;
export default createPalette;
