import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Task({ task, timestamp }){
    const [taskDate, setTaskDate] = useState();

    const colors = {
      'violet': ['bg-violet-100'  , 'border-indigo-400'],
      'rose'  : ['bg-rose-50'     , 'border-rose-400'],
      'teal'  : ['bg-teal-100/50' , 'border-l-teal-400'],
      'amber' : ['bg-amber-100/50', 'border-l-amber-400'],
    }

    useEffect(() => {
      setTaskDate(
        new Date(timestamp).toLocaleTimeString(
          'en-US', {hour: '2-digit', minute:'2-digit', hour12: true}
        )
      )
    }, [timestamp]);

    return (
      <div class="border-l-4 border-indigo-400 bg-violet-100 px-5 py-5 mb-3 rounded-l-lg flex relative">
          <div>
            <h2 class="font-bold text-lg text-indigo-800">
              { task.title }
            </h2>

            <div class="text-sm text-slate-400">
              { taskDate }
            </div>
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
