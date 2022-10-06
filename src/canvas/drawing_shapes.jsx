import * as React from 'react';
import {
    useEffect,
    useRef,
} from 'react';

export function DrawingRectangle() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingPath() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.fill();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingSmile() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
            ctx.moveTo(100, 65);
            ctx.arc(95, 65, 5, 0, Math.PI * 2, true); // Right eye
            ctx.stroke();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingLines() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // Filled triangle
            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(105, 25);
            ctx.lineTo(25, 105);
            ctx.fill();

            // Stroked triangle
            ctx.beginPath();
            ctx.moveTo(125, 125);
            ctx.lineTo(125, 45);
            ctx.lineTo(45, 125);
            ctx.closePath();
            ctx.stroke();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingArcs() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    ctx.beginPath();
                    const x = 25 + j * 50; // x coordinate
                    const y = 25 + i * 50; // y coordinate
                    const radius = 20; // Arc radius
                    const startAngle = 0; // Starting point on circle
                    const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                    const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
            
                    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
            
                    if (i > 1) {
                        ctx.fill();
                    } else {
                        ctx.stroke();
                    }
                }
            }
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingQuadraticBezier() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // Quadratic curves example
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.quadraticCurveTo(25, 25, 25, 62.5);
            ctx.quadraticCurveTo(25, 100, 50, 100);
            ctx.quadraticCurveTo(50, 120, 30, 125);
            ctx.quadraticCurveTo(60, 120, 65, 100);
            ctx.quadraticCurveTo(125, 100, 125, 62.5);
            ctx.quadraticCurveTo(125, 25, 75, 25);
            ctx.stroke();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingCubicBezier() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // Cubic curves example
            ctx.beginPath();
            ctx.moveTo(75, 40);
            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingArcToExample() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // arcto line
            ctx.beginPath();
            ctx.moveTo(200, 20);
            ctx.arcTo(200, 130, 50, 20, 40);
            ctx.stroke();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="250" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};

export function DrawingCombinePaths() {
    const canvasDOM = useRef(null);

    const roundedRect = (ctx, x, y, width, height, radius) => {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.stroke();
    };

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // Cubic curves example
            ctx.beginPath();
            ctx.moveTo(75, 40);
            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};