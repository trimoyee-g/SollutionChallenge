"use client";
import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { useRouter } from "next/navigation";


const ConversationPage = () => {
  const router = useRouter();
  
  return (
    <div >
      <div className="px-5 py-20">
      <div className="mb-8 space-y-4">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-2 font-extrabold">
        <div className="text-2xl md:text-4xl font-bold text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Why choose Kisan Ka Link?"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="border p-4 md:p-10 lg:p-16 space-y-4 ">
  <p className="font-light text-sm md:text-lg text-center">
    India&apos;s rural technological and infrastructural challenges are multifaceted. Limited Connectivity, Infrastructure Development, Financial Inclusion, Government Initiatives devoid the farmers of the right surplus price of their product.<br/><br/>
    <strong>Kisan Ka Link</strong> provides efficient logistical and development support to farmers to find them their right price in a B2B market to reduce the complex problem of connectivity to the urban consumer marketplace by optimizing real-time visibility.
  </p>
</div>



    </div>
    </div>
    
      </div>
  );
};

export default ConversationPage;
