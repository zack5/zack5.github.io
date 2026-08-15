import React from 'react';

import BorderGlow from './BorderGlow';
import { Link } from 'react-router-dom';

import './BorderButton.css';

interface BorderButtonProps {
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string; // internal navigation via react-router Link
  href?: string; // external URL — opens in new tab
}

export default function BorderButton({ children, ariaLabel, onClick, to, href } : BorderButtonProps) {
    const inner = (
        <>
            <BorderGlow />
            <div className="border-button-content">
                {children}
            </div>
        </>
    );

    return (
        <div className="border-button-container-container">
            <div className="border-button-container">
                {to ? (
                    <Link to={to} className="border-button" aria-label={ariaLabel}>
                        {inner}
                    </Link>
                ) : href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="border-button" aria-label={ariaLabel}>
                        {inner}
                    </a>
                ) : (
                    <button
                        type="button"
                        className="border-button"
                        onClick={onClick}
                        aria-label={ariaLabel}
                    >
                        {inner}
                    </button>
                )}
            </div>
        </div>
    );
}
