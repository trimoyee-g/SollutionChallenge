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
                "Why choose Fiscal Fit?"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="border p-4 md:p-10 lg:p-16 space-y-4 ">
  <p className="font-light text-sm md:text-lg text-start">
  Personalized Learning Experience: Our platform offers personalized financial education tailored to each user`&apos;`s goals and knowledge levels. Through AI algorithms, users receive content and guidance that are specifically relevant to their needs, making the learning experience more engaging and effective.<br/> <br/>
Accessibility: We prioritize accessibility for all users, regardless of their literacy levels, abilities, or language proficiency. Features such as text-to-speech functionality, multiple language support, and user-friendly interfaces ensure inclusivity and ease of use for everyone.<br/> <br/>
Actionable Tools: In addition to educational content, our platform provides practical tools and resources to help users implement what they learn in their daily lives. Budgeting calculators, connections to financial advisors, and other actionable tools empower users to make informed financial decisions and manage their finances effectively.<br/><br/>
Empowerment and Security: By equipping users with financial knowledge and tools, we empower them to take control of their financial futures, reduce financial stress, and build long-term security. Moreover, our platform prioritizes data security and privacy, ensuring that users can trust us with their sensitive financial information.<br/><br/>
Social Impact: Choosing our platform means contributing to broader societal goals, such as promoting financial inclusion, reducing economic disparities, and fostering financial resilience in society. By educating individuals and empowering them to make better financial decisions, we collectively work towards building a more financially secure and equitable world.
  </p>
</div>



    </div>
    </div>
    
      </div>
  );
};

export default ConversationPage;
