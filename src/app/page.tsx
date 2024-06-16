"use client";

import {useState} from "react";
import PointsSelector from "@/app/_components/points-selector";
import DistanceSelector from "@/app/_components/distance-selector";
import RotationSelector from "@/app/_components/rotation-selector";
import {Checkbox} from "@/components/ui/checkbox";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import FractalCanvas from "@/app/_components/fractal-canvas";
import DotsCountSelector from "@/app/_components/dots-count-selector";

export default function Page() {
    const [points, setPoints] = useState(6);
    const [distance, setDistance] = useState(33);
    const [rotation, setRotation] = useState(0);
    const [dotsCount, setDotsCount] = useState(1000);
    const [renderPoints, setRenderPoints] = useState(true);

    return (
        <div className={"grid grid-flow-col grid-cols-[1fr,_250px] gap-6 p-4 h-full"}>
            <div className={"rounded-md border border-input bg-transparent p-4"}>
                <FractalCanvas
                    pointsCount={points}
                    renderPoints={renderPoints}
                    distance={distance}
                    renderRotation={rotation}
                    dotsCount={dotsCount}
                />
            </div>
            <div>
                <div className={"grid grid-flow-row gap-4"}>
                    <HoverCard openDelay={200}>
                        <HoverCardTrigger asChild>
                            <div className="flex items-center space-x-2 mt-2">
                                <Checkbox id="render-points" onCheckedChange={(checked) => {
                                    setRenderPoints(Boolean(checked))
                                }} checked={renderPoints}/>
                                <label htmlFor="render-points"
                                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Render points
                                </label>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent
                            align="start"
                            className="w-[260px] text-sm"
                            side="left"
                        >
                            Controls whether the initial points are rendered on the canvas.
                        </HoverCardContent>
                    </HoverCard>
                    <PointsSelector state={[points, setPoints]}/>
                    <DistanceSelector state={[distance, setDistance]}/>
                    <RotationSelector state={[rotation, setRotation]}/>
                    <DotsCountSelector state={[dotsCount, setDotsCount]}/>
                </div>
            </div>
        </div>
    );
}

