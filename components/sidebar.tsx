"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from "next/font/google";
import { cn } from '@/lib/utils';
// import { Code, LayoutDashboard, MessageSquare, Music, VideoIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FaHome, FaQuestionCircle, FaInfoCircle, FaLightbulb, FaFileAlt } from 'react-icons/fa';



const montserrat = Montserrat({weight: "600", subsets: ["latin"]});

const routes=[
  {
    label: "Home",
    icon: FaHome,
    href: "/home",
    color: "text-sky-500",
  },
  {
    label: "Why choose Fiscal Fit",
    icon: FaQuestionCircle,
    href: "/whyFF",
    color: "text-violet-500",
  },
  {
    label: "About Fiscal Fit",
    icon: FaInfoCircle,
    href: "/aboutFF",
    color: "text-green-500",
  },
  {
    label: "Solution",
    icon: FaLightbulb,
    href: "/solution",
    color: "text-orange-700",
  },
  {
    label: "Frequently Asked Questions",
    icon: FaFileAlt,
    href: "/faq",
    color: "text-emerald-500",
  },
  // {
  //   label: "About Us",
  //   icon: FaInfoCircle,
  //   href: "/aboutUS",
  //   color: "text-maroon-500",
  // },
  // {
  //   label: "Kishan Ka Link Pro",
  //   icon: FaInfoCircle,
  //   href: "/KKLpro",
  //   color: "text-green-500",
  // },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
            <div className='relative w-8 h-8 mr-4'>
              <Image fill alt="Logo" src="/logoCC.jpg" />
            </div>
            <h1 className={cn('text-2xl font-bold',montserrat.className)}>Fiscal Fit</h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link href={route.href} key={route.href} className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
              <div className=' flex items-center flex-1'>
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Sidebar
