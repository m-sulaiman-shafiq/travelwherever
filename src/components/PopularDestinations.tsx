import { MapPin } from "lucide-react";

const destinations = [
  { city: "Paris", country: "France", price: 299, image: "/paris.jpg" },
  { city: "Tokyo", country: "Japan", price: 549, image: "/tokyo.jpg" },
  { city: "New York", country: "USA", price: 199, image: "/new-york.jpg" },
  { city: "Bali", country: "Indonesia", price: 449, image: "/bali.jpg" },
];

const PopularDestinations = () => {
  return (
    <section className="pt-5 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Popular Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trending Travel Spots</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div key={destination.city} className="group relative rounded-2xl overflow-hidden cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={destination.image} alt={`${destination.city}, ${destination.country}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1 text-primary-foreground/80 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.country}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">{destination.city}</h3>
                <p className="text-primary-foreground/90">From <span className="font-bold text-lg">${destination.price}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
