import Image from 'next/image'

export default function Task({ task }){
    return (
      <div class="border-l-4 border-indigo-400 bg-violet-100 px-5 py-5 mb-3 rounded-l-lg flex relative">
          <div>
            <h2 class="font-bold text-lg text-indigo-800">
              { task.title }
            </h2>

            <p class="text-sm text-slate-400">
              { task.time }
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
    )
}
