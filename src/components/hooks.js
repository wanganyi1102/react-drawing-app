import { useEffect, useRef } from "react";

export function useOnDraw(onDraw){
    const canvasRef = useRef(null);

    const isDrawingRef = useRef(false);

    const prevPointRef = useRef(null);

    // //removing listeners
    // const mouseMoveListenerRef = useRef(null);
    // const mouseDownListenerRef = useRef(null);
    // const mouseUpListenerRef = useRef(null);

    // useEffect(() => {
    //     return () => {
    //         if(mouseMoveListenerRef.current) {
    //             window.removeEventListener("mousemove", mouseMoveListenerRef.current)
    //         }
    //         if(mouseUpListenerRef.current) {
    //             window.removeEventListener("mouseup", mouseUpListenerRef.current)
    //         }
    //         if(canvasRef.current){
    //             window.removeEventListener("mousedown", mouseDownListenerRef.current);
    //         }
    //     }
    // })

    function setCanvasRef(ref){
        if(!ref) return;
        
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener(){
        const mouseMoveListener = (e) =>{
            if(isDrawingRef.current == true){
                const point = computePointInCanvas(e.clientX, e.clientY);
                // const point = {x: e.clientX, y:e.clientY};
                const ctx = canvasRef.current.getContext('2d');
                if(onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
            }
        }
        // mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener('mousemove', mouseMoveListener)
    }

    function initMouseDownListener(){
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
        }
        // mouseDownListenerRef.current = listener;
        window.addEventListener("mousedown", listener);
    }

    function initMouseUpListener(){
        if (!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = false;
            prevPointRef.current = null;
        }
        // mouseUpListenerRef.current = listener;
        window.addEventListener("mouseup", listener);
    }

    // so that x and y coords are relative to canvas, not entire window
    function computePointInCanvas(clientX, clientY){
        if(canvasRef.current){
            const boundingRect = canvasRef.current.getBoundingClientRect();
            // console.log('top:'+ boundingRect.top + ', left:'+boundingRect.left)
            // console.log('bottom:'+ boundingRect.bottom + ', right:'+boundingRect.right)
            // console.log('wwidth' + window.innerWidth)
            // console.log('wwheight' + window.innerHeight)

            return{
                x: (clientX - boundingRect.left),
                y: (clientY - boundingRect.top)
            }

        } else{
            return null;
        }
        
    }

    return setCanvasRef;
}