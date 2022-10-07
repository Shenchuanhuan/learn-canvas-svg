import * as React from 'react';
import {
    useEffect,
    useRef,
    useState,
} from 'react';

import './index.css';

export default function CanvasPlayground() {
    const canvasDOM = useRef(null);
    const [dragPt, setDragPt] = useState([200, 100]);

    const drawLine = () => {
        if (canvasDOM.current && canvasDOM.current.getContext) {
            const ctx = canvasDOM.current.getContext('2d');

            
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.moveTo(340, 100);
            ctx.arc(330, 100, 10, 0, 2 * Math.PI, true); // end point

            ctx.moveTo(100, 100);
            ctx.arc(90, 100, 10, 0, 2 * Math.PI, true); // start point
            ctx.fill();

            // quadratic
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.quadraticCurveTo(dragPt[0], dragPt[1], 320, 100);
            ctx.stroke();

            // draw drag point
            // ctx.beginPath();
            // ctx.moveTo(dragPt[0] / 2, dragPt[1]);
            // ctx.fillStyle = "blue";
            // ctx.arc();
            // ctx.fill();
        }
    };

    const initCanvas = () => {
        const boundings = document.querySelector('.playground').getBoundingClientRect();
        canvasDOM.current.width = boundings.width - 48 * 2;
        console.log("%c 🍇 boundings", "color:#42b983", boundings);
        drawLine();
    };

    useEffect(initCanvas, []);

    return (
        <div className='playground'>
            <canvas height="300" ref={canvasDOM}>
                Your browser doesn't support canvas...
            </canvas>
        </div>
    );
};