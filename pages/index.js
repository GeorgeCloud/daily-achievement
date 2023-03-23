import Head from 'next/head'
import Navbar from 'components/Navbar'
import NoTask from 'components/NoTask'
import Task from 'components/Task'
import ProfileIcon from 'components/ProfileIcon'

 export default function index({ tasks }) {
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
            {/* Add tasks according to through corresponding dates For loop 6 days from today and check if task  */}

            {tasks.map(task => {
              return (
                <div key={task.id}>
                  <p class="font-bold text-sm text-slate-400 mb-3">Today, March 16</p>
                  <Task task={task} key={task.id} />
                </div>
              )
            })}

            {/* <NoTask /> */}
          </div>

          <Navbar />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  console.log('tasks:')
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  const taskRes = await fetch('http://localhost:3000/api/users/1/tasks');
  const tasks = await taskRes.json()

  return { props: { tasks } }
}
