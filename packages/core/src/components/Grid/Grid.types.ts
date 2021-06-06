import React from 'react';

export interface GridProps {
    className?: string;
    children: React.ReactNode;
    gutter?: number;
    grow?: boolean;
    columns?: number;
    justify?: string;
    align?: string;
}
