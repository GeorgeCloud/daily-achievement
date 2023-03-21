import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(){
  return (
    <div class="relative h-100 w-100 flex justify-center">
      <div class="bg-gradient-to-r from-cyan-500/50 via-purple-500/70 to-pink-500/80 h-20 rounded-bl-lg border-2 absolute top-2 rounded-full w-20 flex items-center justify-center z-10">
        <div class="bg-white h-16 absolute top-1 rounded-full w-16 flex items-center justify-center z-10">
          <Link href="/tasks/new">
            <Image
              src="/images/plus-icon.png"
              height="0"
              width="35"
              alt="New task button"
            />
          </Link>
        </div>
      </div>
      <div class="flex h-20 z-0 absolute top-10 w-full ">
        <div class="border-t-2 border-t-sky-700/30 w-screen flex items-center justify-center">
          <Link href="/">
            <Image
              src="/images/icon-2.png"
              class="opacity-70 ml-10"
              height="0"
              width="45"
              alt="placeholder"
            />
          </Link>
        </div>
        <div class="flex flex-col border-t-sky-700/30 border-t-2 w-full items-center">
          <div class="h-1/2 w-1/4">
          </div>
          <div class="h-1/2">
          </div>
        </div>
        <div class="border-t-2 border-t-sky-700/30 shadow-slate-100 w-screen flex items-center justify-center">
          <Link href="/">
            <Image
              src="/images/log-out.png"
              class="opacity-70 mr-10"
              height="0"
              width="45"
              alt="placeholder"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
