import React from 'react';

export interface ColProps {
    className?: string;
    children: React.ReactNode;
    span: number;
    columns?: number;
    offset?: number;
    gutter?: string | number;
    grow?: boolean;
    spacing?: string | number;
    style?: React.CSSProperties;
}
