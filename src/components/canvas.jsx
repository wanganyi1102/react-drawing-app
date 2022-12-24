import '../App.css';
import React, { Component } from 'react';
import { useOnDraw } from './hooks';

const Canvas = () => {

    const setCanvasRef = useOnDraw(onDraw)
    
    function onDraw(ctx, point, prevPoint){

        // ctx.fillStyle = '#000000';
        // ctx.beginPath();
        // ctx.arc(point.x, point.y, 1, 0, 2*Math.PI); //draw cirlce?
        // ctx.fill();
        
        drawLine(prevPoint, point, ctx, '#000000', 5);
    }

    function drawLine( //so that line instead of dots
        start, end, ctx, colour, width
    ){
        start = start ?? end
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = colour;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2*Math.PI); //draw cirlce?
        ctx.fill();
    }

    const w = (window.innerWidth-300) *0.9;
    const h = window.innerHeight * 0.9;
    return (
        <div className='CanvasWrap'>
            {/* <h1>w: {w}, h: {h}</h1> */}
            <canvas id='Canvas' ref={setCanvasRef} width={w} height={h}> 
            </canvas>
        </div>
        
    );
    
}
 
export default Canvas;