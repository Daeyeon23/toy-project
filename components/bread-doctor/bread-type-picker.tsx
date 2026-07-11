"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { BREAD_CATEGORIES } from "@/config/bread-doctor";
import type { BreadCategory, BreadType } from "@/types/bread-doctor";
import {
  ChevronRightIcon,
  CookieIcon,
  SearchIcon,
  SearchXIcon,
  WheatIcon,
} from "lucide-react";

const DOMAIN_ICON: Record<BreadCategory["domain"], typeof WheatIcon> = {
  bread: WheatIcon,
  pastry: CookieIcon,
};

interface BreadTypePickerProps {
  breadTypes: BreadType[];
  onSelect: (breadTypeId: string) => void;
}

export function BreadTypePicker({ breadTypes, onSelect }: BreadTypePickerProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim();
  const visibleBreadTypes = normalizedQuery
    ? breadTypes.filter((breadType) =>
        breadType.name.split(" ").some((token) => token.startsWith(normalizedQuery)),
      )
    : breadTypes;

  const categories = useMemo(
    () =>
      BREAD_CATEGORIES.slice()
        .sort((a, b) => a.order - b.order)
        .map((category) => ({
          ...category,
          breadTypes: visibleBreadTypes.filter((b) => b.category === category.id),
        }))
        .filter((category) => category.breadTypes.length > 0),
    [visibleBreadTypes],
  );

  return (
    <div className="flex flex-col gap-6">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="베이커리 품목 이름으로 검색 (예: 치아바타)"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputGroup>

      {categories.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchXIcon />
            </EmptyMedia>
            <EmptyTitle>일치하는 품목이 없어요</EmptyTitle>
            <EmptyDescription>검색어를 지우고 목록에서 골라 보세요.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        categories.map((category) => {
          const DomainIcon = DOMAIN_ICON[category.domain];
          return (
            <div key={category.id} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {category.label}
              </h3>
              <div className="grid grid-cols-1 gap-3 @md:grid-cols-2">
                {category.breadTypes.map((breadType) => (
                  <Card key={breadType.id}>
                    <CardContent className="p-0">
                      <button
                        type="button"
                        onClick={() => onSelect(breadType.id)}
                        className="flex w-full items-center gap-3 p-4 text-left"
                      >
                        <DomainIcon className="size-5 shrink-0 text-muted-foreground" />
                        <span className="flex-1 font-medium">{breadType.name}</span>
                        <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
