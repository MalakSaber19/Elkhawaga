import React from 'react';

interface ButtonProps {
    className?: string;
    path?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, path, children }) => {
    if (path) {
        return (
            <a href={path} className={className}>
                {children}
            </a>
        );
    }
    return (
        <button className={className} >
            {children}
        </button>
    );
};

export default Button;
