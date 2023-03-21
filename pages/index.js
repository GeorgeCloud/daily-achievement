import Head from 'next/head'
import Navbar from 'components/Navbar'
import NoTask from 'components/NoTask'
import Task from 'components/Task'
import ProfileIcon from 'components/ProfileIcon'

export default function index() {
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
            <Task></Task>
            {/* <NoTask /> */}
          </div>

          <Navbar />
        </div>
      </main>
    </>
  )
}
