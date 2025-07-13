import React from 'react';

export interface BaseCardProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    as?: React.ElementType;
}

export function BaseCard({ className = '', children, ...props}: BaseCardProps) {
    const Tag = props.as || 'div';
    return (
        <Tag {...props} className={`h-16 w-32 text-center rounded-2xl border-2 flex justify-center  items-center ${className}`}>
            {children}
        </Tag> 
    );
}
