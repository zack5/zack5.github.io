import React from 'react';
import { useNavigate } from 'react-router-dom';

import BorderGlow from './BorderGlow';
import './BackButton.css';

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <div className="back-button-container-container">
            <div className="back-button-container">
                <button
                    type="button"
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                >
                    <BorderGlow />
                        <div className="back-button-content">
                            <span className="back-arrow">←</span>
                            <span>Back</span>
                        </div>
                </button>
            </div>
        </div>
    );
}
