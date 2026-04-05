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
  { city: "Lahore", code: "LHE", airport: "Allama Iqbal International Airport" },
  { city: "Islamabad", code: "ISB", airport: "Islamabad International Airport" },
  { city: "Dubai", code: "DXB", airport: "Dubai International Airport" },
  { city: "London", code: "LHR", airport: "Heathrow Airport" },
  { city: "New York", code: "JFK", airport: "John F Kennedy International Airport" },
  { city: "Los Angeles", code: "LAX", airport: "Los Angeles International Airport" },
  { city: "Chicago", code: "ORD", airport: "O'Hare International Airport" },
  { city: "Paris", code: "CDG", airport: "Charles de Gaulle Airport" },
  { city: "Tokyo", code: "HND", airport: "Haneda Airport" },
  { city: "Tokyo", code: "NRT", airport: "Narita International Airport" },
  { city: "Singapore", code: "SIN", airport: "Changi Airport" },
  { city: "Hong Kong", code: "HKG", airport: "Hong Kong International Airport" },
  { city: "Frankfurt", code: "FRA", airport: "Frankfurt am Main Airport" },
  { city: "Amsterdam", code: "AMS", airport: "Amsterdam Schiphol Airport" },
  { city: "Bangkok", code: "BKK", airport: "Suvarnabhumi Airport" },
  { city: "Istanbul", code: "IST", airport: "Istanbul Airport" },
  { city: "Doha", code: "DOH", airport: "Hamad International Airport" },
  { city: "Seoul", code: "ICN", airport: "Incheon International Airport" },
  { city: "Sydney", code: "SYD", airport: "Sydney Kingsford Smith Airport" },
  { city: "Toronto", code: "YYZ", airport: "Toronto Pearson International Airport" },
  { city: "San Francisco", code: "SFO", airport: "San Francisco International Airport" },
  { city: "Miami", code: "MIA", airport: "Miami International Airport" },
  { city: "Barcelona", code: "BCN", airport: "Barcelona-El Prat Airport" },
  { city: "Madrid", code: "MAD", airport: "Adolfo Suárez Madrid–Barajas Airport" },
  { city: "Rome", code: "FCO", airport: "Leonardo da Vinci–Fiumicino Airport" },
  { city: "Munich", code: "MUC", airport: "Munich Airport" },
  { city: "Zurich", code: "ZRH", airport: "Zurich Airport" },
  { city: "Vienna", code: "VIE", airport: "Vienna International Airport" },
  { city: "Brussels", code: "BRU", airport: "Brussels Airport" },
  { city: "Copenhagen", code: "CPH", airport: "Copenhagen Airport" },
  { city: "Stockholm", code: "ARN", airport: "Stockholm Arlanda Airport" },
  { city: "Oslo", code: "OSL", airport: "Oslo Gardermoen Airport" },
  { city: "Helsinki", code: "HEL", airport: "Helsinki-Vantaa Airport" },
  { city: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji Maharaj International Airport" },
  { city: "Delhi", code: "DEL", airport: "Indira Gandhi International Airport" },
  { city: "Bangalore", code: "BLR", airport: "Kempegowda International Airport" },
  { city: "Cape Town", code: "CPT", airport: "Cape Town International Airport" },
  { city: "Johannesburg", code: "JNB", airport: "O.R. Tambo International Airport" },
  { city: "Mexico City", code: "MEX", airport: "Mexico City International Airport" },
  { city: "São Paulo", code: "GRU", airport: "São Paulo–Guarulhos International Airport" },
  { city: "Rio de Janeiro", code: "GIG", airport: "Rio de Janeiro–Galeão International Airport" },
  { city: "Buenos Aires", code: "EZE", airport: "Ministro Pistarini International Airport" },
  { city: "Cairo", code: "CAI", airport: "Cairo International Airport" },
  { city: "Moscow", code: "SVO", airport: "Sheremetyevo International Airport" },
  { city: "St. Petersburg", code: "LED", airport: "Pulkovo Airport" },
  { city: "Beijing", code: "PEK", airport: "Beijing Capital International Airport" },
  { city: "Shanghai", code: "PVG", airport: "Shanghai Pudong International Airport" },
  { city: "Kuala Lumpur", code: "KUL", airport: "Kuala Lumpur International Airport" },
  { city: "Bangkok", code: "DMK", airport: "Don Mueang International Airport" },
  { city: "Lisbon", code: "LIS", airport: "Lisbon Airport" },
  { city: "Athens", code: "ATH", airport: "Athens International Airport" },
  { city: "Dublin", code: "DUB", airport: "Dublin Airport" },
  { city: "Chicago", code: "MDW", airport: "Chicago Midway International Airport" },
  { city: "Seattle", code: "SEA", airport: "Seattle-Tacoma International Airport" },
  { city: "Las Vegas", code: "LAS", airport: "McCarran International Airport" },
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
