import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
import {UseStateReturnType} from "@/app/_components/utils";

export default function PointsSelector({ state } : { state: UseStateReturnType<number> }) {
    const [value, setValue] = state;

    return (
        <div className="grid gap-2 pt-2">
            <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="points">Points</Label>
                            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                                {value}
                            </span>
                        </div>
                        <Slider
                            id="points"
                            min={1}
                            max={50}
                            defaultValue={[value]}
                            step={1}
                            onValueChange={(v) => {
                                setValue(v[0])
                            }}
                            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                            aria-label="Points"
                        />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent
                    align="start"
                    className="w-[260px] text-sm"
                    side="left"
                >
                    Controls the amount of points generated onto the canvas.
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}
