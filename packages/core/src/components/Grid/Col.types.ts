import React from 'react';

export interface ColProps {
    className?: string;
    span: number;
    columns?: number;
    offset?: number;
    gutter?: number;
    grow?: boolean;
    spacing?: number;
    style?: React.CSSProperties;
}
