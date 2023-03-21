import Link from 'next/link'
import Image from 'next/image'

export default function NoTask(){
    return (
        <div class="bg-slate-100 rounded-full py-2 px-2 ml-20">
            <div class="bg-violet-400/50 rounded-full pt-2 px-1">
              <Link href="/">
                <Image
                  src="/images/profile-icon.png"
                  class="rounded-full"
                  height="0"
                  width="35"
                  alt="Profile image"
                />
              </Link>
            </div>
          </div>
    )
}
