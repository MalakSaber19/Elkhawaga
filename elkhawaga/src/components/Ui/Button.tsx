import React from 'react';

interface ButtonProps {
    className?: string;
    path?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', path, children }) => {
    if (path) {
        return (
            <a href={path} className={`hover:bg-[#BE1E2D] ${className}`}>
                {children} <span>→</span>
            </a>
        );
    }

    return (
        <button className={`hover:bg-[#BE1E2D] ${className}`}>
            {children}<span>→</span>
        </button>
    );
};

export default Button;
