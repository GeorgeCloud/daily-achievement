import Image from 'next/image'

export default function Oauths(){
    return (
        <div class="flex w-2/3 md:w-2/4 justify-between pt-8 md:pt-5">
          <Image
            src="/images/google-logo.png"
            height="0"
            width="50"
            class="opacity-70 md:ml-10 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80"
            alt="Google logo"
          />
          <Image
            src="/images/apple-logo.png"
            height="0"
            width="50"
            class="opacity-70 md:ml-0 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80"
            alt="Apple logo"
          />
          <Image
            src="/images/facebook-logo.png"
            height="0"
            width="50"
            class="opacity-70 md:mr-10 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80"
            alt="Facebook logo"
          />
        </div>
    )
}
