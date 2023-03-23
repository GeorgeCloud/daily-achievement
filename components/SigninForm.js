import Oauths from './Oauths'

export default function SigninForm(){
    return (
      <form class="w-full py-20 md:py-10 flex flex-col items-center justify-center">
        <h2 class="text-2xl md:text-3xl font-semibold text-neutral-700 md:pt-10 pb-7">
          Hello Again!
        </h2>
        <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">
          Welcome back you've
        </p>
        <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">
          been missed!
        </p>

        <input 
          type="text"
          name="phoneNumber"
          placeholder='Phone number'
          class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50 mt-10 mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder='Password'
          class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50"
        />
        <button id="register-btn" class="rounded-2xl text-base md:text-lg font-normal md:font-light bg-indigo-500/90 w-fit md:w-fit mt-10 text-white hover:font-semibold tracking-widest">
          Register
        </button>

        <p class="text-center md:text-right w-full md:mr-16 font-thin text-neutral-700 py-11 md:py-5 tracking-wider hover:font-extralight">
          Don't have an account
        </p>
        <p id="line-decoration">or continue with</p>

        <Oauths />
      </form>
    )
}
