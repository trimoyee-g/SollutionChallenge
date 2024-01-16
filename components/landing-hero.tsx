"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Kisan Ka Link</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          <TypewriterComponent
            options={{
              strings: [
                "Empowering Farmers", "Connecting Markets"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      {/* <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div> */}
      <div>
        <Link href={isSignedIn ? "/home" : "/sign-up"}>
          {/* <Button  className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Get Started
          </Button> */}
          
          <button className="border border-light p-6 rounded">
  Click here to Get Started 
</button>


        </Link>
      </div>
      
      {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
  );
};