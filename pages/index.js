import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
// import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Achievement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main class="md:flex md:flex-col md:items-center h-screen">
        <div class="px-4 md:w-3/5 h-full">
          <div class="flex pt-2 md:pt-0 md:my-2 justify-end items-center relative">
            <h1 class="font-bold text-2xl text-indigo-900	absolute left-0">Meetings</h1>
            <div class="bg-slate-100 rounded-full py-2 px-2 ml-20">
              <div class="bg-violet-400/50 rounded-full pt-2 px-1">
                  <Image class="rounded-full" height="0" width="35" src="/images/profile-icon.png"/>
              </div>
            </div>
          </div>
          <div class="h-3/4 overflow-auto">
            <p class="font-bold text-sm text-slate-400 mb-3">Today, March 16</p>
            <div class="border-l-4 border-indigo-400 bg-violet-100 px-5 py-5 mb-3 rounded-l-lg flex relative">
              <div>
                <h2 class="font-bold text-lg text-indigo-800">Powerpoint Review</h2>
                <p class="text-sm text-slate-400">10:00 AM - 11:00 AM</p>
              </div>
              <div>
                <div class="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center absolute right-4">
                  <Image height="0" width="33" src="/images/others-icon.png"/>
                </div>
              </div>
            </div>
            <div class="border-l-4 border-rose-400 border-solid bg-rose-50 px-5 py-5 mb-4 rounded-l-lg flex relative">
              <div>
                <h2 class="font-bold text-lg text-indigo-800">Projects Planning</h2>
                <p class="text-sm text-slate-400">10:00 AM - 11:00 AM</p>
              </div>
              <div>
                <div class="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center absolute right-4">
                  <Image height="0" width="33" src="/images/meeting-icon.png"/>
                </div>
              </div>
            </div>
            {/* New Date */}
            <p class="font-bold text-sm text-slate-400 mb-3">Tomorrow, March 17</p>
            <div class="border-l-4 border-l-teal-400 bg-teal-100/50 px-5 py-5 mb-3 rounded-l-lg flex relative">
              <div>
                <h2 class="font-bold text-lg text-indigo-800">Setup call</h2>
                <p class="text-sm text-slate-400">10:00 AM - 11:00 AM</p>
              </div>
              <div>
                <div class="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center absolute right-4">
                  <Image height="0" width="33" src="/images/meeting-icon.png"/>
                </div>
              </div>
            </div>
            <div class="border-l-4 border-l-amber-400 border-solid bg-amber-100/50 px-5 py-5 mb-4 rounded-l-lg flex relative">
              <div>
                <h2 class="font-bold text-lg text-indigo-800">Kickoff Meeting</h2>
                <p class="text-sm text-slate-400">10:00 AM - 11:00 AM</p>
              </div>
              <div>
                <div class="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center absolute right-4">
                  <Image height="0" width="33" src="/images/others-icon.png"/>
                </div>
              </div>
            </div>
            {/* New date */}
            <p class="font-bold text-sm text-slate-400 mb-3 pt-2">Saturday, March 18</p>
            <div class="bg-white shadow-md shadow-slate-100 mb-3">
              <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
            </div>

            <p class="font-bold text-sm text-slate-400 mb-3 pt-2">Sunday, March 19</p>
            <div class="bg-white shadow-md shadow-slate-100 mb-3">
              <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
            </div>

            <p class="font-bold text-sm text-slate-400 mb-3 pt-2">Monday, March 20</p>
            <div class="bg-white shadow-md shadow-slate-100 mb-3">
              <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
            </div>
            <p class="font-bold text-sm text-slate-400 mb-3 pt-2">Tuesday, March 21</p>
            <div class="bg-white shadow-md shadow-slate-100 mb-3">
              <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
            </div>

            <p class="font-bold text-sm text-slate-400 mb-3 pt-2">Wednesday, March 22</p>
            <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
          </div>
          <div class="relative h-100 w-100 flex justify-center">
            <div class="bg-gradient-to-r from-cyan-500/50 via-purple-500/70 to-pink-500/80 h-20 rounded-bl-lg border-2 absolute top-2 rounded-full w-20 flex items-center justify-center z-10">
              <div class="bg-white h-16 absolute top-1 rounded-full w-16 flex items-center justify-center z-10">
                <Image height="0" width="35" src="/images/plus-icon.png"/>
              </div>
            </div>
            <div class="flex h-20 z-0 absolute top-10 w-full ">
              <div class="border-t-2 border-t-sky-700/30 w-screen flex items-center justify-center">
                <Image class="opacity-70 ml-10" height="0" width="45" src="/images/icon-2.png"/>
              </div>
              <div class="flex flex-col border-t-sky-700/30 border-t-2 w-full items-center">
                <div class="h-1/2 w-1/4">
                </div>
                <div class="h-1/2">
                </div>
              </div>
              <div class="border-t-2 border-t-sky-700/30 shadow-slate-100 w-screen">
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
