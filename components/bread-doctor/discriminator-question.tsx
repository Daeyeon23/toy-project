import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { DiscriminatorQuestion } from "@/types/bread-doctor";
import { CheckIcon, HelpCircleIcon, XIcon } from "lucide-react";

interface DiscriminatorQuestionCardProps {
  question: DiscriminatorQuestion;
  onAnswer: (answer: "yes" | "no" | "skip") => void;
}

export function DiscriminatorQuestionCard({
  question,
  onAnswer,
}: DiscriminatorQuestionCardProps) {
  return (
    <Card className="ring-2 ring-primary">
      <CardContent className="flex flex-col gap-4">
        <p className="text-xs font-medium text-muted-foreground">확인 질문</p>
        <p className="text-base font-semibold">{question.text}</p>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => onAnswer("yes")}
          >
            <CheckIcon data-icon="inline-start" />예
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => onAnswer("no")}
          >
            <XIcon data-icon="inline-start" />아니오
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-muted-foreground"
            onClick={() => onAnswer("skip")}
          >
            <HelpCircleIcon data-icon="inline-start" />
            모르겠어요 / 건너뛰기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
