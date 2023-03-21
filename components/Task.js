import Image from 'next/image'

export default function Task(){
    return (
        <>
          <p class="font-bold text-sm text-slate-400 mb-3">Today, March 16</p>

          <div class="border-l-4 border-indigo-400 bg-violet-100 px-5 py-5 mb-3 rounded-l-lg flex relative">
              <div>
                <h2 class="font-bold text-lg text-indigo-800">
                  Powerpoint Review
                </h2>

                <p class="text-sm text-slate-400">
                  10:00 AM - 11:00 AM
                </p>
              </div>

              <div>
                <div class="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center absolute right-4">
                    <Image
                    src="/images/others-icon.png"
                    height="0"
                    width="33"
                    alt="Task icon"
                    />
                </div>
              </div>
          </div>
        </>
    )
}