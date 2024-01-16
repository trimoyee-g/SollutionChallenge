"use client";

import { Card } from "@/components/ui/card";
import { Carousel } from 'flowbite-react';
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {useRouter} from "next/navigation";

const tools = [
  {
    label: "Why choose Kisan Ka Link?",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "About Kisan Ka Link",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  },
  {
    label: "Solution",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of Kisan Ka Link</h2>
      <div className="border p-1 md:p-5 lg:p-4  ">
            <p className=" font-light text-sm md:text-lg text-start">
              <strong>Kisan Ka Link</strong> provides cutting-edge cloud based logistical solution for
farmers and their products
keeping the MSMEs of the rural industry in the path of advancement 
with integration of deployed cloud services.
            </p>
            
          </div>
    </div>
    {/* <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool) => (
        <Card 
        onClick = {() => router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md",  tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div>
            <div className="font-semibold">
              {tool.label}
            </div>
          </div>
          <ArrowRight className="w-5 h-5" />
          </Card>
      ))}
    </div>
    </div> */}
    




    <div className="h-80 sm:h-96 xl:h-120 2xl:h-144">
  <Carousel>
    <div className="bg-transparent">
      <img src="about.jpg" alt="..." className="w-full h-full object-cover" />
    </div>
    {/* <div className="bg-transparent">
      <img src="about2.jpg" alt="..." className="w-full h-full object-cover" />
    </div> */}
    {/* <div className="bg-transparent">
      <img src="about3.jpg" alt="..." className="w-full h-full object-cover" />
    </div> */}
    <div className="bg-transparent">
      <img src="abou4.jpg" alt="..." className="w-full h-full object-cover" />
    </div>
    <div className="bg-transparent">
      <img src="about5.jpg" alt="..." className="w-full h-full object-cover" />
    </div>
  </Carousel>
</div>



    </div>
  )
}

export default DashboardPage;
