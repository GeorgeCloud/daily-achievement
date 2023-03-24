import Image from 'next/image'
import { useRouter } from 'next/router'
import getNextSevenDays from '../lib/time'

export default function TaskForm(){
  const router = useRouter()

  const handleTaskForm = async (e) => {
    e.preventDefault()
    const dateNow = new Date();
    const dateInputs = document.getElementsByClassName('day');

    const taskStamps = Array.from(dateInputs).reduce((datesArr, dateInput) => {
      if (dateInput.checked){
        const daysAway = parseInt(dateInput.value)
        const taskDate = new Date()

        // Create date based on how many days away from today
        taskDate.setDate(dateNow.getDate() + daysAway)

        datesArr.push(taskDate)
      }
      return datesArr
    }, [])

    const data = {
      title       : e.target.title.value,
      time        : e.target.time.value,
      dates       : taskStamps,
      color       : e.target.color.value,
      location    : e.target.location.value,
      description : e.target.description.value,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    // add optimististic ui with task
    const response = await fetch('/api/tasks', options)

    router.push('/')
  }

    return (
      <form onSubmit={handleTaskForm}>
        {/* Title */}
        <p class="font-meidum text-neutral-700 text-lg">What&apos;s your title?</p>
        <div class="task-title mt-2 mb-6">
          <input
            type="text"
            name="title"
            class="rounded-lg pl-3 ml-2 border-2 text-black py-2 md:py-3 w-80 md:w-96 text-normal font-light outline-0"
            placeholder="Add Title"
          />
        </div>

        {/* Type of task */}
        <div class="mt-2">
          <p class="font-meidum text-neutral-700 text-lg">What is your task type?</p>
          <select name="type" id="task-type" class="ml-2 mt-2 md:mt-4" multiple required>
            <option value="1" class="for-task-type task-1">Work</option>
            <option value="2" class="for-task-type task-2">Study</option>
            <option value="3" class="for-task-type task-3">Event</option>
            <option value="4" class="for-task-type task-4">Gym</option>
            <option value="5" class="for-task-type task-5">Other</option>
          </select>
        </div>

        {/* Description & Location */}
        <div class="location flex flex-col ml-2 w-fit">
          <div class="description mt-4 border-l-2 border-t-2 border-r-2 rounded-tr-lg rounded-tl-lg px-3">
            <div class="flex space-x-2 h-24 md:h-20 mt-2">
              <div class="h-5 w-5 md:w-11 relative">
                <Image fill src="/images/paragraph.png" alt="paragraph icon"/>
              </div>
              <span class="for-border-design h-6"></span>
              <textarea name="description" class="font-light resize-none outline-none md:w-screen" placeholder="Add Description" required/>
            </div>
          </div>
          <div class="location-box flex space-x-3 border-2 rounded-bl-lg rounded-br-lg px-3 py-1">
            <Image height="0" width="17" src="/images/pin.png" alt="pin icon"/>
            <input name="location" class="for-border-design mt-1 font-light outline-none text-sm pr-7 w-full pl-3 " placeholder="Location if applicable" />
          </div>
        </div>

        {/* Day selection: Select days for task ( Mon-Sun, multi-choice) */}
        <div class="task-inputs h-full">
          <div class="days-and-color mt-6 md:mt-4">
            <p class="font-meidum text-neutral-700 text-lg">What days is the task?</p>
            <fieldset class="select-task flex mb-3" name="date" required>
              {Object.values(getNextSevenDays()).map((day, idx) => {
                return (
                  <div key={day.dayOfWeek}>
                    <input type="checkbox" class="day" value={idx} />
                    <div class="group-label flex flex-col w-10 justify-center text-neutral-700 items-center">
                      <label class="label-1 font-medium text-sm">{day.dayOfWeek}</label>
                      <label class="label-2 font-light text-sm pt-2">{day.dateOfMonth}</label>
                    </div>
                  </div>
                )
              })}
            </fieldset>

            {/* Time */}
            <p class="font-meidum text-neutral-700 text-lg">
              What time is the task?
            </p>
            <div class="time mt-4 md:mt-2 mb-6">
              <input type="time" id="time" name="time" class="rounded-lg border-2 w-96 h-12 text-lg pl-3 font-medium outline-0" required/>
            </div>
            
            {/* Background color for task */}
            <p class="font-meidum text-neutral-700 text-lg">
              What is your preference for background color?
            </p>
            <div class="flex mt-5 md:mt-0">
              <div class="w-4/5 md:w-2/5 flex justify-between items-center ml-2 md:mt-2">
                <input id="violet" type="radio" name="color" class="color" defaultChecked />
                <input id="rose" type="radio" name="color" class="color" />
                <input id="teal" type="radio" name="color" class="color"/>
                <input id="amber" type="radio" name="color" class="color" />
              </div>
              <div class="flex flex-col items-end w-1/2">
                <button type="submit" class="task-submit-btn rounded-2xl text-sm bg-indigo-500/90 md:text-md font-normal md:font-light w-fit py-2 px-4 md:px-12 text-white hover:font-semibold">
                  Create Task
                </button>
                <a class="rounded-2xl text-sm md:text-md font-normal mt-2 md:font-light text-neutral-700 text-center py-2 w-fit bg-slate-200/50 px-8 md:px-16 hover:font-semibold" href="">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}
