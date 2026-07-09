import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BreadType } from "@/types/bread-doctor";
import { ChevronRightIcon, WheatIcon } from "lucide-react";

interface BreadTypePickerProps {
  breadTypes: BreadType[];
  onSelect: (breadTypeId: string) => void;
}

export function BreadTypePicker({ breadTypes, onSelect }: BreadTypePickerProps) {
  return (
    <div className="grid grid-cols-1 gap-3 @md:grid-cols-2">
      {breadTypes.map((breadType) => {
        const isAvailable = breadType.status === "available";
        return (
          <Card key={breadType.id} className={cn(!isAvailable && "opacity-60")}>
            <CardContent className="p-0">
              <button
                type="button"
                disabled={!isAvailable}
                onClick={() => onSelect(breadType.id)}
                className="flex w-full items-center gap-3 p-4 text-left disabled:cursor-not-allowed"
              >
                <WheatIcon className="size-5 shrink-0 text-muted-foreground" />
                <span
                  className={cn(
                    "flex-1 font-medium",
                    !isAvailable && "text-muted-foreground",
                  )}
                >
                  {breadType.name}
                </span>
                {isAvailable ? (
                  <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <Badge variant="secondary">준비 중</Badge>
                )}
              </button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
