import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/Navbar'
import TaskForm from '/components/TaskForm'

export default function newTask() {
  return (
    <>
      <Head>
        <title>Daily Achievement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main class="md:flex md:flex-col md:items-center h-screen">
        <div class="px-4 md:w-3/5 h-full">
          <div class="border-b-2">
            <h1 class="text-3xl font-bold pb-2 text-indigo-500">Create a task</h1>
          </div>
          
          <div class="ml-4 p-2 h-3/4">
            <TaskForm />
          </div>

          <Navbar />
        </div>
      </main>
    </>
  )
}
