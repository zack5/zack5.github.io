import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import eyeSquint from '../assets/name-animation/eye-squint.svg';

interface Position {
    x: number;
    y: number;
}

const distance = (p1: Position, p2: Position) => {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y);
};

const sleep = (ms : number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Logo() {
    const VIEW_BOX_WIDTH = 430;
    const VIEW_BOX_HEIGHT = 116;

    const FACE = { x: 206.5, y: 87 };
    const FACE_EYE_SPACING = 26;
    const EYE_WIDTH = 9;
    const EYE_HEIGHT = 15;

    const EYE_ROTATION_FACTOR = 0.04 // 0 = no scaling 0.1 = too much, 
    const EYE_SPACING_FACTOR = 0.6; // how much the eyes move apart as the mouse moves away
    const MOUSE_TRACKING_SPEED = 0.05; // .12 is reasonably snappy
    const MOUSE_LEAVE_DELAY_MS = 1300; // delay before considering the mouse "away"

    const IDLE_RANDOM_MIN_SEC = 5; // min seconds before picking a random idle target
    const IDLE_RANDOM_MAX_SEC = 20; // max seconds before picking a random idle target

    const BLINK_MIN_INTERVAL_SEC = 4; // minimum seconds between blinks
    const BLINK_MAX_INTERVAL_SEC = 12; // maximum seconds between blinks
    const BLINK_DURATION_MS = 70; // how long a blink lasts (ms)
    const BLINK_HEIGHT = 7; // eye height while blinking
    const BLINK_Y_OFFSET = 2; // y offset while blinking

    const svgRef = useRef<SVGSVGElement | null>(null);
    const blinkTimeoutRef = useRef<number | null>(null);
    const nextBlinkTimeoutRef = useRef<number | null>(null);
    const mouseLeaveTimeoutRef = useRef<number | null>(null);
    const idleTimeoutRef = useRef<number | null>(null);
    const [idleTarget, setIdleTarget] = useState<Position | null>(null);
    const [isMouseNear, setIsMouseNear] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [mouseAnimated, setMouseAnimated] = useState<{ x: number; y: number }>({ x: FACE.x, y: FACE.y });
    const rafRef = useRef<number | null>(null);

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

    const handleMouseEnter = () => {
        if (mouseLeaveTimeoutRef.current) {
            clearTimeout(mouseLeaveTimeoutRef.current);
            mouseLeaveTimeoutRef.current = null;
        }
        setIsMouseNear(true);
    };

    const handleMouseLeave = () => {
        if (mouseLeaveTimeoutRef.current) clearTimeout(mouseLeaveTimeoutRef.current);
        mouseLeaveTimeoutRef.current = window.setTimeout(() => setIsMouseNear(false), MOUSE_LEAVE_DELAY_MS);
    };

    useEffect(() => {
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const target = isMouseDown
            ? { x: FACE.x, y: FACE.y + EYE_HEIGHT * 2 }
            : isMouseNear ? mouse : (idleTarget ?? FACE);

        const animate = () => {
            setMouseAnimated(prev => {
                const nx = lerp(prev.x, target.x, MOUSE_TRACKING_SPEED);
                const ny = lerp(prev.y, target.y, MOUSE_TRACKING_SPEED);

                if (Math.abs(nx - prev.x) < 0.01 && Math.abs(ny - prev.y) < 0.01) {
                    return prev;
                }

                return { x: nx, y: ny };
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [mouse, isMouseNear, isMouseDown, idleTarget]);

    useEffect(() => {
        const schedule = () => {
            const min = BLINK_MIN_INTERVAL_SEC * 1000;
            const max = BLINK_MAX_INTERVAL_SEC * 1000;
            const delay = Math.random() * (max - min) + min;

            nextBlinkTimeoutRef.current = window.setTimeout(() => {
                setIsBlinking(true);
                blinkTimeoutRef.current = window.setTimeout(() => {
                    setIsBlinking(false);
                    schedule();
                }, BLINK_DURATION_MS);
            }, delay);
        };

        schedule();

        return () => {
            if (nextBlinkTimeoutRef.current) clearTimeout(nextBlinkTimeoutRef.current);
            if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
            if (mouseLeaveTimeoutRef.current) clearTimeout(mouseLeaveTimeoutRef.current);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        // When we are not near the mouse, schedule a delayed random idle target.
        if (!isMouseNear) {
            // clear any existing
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);

            const min = IDLE_RANDOM_MIN_SEC * 1000;
            const max = IDLE_RANDOM_MAX_SEC * 1000;
            const delay = Math.random() * (max - min) + min;

            idleTimeoutRef.current = window.setTimeout(async () => {
                const rand = Math.random();
                if (rand < 0.1)
                {
                    // Center
                    setIdleTarget(FACE);
                }
                else if (rand < 0.7)
                {
                    // Random target
                    const rx = Math.random() * VIEW_BOX_WIDTH;
                    const ry = Math.random() * VIEW_BOX_HEIGHT;
                    setIdleTarget({ x: rx, y: ry });
                }
                else
                {
                    // Double target
                    const rx = Math.random() * VIEW_BOX_WIDTH;
                    const ry = Math.random() * VIEW_BOX_HEIGHT;
                    setIdleTarget({ x: rx, y: ry });
                    
                    await sleep(1000);

                    const direction = Math.random() * 2 * Math.PI;
                    const distance = 100;
                    const rx2 = rx + distance * Math.cos(direction);
                    const ry2 = ry + distance * Math.sin(direction);
                    setIdleTarget({ x: rx2, y: ry2 });
                }
            }, delay);
        } else {
            // Mouse returned near — reset idle target and any timers so next leave starts at FACE
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = null;
            setIdleTarget(null);
        }

        return () => {
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
        };
    }, [isMouseNear, idleTarget]);

    const showBlink = isBlinking && !isMouseDown;
    const distanceToMouse = distance(FACE, mouseAnimated);

    const offsetToMouseX = mouseAnimated.x - FACE.x;
    const eyeOffsetX = Math.sqrt(Math.abs(offsetToMouseX)) * Math.sign(offsetToMouseX) * 1.45;
    const offsetToMouseY = mouseAnimated.y - FACE.y;
    const eyeOffsetY = Math.sqrt(Math.abs(offsetToMouseY)) * Math.sign(offsetToMouseY);

    const faceEyeSpacing = (FACE_EYE_SPACING - Math.sqrt(distanceToMouse) * EYE_SPACING_FACTOR);
    const eyeCenter = { x: eyeOffsetX + FACE.x, y: eyeOffsetY + FACE.y };
    const eyeLeft = {
        x: eyeCenter.x - faceEyeSpacing / 2,
        y: eyeCenter.y - Math.max(0, FACE.x - eyeCenter.x) * (eyeCenter.y - FACE.y) * 0.02 + (showBlink ? BLINK_Y_OFFSET : 0)
    };
    const eyeRight = {
        x: eyeCenter.x + faceEyeSpacing / 2,
        y: eyeCenter.y - Math.max(0, eyeCenter.x - FACE.x) * (eyeCenter.y - FACE.y) * 0.02 + (showBlink ? BLINK_Y_OFFSET : 0)
    };

    const leftEyeWidth = EYE_WIDTH * (1 - EYE_ROTATION_FACTOR * Math.sqrt(Math.max(FACE.x - eyeLeft.x, 0)));
    const rightEyeWidth = EYE_WIDTH * (1 - EYE_ROTATION_FACTOR * Math.sqrt(Math.max(eyeRight.x - FACE.x, 0)));
    const leftEyeHeight = (showBlink) ? BLINK_HEIGHT : EYE_HEIGHT;
    const rightEyeHeight = (showBlink) ? BLINK_HEIGHT : EYE_HEIGHT;



    return (
        <Link to="/" className="logo-link no-text-decoration">
            <svg
                ref={svgRef}
                viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="logo-svg"
            >
                <text x={0} y={0} className="logo-text">
                    {'ZACK'}
                </text>
                <text x={0} y={VIEW_BOX_HEIGHT / 2} className="logo-text">
                    {'CINQUINI'}
                </text>

                <g
                    onMouseDown={() => setIsMouseDown(true)}
                    onMouseUp={() => setIsMouseDown(false)}
                    onMouseLeave={() => setIsMouseDown(false)}
                >
                    <circle r="24.5" cx={FACE.x} cy={FACE.y} fill="var(--color-header)" />
                    <circle r="23" cx={FACE.x + 12} cy={FACE.y - 0.5} fill="var(--color-header)" />
                    <circle r="23" cx={FACE.x - 13} cy={FACE.y - 0.5} fill="var(--color-header)" />
                </g>

                {isMouseDown ? (
                    <>
                        <image
                            href={eyeSquint}
                            x={eyeLeft.x - leftEyeWidth / 2}
                            y={eyeLeft.y - leftEyeHeight / 2}
                            width={leftEyeWidth}
                            height={leftEyeHeight}
                            preserveAspectRatio="xMidYMid meet"
                            pointerEvents="none"
                        />

                        <image
                            href={eyeSquint}
                            x={eyeRight.x - rightEyeWidth / 2}
                            y={eyeRight.y - rightEyeHeight / 2}
                            width={rightEyeWidth}
                            height={rightEyeHeight}
                            preserveAspectRatio="xMidYMid meet"
                            transform={`translate(${eyeRight.x} ${eyeRight.y}) scale(-1 1) translate(${-eyeRight.x} ${-eyeRight.y})`}
                            pointerEvents="none"
                        />
                    </>
                ) : (
                    <>
                        <rect
                            x={eyeLeft.x - leftEyeWidth / 2}
                            y={eyeLeft.y - leftEyeHeight / 2}
                            width={leftEyeWidth}
                            height={leftEyeHeight}
                            rx={EYE_WIDTH / 2}
                            ry={EYE_WIDTH / 2}
                            fill="var(--color-accent-deeper)"
                            pointerEvents="none"
                        />

                        <rect
                            x={eyeRight.x - rightEyeWidth / 2}
                            y={eyeRight.y - rightEyeHeight / 2}
                            width={rightEyeWidth}
                            height={rightEyeHeight}
                            rx={EYE_WIDTH / 2}
                            ry={EYE_WIDTH / 2}
                            fill="var(--color-accent-deeper)"
                            pointerEvents="none"
                        />
                    </>
                )}
            </svg>
        </Link>
    );
}
