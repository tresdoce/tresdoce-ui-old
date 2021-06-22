import React from 'react';
import Col from './Col';

export interface ColProps {
    className?: string;
    children: React.ReactNode;
    span: number;
    columns?: number;
    offset?: number;
    gutter?: string | number;
    grow?: boolean;
    style?: React.CSSProperties;
}

export interface ColStyleProps extends ColProps{
    spacing?: string | number;
}
