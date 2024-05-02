"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 bg-purple-700">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Learn & Earn</h1>
        <div className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
          <TypewriterComponent
            options={{
              strings: [
                "Learn Finance", "Play Games", "Hear Stories", "Get Top Rewards and Much More for FREE",
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