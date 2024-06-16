"use client";

import {useEffect, useRef} from "react";

export default function FractalCanvas({ pointsCount, renderPoints, distance, renderRotation, dotsCount } : { pointsCount: number, renderPoints: boolean, distance: number, renderRotation: number, dotsCount: number }) {
    let ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let draw = () => {};
        let event = undefined;

        if(ref) {
            const canvas = ref.current!;
            const ctx = canvas.getContext("2d");

            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
            let size = Math.min(canvas.width, canvas.height);

            event = () => {
                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;

                size = Math.min(canvas.width, canvas.height);
                draw();
            };
            window.addEventListener("resize", event);

            draw = () => {
                if(ctx) {
                    ctx.reset();
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    const points = ((numPoints, radius) => {
                        const points = [];
                        const totalAngle = Math.PI * 2;

                        for (let i = 0; i < numPoints; i++) {
                            const angle = (totalAngle / numPoints) * i;
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);

                            points.push({ x, y });
                        }

                        return points;
                    })(pointsCount, size / 2 - 40)

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.translate(canvas.width / 2, canvas.height / 2);

                    const rotation = (renderRotation / 360) * Math.PI * 2;
                    ctx.rotate(rotation);

                    let lastPoint = points[Math.floor(Math.random() * pointsCount)];
                    for (let i = 0; i < dotsCount; i++) {
                        const destinationPoint = points[Math.floor(Math.random() * pointsCount)];

                        const newPoint = {
                            x: lastPoint.x + (destinationPoint.x - lastPoint.x) * (distance / 100),
                            y: lastPoint.y + (destinationPoint.y - lastPoint.y) * (distance / 100)
                        };

                        ctx.beginPath();
                        ctx.arc(newPoint.x, newPoint.y, 1, 0, 2 * Math.PI);
                        ctx.fillStyle = "black";
                        ctx.fill();

                        lastPoint = newPoint;
                    }

                    if(renderPoints) {
                        points.forEach(({ x, y }) => {
                            ctx.beginPath();
                            ctx.arc(x, y, 3, 0, 2 * Math.PI);
                            ctx.fillStyle = "red";
                            ctx.fill();
                        });
                    }
                }
            }
            draw();
        }

        return () => {
            draw = () => {};
            if(event) window.removeEventListener("resize", event);
        }
    }, [ref, pointsCount, renderPoints, distance, renderRotation, dotsCount]);

    return (
        <canvas ref={ref} className={"max-h-[800px] max-w-[800px] mx-auto w-full aspect-square block"}></canvas>
    )
}
