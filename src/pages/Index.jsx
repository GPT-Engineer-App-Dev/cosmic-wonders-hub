// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";
import { Moon, Star, Sun } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Start Your Adventure
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Discover the Universe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sun className="h-10 w-10 text-yellow-500" />}
              title="Solar Systems"
              description="Explore diverse planetary systems and their unique characteristics."
            />
            <FeatureCard
              icon={<Moon className="h-10 w-10 text-gray-400" />}
              title="Lunar Missions"
              description="Learn about past, present, and future missions to Earth's moon and beyond."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10 text-blue-500" />}
              title="Stellar Phenomena"
              description="Witness the beauty of nebulae, supernovae, and other cosmic events."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Cosmic Journey?</h2>
        <p className="mb-6">Join us in exploring the mysteries of the universe.</p>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
          Sign Up Now
        </Button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
