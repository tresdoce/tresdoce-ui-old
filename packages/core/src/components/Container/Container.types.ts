import React from 'react';

export interface ContainerProps {
    className?: string;
    children: React.ReactNode;
    row?: boolean;
    fluid?: boolean;
    size?: string;
}
