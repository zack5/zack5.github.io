import { useNavigate } from 'react-router-dom';

import BorderButton from './BorderButton';

import './BackButton.css';

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <BorderButton
            ariaLabel = "Go back"
            onClick={() => navigate(-1)}
        >
            <span className="back-arrow">←</span>
            <span>Back</span>
        </BorderButton>
    );
}
