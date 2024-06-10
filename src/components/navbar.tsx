"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Disc3Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";

export function Navbar({
  track,
}: {
  track?: {
    url: string;
    name: string;
    artist: string;
    imageUrl: string;
  };
}) {
  const { theme } = useTheme();

  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex'>
        <Image
          src={theme === "light" ? "/logo-b.png" : "/logo-w.png"}
          alt='zsoe.dev'
          width={30}
          height={30}
          className='mr-3'
        />
        <h1 className='text-xl font-bold'>zsoe.dev</h1>
      </div>

      <ul className='flex space-x-4 items-center'>
        {/* <li>
          <a href='#'>Work</a>
        </li>
        <li>
          <a href=''>Resume</a>
        </li> */}
        <ModeToggle />
        {track ? (
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link href={track.url} target='_blank'>
                  <Avatar className='animate-spin-slow'>
                    <AvatarImage src={track.imageUrl} />
                    <AvatarFallback>
                      <Disc3Icon />
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  <em>{track.name}</em> - {track.artist}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : null}
      </ul>
    </nav>
  );
}
