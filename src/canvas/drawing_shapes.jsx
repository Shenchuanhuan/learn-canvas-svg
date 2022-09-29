import * as React from 'react';
import {
    useEffect,
    useRef,
} from 'react';

export default function DrawingShapes() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            ctx.fillStyle = "rgb(200, 0, 0)";
            ctx.fillRect(10, 10, 50, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 50, 50);
        }
    };

    useEffect(drawCanvas, []);

    return (
        <canvas ref={canvasDOM} width="150" height="150">
            Your browser doesn't support canvas...
        </canvas>
    );
};