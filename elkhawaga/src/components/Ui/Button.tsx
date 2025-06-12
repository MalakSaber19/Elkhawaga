import React from 'react';

interface ButtonProps {
    className?: string;
    path?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', path, children }) => {
    if (path) {
        return (
            <a
                href={path}
                className={`archivo group relative inline-flex items-center justify-center overflow-hidden border-2 border-[#BE1E2D] py-2 px-7 rounded-[32px] transition-all duration-300 ease-in-out  ${className}`}
            >
                <span className="relative z-10 group-hover:[text-shadow:3px_3px_8px_var(--tw-shadow-color)] shadow-white ">{children}   →</span>


                <div className="group-hover:[bg-shadow:10px_10px_8px_var(--tw-shadow-color)] shadow-[#BE1E2D] absolute -right-80 -bottom-44 w-80 h-96 bg-[#BE1E2D] rotate-[35deg] transition-all duration-300 ease-in-out group-hover:w-full group-hover:bottom-0 group-hover:right-0 group-hover:h-full group-hover:rotate-0 group-hover:rounded-[32px]" />
            </a>
        );
    }

    return (
        <button className={className}>
            {children}  <span>  → </span>
        </button>
    );
};

export default Button;
