import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
import {UseStateReturnType} from "@/app/_components/utils";

export default function RotationSelector({ state } : { state: UseStateReturnType<number> }) {
    const [value, setValue] = state;

    return (
        <div className="grid gap-2 pt-2">
            <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                    <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="rotation">Rotation</Label>
                            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                                {value}deg
                            </span>
                        </div>
                        <Slider
                            id="rotation"
                            min={0}
                            max={360}
                            defaultValue={[value]}
                            step={1}
                            onValueChange={(v) => {
                                setValue(v[0])
                            }}
                            className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                            aria-label="Rotation"
                        />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent
                    align="start"
                    className="w-[260px] text-sm"
                    side="left"
                >
                    Controls the rotation of which the whole fractals are rotated.
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}
