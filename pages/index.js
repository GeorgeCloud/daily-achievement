import Head from 'next/head'
import Navbar from 'components/Navbar'
import DailySchedule from 'components/DailySchedule'
import ProfileIcon from 'components/ProfileIcon'

 export default function index({ tasks }) {
  const numOfDays = [...Array(7).keys()]

  return (
    <>
      <Head>
        <title>Daily Achievement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main class="md:flex md:flex-col md:items-center h-screen">
        <div class="px-4 md:w-3/5 h-full">
          <div class="flex pt-2 md:pt-0 md:my-2 justify-end items-center relative">
            <h1 class="font-bold text-2xl text-indigo-900	absolute left-0">
              Meetings
            </h1>
            <ProfileIcon />
          </div>
          <div class="h-3/4 overflow-auto">
            {numOfDays.map((idx, day) => {
              return (
                <DailySchedule
                  tasks={tasks}
                  idx={idx}
                  key={idx}
                />
              )
            })}
          </div>

          <Navbar />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  const taskRes = await fetch('/api/users/1/tasks');
  // + new URLSearchParams({ date: 'value' })

  const tasks = await taskRes.json()

  return { props: { tasks } }
}
