import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center p-24'>
      <p className='mr-10'>{"WIP..."}</p>
      <ModeToggle />
    </main>
  );
}
