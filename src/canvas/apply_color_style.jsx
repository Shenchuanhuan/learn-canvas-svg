import * as React from 'react';
import {
    useEffect,
    useRef,
} from 'react';

export function ApplyFillStyle() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            for(let i = 0; i < 6; i++) {
                for(let j = 0; j < 6; j++) {
                    ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
                    ctx.fillRect(j * 25, i * 25, 25, 25);
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

export function ApplyStrokeStyle() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)})`;
                    ctx.beginPath();
                    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
                    ctx.stroke();
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

export function GlobalAlphaExample() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            // draw background
            ctx.fillStyle = '#FD0';
            ctx.fillRect(0, 0, 75, 75);
            ctx.fillStyle = '#6C0';
            ctx.fillRect(75, 0, 75, 75);
            ctx.fillStyle = '#09F';
            ctx.fillRect(0, 75, 75, 75);
            ctx.fillStyle = '#F30';
            ctx.fillRect(75, 75, 75, 75);
            ctx.fillStyle = '#FFF';

            // set transparency value
            ctx.globalAlpha = 0.2;

            // Draw semi transparent circles
            for(let i = 0; i < 7; i++) {
                ctx.beginPath();
                ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
                ctx.fill();
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

export function UseRgbaExample() {
    const canvasDOM = useRef(null);

    const drawCanvas = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            const rectColors = ['#FD0', '#6C0', '#09F', '#F30'];

            // for(let i = 0; i < 5; i++) {
            //     // draw rectangles
            //     ctx.fillStyle = rectColors[i];
            //     ctx.fillRect(10, 37.5 * i, 130, 37.5);
            //     // for(let j = 0; j < 10; j++) {

            //     // }
            //  }

             // Draw background
            ctx.fillStyle = 'rgb(255, 221, 0)';
            ctx.fillRect(0, 0, 150, 37.5);
            ctx.fillStyle = 'rgb(102, 204, 0)';
            ctx.fillRect(0, 37.5, 150, 37.5);
            ctx.fillStyle = 'rgb(0, 153, 255)';
            ctx.fillRect(0, 75, 150, 37.5);
            ctx.fillStyle = 'rgb(255, 51, 0)';
            ctx.fillRect(0, 112.5, 150, 37.5);

            // Draw semi transparent rectangles
            for (let i = 0; i < 10; i++) {
                ctx.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`;
                for (let j = 0; j < 4; j++) {
                    ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
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
