import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BriefcaseBusinessIcon, MailIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col p-10'>
      <div className='flex items-center'>
        <Image src='/me.png' width={100} height={100} alt='Me' />
        <div className='flex flex-col ml-4 lg:ml-12 justify-center'>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0'>
            Zwe Min (Jay) Soe
          </h3>
          <p className='mt-1 flex text-sm items-center text-slate-600'>
            <BriefcaseBusinessIcon className='mr-2' size={14} /> Software
            Engineer @ Aquanow
          </p>
          <p className='mt-1 flex items-center text-sm text-slate-600'>
            <MapPinIcon className='mr-2' size={14} />
            Based in Vancouver, Canada.
          </p>
          <ul className='flex space-x-8 items-center mt-4'>
            <li>
              <a href='mailto:zwemsoe@gmail.com'>
                <MailIcon size={18} />
              </a>
            </li>
            <li>
              <a href='https://github.com/zwemsoe'>
                <GitHubLogoIcon width={18} height={18} />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/zwe-min-soe-0b15091a8'>
                <LinkedInLogoIcon width={18} height={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col mt-10'>
        <p className='flex text-slate-600  font-semibold'>About</p>
        <p className='leading-7 [&:not(:first-child)]:mt-1'>
          {`Welcome! I'm Jay, a soon-to-be Computer Science graduate from SFU, and
          a part-time software engineer at Aquanow. Specializing in React, Node,
          and TypeScript, I've spent over three years honing my skills to craft
          engaging web applications. My passion lies in developing user-centric
          products that not only meet needs but also simplify people's lives.
          Always on the lookout for the latest in web technologies, I'm driven
          by the excitement of innovation and the joy of solving problems. Stay
          a while, explore, and let's connect!`}
        </p>
      </div>
      <hr className='my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />
      <p className='text-center'>{"<WIP..>"}</p>
    </main>
  );
}
