declare type KeyRadius = string | number;
declare type Radius = {
    [K in keyof KeyRadius]: string;
};
export interface Radiuses {
    radius: Radius;
    percentages: Radius;
    [key: string]: Radius;
}
export declare type RadiusesInput = {
    +readonly [K in keyof Radiuses]+?: Radiuses[K];
} & {
    radius?: Radius;
    percentages?: Radius;
    [key: string]: Radius;
};
declare const createRadiuses: (radiuses?: RadiusesInput) => Radiuses;
export default createRadiuses;
