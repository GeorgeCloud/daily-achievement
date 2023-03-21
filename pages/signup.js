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
        <div class="px-1 md:w-3/5 h-full">
          <div class="flex items-center min-w-full justify-center flex-col">
            <div class="bg-[#CCACF4] mx-4 md:px-40 py-14 md:py-7 rounded-3xl my-4 md:mb-0">
              <Image class="rounded-2xl" height="0" width="500" src="/images/home.png"/>
            </div>
            <div class="h-fit text-2xl md:text-3xl font-semibold md:w-2/3 md:w-screen pt-16 flex flex-col items-center">
              <h2 class="text-center text-neutral-700">Plan your</h2>
              <h2 class="text-center text-neutral-700">schedules everyday</h2>
              <p class="text-center text-sm md:text-lg font-extralight mt-8 md:mt-5 w-3/4 md:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et odio condimentum, consectetur enim vel.</p>
              <div id="parent-bg" class="rounded-2xl bg-slate-200/50  w-fit md:w-2/3 mt-20 md:mt-8 text-neutral-600 shadow-lg shadow-slate-300/90">
                <button id="child-bg-1" class="rounded-2xl text-base md:text-lg font-normal md:font-light bg-white py-3 md:py-5 w-fit px-7 md:px-5 md:w-1/2 hover:font-bold tracking-widest">Register</button>
                <button id="child-bg-2" class="rounded-2xl text-base md:text-lg font-normal md:font-light h-full px-7 md:px-5 py-3 md:py-5 w-fit md:w-1/2 hover:font-bold tracking-wider">Sign In</button>
              </div>
            </div>
            {/* Register  */}
            <form class="w-full py-20 md:py-10 flex flex-col items-center justify-center">
              <h2 class="text-2xl md:text-3xl font-semibold text-neutral-700 md:pt-10 pb-7 ">Welcome!</h2>
              <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">Please register to use</p>
              <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">our service!</p>

              <p class="text-sm md:text-lg font-light mt-10 mb-4">1. Add your phone number here</p>
              <input class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50" placeholder='Phone number' type="text"></input>
              <p class="text-sm md:text-lg font-light mt-10 mb-4">2. Create your password</p>
              <input class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50" placeholder='Password' type="text"></input>
              <button id="register-btn" class="rounded-2xl text-base md:text-lg font-normal md:font-light bg-red-400/90 w-fit md:w-fit mt-10 text-white hover:font-semibold tracking-widest">Register</button>
              <p class="text-center md:text-right w-full md:mr-16 font-thin text-neutral-700 py-11 md:py-5 tracking-wider hover:font-extralight">Already have an account</p>

              <p id="line-decoration" class="">or continue with</p>

              <div class="flex w-2/3 md:w-2/4 justify-between pt-8 md:pt-5">
                <Image class="opacity-70 md:ml-10 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80" height="0" width="50" src="/images/google-logo.png"/>
                <Image class="opacity-70 md:ml-0 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80" height="0" width="50" src="/images/apple-logo.png"/>
                <Image class="opacity-70 md:mr-10 py-2 px-2 bg-gray-200/30 shadow-lg shadow-slate-300/90 hover:bg-slate-200/80" height="0" width="50" src="/images/facebook-logo.png"/>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
