import Image from 'next/image'

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
      <div class="border-l-4 border-indigo-400 bg-violet-100 px-5 py-5 mb-4 rounded-l-lg flex relative">
          <div>
            <h2 class="font-bold text-lg text-indigo-800">
              { task.title }
            </h2>
            <p class="text-sm text-slate-400">
              { timestamp }
            </p>
            <div class="flex items-center pt-4">
              <Image height="0" width="14" src="/images/pin.png" alt="pin icon"/>
              <p class="text-sm font-normal text-slate-600 pt-1 md:pt-0 ml-3">Home, CA</p>
            </div>
            <div class="flex items-center pt-0 md:py-2">
              <div class="h-5 w-5 relative">
                <Image fill src="/images/paragraph.png" alt="paragraph icon"/>
              </div>
              <p class="mt-5 md:mt-0 pb-2 md:py-2 mr-4 text-sm text-thin ml-3 md:ml-2 text-slate-600/80">
              Need to prepare powerpoint presentation for Intensive.
              </p>
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
