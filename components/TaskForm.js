import Image from 'next/image'
import { useRouter } from 'next/router'

export default function TaskForm(){
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      title      : e.target.title.value,
      time       : e.target.time.value,
      date       : e.target.date.value,
      color      : e.target.color.value,
      location   : e.target.location.value,
      description: e.target.description.value,
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
      <form onSubmit={handleSubmit}>
        <div class="task-title mt-2 mb-6">
          <input
            type="text"
            name="title"
            class="border-voliet-400 border-b-2 text-black h-10 w-96 text-lg font-bold outline-0"
            placeholder="Add Title"
          />
        </div>

        <div class="task-inputs h-full p-2 pb-40">
          <div class="time mt-1">
            <input type="time" id="time" name="time" class="text-lg font-medium outline-none" required/>
          </div>

          <div class="days-and-color mb-2">
            <fieldset class="mt-2" name="date" required>
              <input type="radio" name="date" value="monday" />
              &nbsp;Mon

              &nbsp;<input type="radio" name="date" value="tuesday" />
              &nbsp;Tue

              &nbsp;<input type="radio" name="date" value="wednesday" />
              &nbsp;Wed

              &nbsp;<input type="radio" name="date" value="thursday" />
              &nbsp;Thr

              &nbsp;<input type="radio" name="date" value="friday"/>
              &nbsp;Fri

              &nbsp;<input type="radio" name="date" value="saturday" />
              &nbsp;Sat

              &nbsp;<input type="radio" name="date" value="sunday" />
              &nbsp;Sun
            </fieldset>

            <div class="mt-2">
              <label>Type &nbsp;</label>
              <select name="type" class="border outline-none" required>
                <option>--</option>
                <option>Birthday</option>
                <option>Event</option>
                <option>Gym</option>
                <option>Party</option>
                <option>School</option>
                <option>Trip</option>
                <option>Workout</option>
                <option>Work</option>
                <option>Other</option>
              </select>
            </div>

            <label>Color&nbsp;</label>
            <input class="mt-2" type="color" name="color" id="color" required/>
          </div>
      
          <div class="location flex space-x-3  pt-3 pb-2">
            <Image height="0" width="20" src="/images/pin.png" alt="pin icon" />
            <input name="location" class="outline-none" placeholder="Location if applicable" />
          </div>

          <div class="description mt-4">
            <div class="flex space-x-3 h-20">
              <div class="h-7 w-7 relative">
                <Image fill src="/images/paragraph.png" alt="paragraph icon"/>
              </div>
              <textarea name="description" class="resize-none outline-none" placeholder="Add Description" required/>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <button type="submit" class="bg-violet-300 text-white pt-1 pb-1">
            Create Task
          </button>
          <a class="text-violet-300 text-center mt-2" href="">
            Cancel
          </a>
        </div>
      </form>
    )
}
