import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/Navbar'
import TaskForm from '/components/TaskForm'
import ProfileIcon from 'components/ProfileIcon'


export default function newTask() {
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
                Create a task
              </h1>
              <ProfileIcon />
            </div>

          <div class="h-3/4 overflow-auto">
            <TaskForm />
          </div>

          <Navbar />
        </div>
      </main>
    </>
  )
}
