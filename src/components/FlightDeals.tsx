import { Plane, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  {
    from: "Los Angeles",
    fromCode: "LAX",
    to: "London",
    toCode: "LHR",
    price: 389,
    duration: "11h 20m",
    airline: "British Airways",
    stops: "Non-stop",
  },
  {
    from: "New York",
    fromCode: "JFK",
    to: "Paris",
    toCode: "CDG",
    price: 299,
    duration: "7h 35m",
    airline: "Air France",
    stops: "Non-stop",
  },
  {
    from: "San Francisco",
    fromCode: "SFO",
    to: "Tokyo",
    toCode: "NRT",
    price: 549,
    duration: "11h 45m",
    airline: "Japan Airlines",
    stops: "Non-stop",
  },
];

const FlightDeals = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-100 to-orange-100">
      <div className="container mx-auto !px-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary font-medium mb-2">Best Deals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Today's Top Flight Offers
            </h2>
          </div>
          <Button variant="outline">
            View All Deals <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {deals.map((deal, index) => (
            <div
              key={`${deal.fromCode}-${deal.toCode}`}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    <div>
                      <p className="font-bold text-lg text-foreground">
                        {deal.fromCode}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {deal.from}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="h-px flex-1 bg-border" />
                      <div className="flex flex-col items-center">
                        <Clock className="w-4 h-4 text-muted-foreground mb-1" />
                        <span className="text-xs text-muted-foreground">
                          {deal.duration}
                        </span>
                        <span className="text-xs text-primary font-medium">
                          {deal.stops}
                        </span>
                      </div>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="font-bold text-lg text-foreground">
                        {deal.toCode}
                      </p>
                      <p className="text-sm text-muted-foreground">{deal.to}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between lg:justify-end gap-6">
                  <div className="text-sm text-muted-foreground">
                    {deal.airline}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">
                      ${deal.price}
                    </p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  <Button variant="default">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightDeals;
