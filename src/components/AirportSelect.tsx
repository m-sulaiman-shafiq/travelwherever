"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const airports = [
  { city: "Karachi", code: "KHI", airport: "Jinnah International Airport" },
  {
    city: "Lahore",
    code: "LHE",
    airport: "Allama Iqbal International Airport",
  },
  {
    city: "Islamabad",
    code: "ISB",
    airport: "Islamabad International Airport",
  },
  { city: "Dubai", code: "DXB", airport: "Dubai International Airport" },
  { city: "London", code: "LHR", airport: "Heathrow Airport" },
  {
    city: "New York",
    code: "JFK",
    airport: "John F Kennedy International Airport",
  },
];

type Props = {
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
};

export default function AirportSelect({ placeholder, value, onChange }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="h-12 w-full justify-between bg-secondary/50 border-0"
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search city or airport..." />
          <CommandEmpty>No airport found.</CommandEmpty>
          <CommandGroup>
            {airports.map((a) => {
              const shortLabel = `${a.city} (${a.code})`;
              const fullLabel = `${a.city} (${a.code}) — ${a.airport}`;

              return (
                <CommandItem
                  key={a.code}
                  value={fullLabel}
                  onSelect={() => {
                    onChange(shortLabel);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === shortLabel ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {fullLabel}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
