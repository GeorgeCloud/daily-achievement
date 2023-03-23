import Head from 'next/head'
import Image from 'next/image'
import SigninForm from '@/components/SigninForm'
import RegisterForm from '@/components/RegisterForm'

export default function Login() {
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
              <Image
                src="/images/home.png"
                height="0"
                width="500" 
                class="rounded-2xl"
                alt="Home button"
              />
            </div>
            <div class="h-fit text-2xl md:text-3xl font-semibold md:w-2/3 md:w-screen pt-16 flex flex-col items-center">
              <h2 class="text-center text-neutral-700">
                Plan your
              </h2>
              <h2 class="text-center text-neutral-700">
                schedules everyday
                </h2>
              <p class="text-center text-sm md:text-lg font-extralight mt-8 md:mt-5 w-3/4 md:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et odio condimentum, consectetur enim vel.
              </p>
              <div class="rounded-2xl w-fit md:w-2/3 bg-slate-200/50 mt-20 md:mt-8 text-neutral-600 shadow-lg shadow-slate-300/90">
                <button class="rounded-2xl text-base md:text-lg font-normal md:font-light py-3 md:py-5 w-fit px-7 md:px-5 md:w-1/2 hover:font-bold tracking-widest">
                  Register
                </button>
                <button class="rounded-2xl text-base md:text-lg bg-white font-normal md:font-light h-full px-7 md:px-5 py-3 md:py-5 w-fit md:w-1/2 hover:font-bold tracking-wider">
                  Sign In
                </button>
              </div>
            </div>

            {/* <SigninForm /> */}
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  )
}
