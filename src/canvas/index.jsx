import * as React from 'react';

import BasicUsageCanvas from './basic_usage';
import {
    DrawingRectangle,
    DrawingPath,
    DrawingSmile,
    DrawingLines,
    DrawingArcs,
    DrawingQuadraticBezier,
    DrawingCubicBezier,
    DrawingCombinePaths,
    DrawingArcToExample,
    DrawingPath2d,
} from './drawing_shapes';
import {
    ApplyFillStyle,
    ApplyStrokeStyle,
    GlobalAlphaExample,
    UseRgbaExample,
} from './apply_color_style';

import './index.css';

const shapeExamples = [
    {title: 'Drawing Rectangle Example', component: <DrawingRectangle />, id: 'shapeRectangle'},
    {title: 'Drawing Path Example', component: <DrawingPath />, id: 'shapePath'},
    {title: 'Drawing Smile Example', component: <DrawingSmile />, id: 'shapeSmile'},
    {title: 'Drawing Lines Example', component: <DrawingLines />, id: 'shapeLines'},
    {title: 'Drawing Arcs Example', component: <DrawingArcs />, id: 'shapeArcs'},
    {title: 'Drawing ArcTo Example', component: <DrawingArcToExample />, id: 'shapeArcto'},
    {title: 'Drawing Quadratic Bezier Example', component: <DrawingQuadraticBezier />, id: 'shapeQuadratic'},
    {title: 'Drawing Cubic Bezier Example', component: <DrawingCubicBezier />, id: 'shapeCubic'},
    {title: 'Drawing Combine Paths Example', component: <DrawingCombinePaths />, id: 'shapeCombinePath'},
    {title: 'Drawing Path2D Example', component: <DrawingPath2d />, id: 'shapePath2D'},
];

const styleExamples = [
    {title: 'Apply fillstyle example', component: <ApplyFillStyle />, id: 'style_fillstyle'},
    {title: 'Apply strokestyle example', component: <ApplyStrokeStyle />, id: 'style_strokestyle'},
    {title: 'GlobalAlpha Example', component: <GlobalAlphaExample />, id: 'style_globalplpha'},
    {title: 'Use Rgba Example', component: <UseRgbaExample />, id: 'style_rgba'},
];

export default function CanvasLayer() {
    const renderExamples = (examples) => {
        return examples.map(item => (
            <div key={item.id} className="accordion-item">
                <h2 className="accordion-header" id={item.id + '_header'}>
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded="false"
                        aria-controls={item.id}>
                        {item.title}
                    </button>
                </h2>
                <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.id + '_header'}
                    data-bs-parent="#shapes">
                    <div className="accordion-body">
                        {item.component}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="canvas-layout">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Basic usage of canvas
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <BasicUsageCanvas />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Drawing shapes
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="accordion" id="shapes">
                                {renderExamples(shapeExamples)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Applying styles and colors
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {renderExamples(styleExamples)}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Accordion Item #4
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}