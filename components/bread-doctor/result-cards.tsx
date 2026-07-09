import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CauseResult, Strength } from "@/types/bread-doctor";
import { RotateCcwIcon } from "lucide-react";

const STRENGTH_LABEL: Record<Strength, string> = {
  high: "가능성 높음",
  medium: "가능성 중간",
};

interface ResultCardsProps {
  causes: CauseResult[];
  selectedSymptomLabels: string[];
  onRestart: () => void;
}

export function ResultCards({
  causes,
  selectedSymptomLabels,
  onRestart,
}: ResultCardsProps) {
  return (
    <div className="flex flex-col gap-4">
      {selectedSymptomLabels.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSymptomLabels.map((label) => (
            <Badge key={label} variant="outline">
              {label}
            </Badge>
          ))}
        </div>
      )}

      <Alert>
        <AlertDescription>
          단정적 진단이 아니라 일반적 제빵 상식 기반의 가능성 있는 원인입니다.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-3">
        {causes.map((result, index) => (
          <Card
            key={result.cause.id}
            className={cn(index === 0 && "ring-2 ring-primary")}
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold">
                  {index + 1}
                </span>
                <CardTitle className="flex-1 text-sm">
                  {result.cause.name}
                </CardTitle>
                <Badge variant={result.strength === "high" ? "default" : "secondary"}>
                  {STRENGTH_LABEL[result.strength]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  왜 이 증상이 나오는지
                </p>
                <p>{result.cause.why}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  다음에 이렇게
                </p>
                <p>{result.cause.action}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" onClick={onRestart}>
        <RotateCcwIcon data-icon="inline-start" />
        증상 바꿔 다시 진단
      </Button>
    </div>
  );
}
