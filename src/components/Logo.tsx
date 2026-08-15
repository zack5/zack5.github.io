import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

interface Position {
    x: number;
    y: number;
}

const distance = (p1: Position, p2: Position) => {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y);
};

export default function Logo() {
    const VIEW_BOX_WIDTH = 430;
    const VIEW_BOX_HEIGHT = 116;
    const FACE = { x: 206.5, y: 87 };
    const FACE_EYE_SPACING = 26;
    const EYE_WIDTH = 8;
    const EYE_HEIGHT = 15;

    const svgRef = useRef<SVGSVGElement | null>(null);
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const svg = svgRef.current;
        if (!svg) return;

        const point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;

        const ctm = svg.getScreenCTM();
        if (ctm) {
            const transformedPoint = point.matrixTransform(ctm.inverse());

            setMouse({
                x: transformedPoint.x,
                y: transformedPoint.y,
            });
        }
    };

    const distanceToMouse = distance(FACE, mouse);

    const offsetToMouseX = mouse.x - FACE.x;
    const eyeOffsetX = Math.sqrt(Math.abs(offsetToMouseX)) * Math.sign(offsetToMouseX) * 1.3;
    const offsetToMouseY = mouse.y - FACE.y;
    const eyeOffsetY = Math.sqrt(Math.abs(offsetToMouseY)) * Math.sign(offsetToMouseY);

    const faceEyeSpacing = FACE_EYE_SPACING - Math.sqrt(distanceToMouse) * 0.4;
    const eyeCenter = { x: eyeOffsetX + FACE.x, y: eyeOffsetY + FACE.y };
    const eyeLeft = {
        x: eyeCenter.x - faceEyeSpacing / 2,
        y: eyeCenter.y - Math.max(0, FACE.x - eyeCenter.x) * (eyeCenter.y - FACE.y) * 0.02
    };
    const eyeRight = {
        x: eyeCenter.x + faceEyeSpacing / 2, 
        y: eyeCenter.y - Math.max(0, eyeCenter.x - FACE.x) * (eyeCenter.y - FACE.y) * 0.02
    };

    const EYE_ROTATION_FACTOR = 0.04 // 0 = no scaling 0.1 = too much, 
    const leftEyeWidth = EYE_WIDTH * (1 - EYE_ROTATION_FACTOR * Math.sqrt(Math.max(FACE.x - eyeLeft.x, 0)));
    const rightEyeWidth = EYE_WIDTH * (1 - EYE_ROTATION_FACTOR * Math.sqrt(Math.max(eyeRight.x - FACE.x, 0)));
    const leftEyeHeight = EYE_HEIGHT;
    const rightEyeHeight = EYE_HEIGHT;



    return (
        <Link to="/" className="logo-link no-text-decoration">
            <svg
                ref={svgRef}
                viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
                onMouseMove={handleMouseMove}
                className="logo-svg"
            >
                <text x={0} y={0} className="logo-text">
                    {'ZACK'}
                </text>
                <text x={0} y={VIEW_BOX_HEIGHT / 2} className="logo-text">
                    {'CINQUINI'}
                </text>

                <circle r="20" cx={FACE.x} cy={FACE.y} fill="var(--color-header)" />

                <rect
                    x={eyeLeft.x - leftEyeWidth / 2}
                    y={eyeLeft.y - leftEyeHeight / 2}
                    width={leftEyeWidth}
                    height={leftEyeHeight}
                    rx="4"
                    ry="4"
                    fill="var(--color-accent-deeper)"
                />

                <rect
                    x={eyeRight.x - rightEyeWidth / 2}
                    y={eyeRight.y - rightEyeHeight / 2}
                    width={rightEyeWidth}
                    height={rightEyeHeight}
                    rx="4"
                    ry="4"
                    fill="var(--color-accent-deeper)"
                />
            </svg>
        </Link>
    );
}
