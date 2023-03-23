import Oauths from './Oauths'
import { useRouter } from 'next/router'

export default function RegisterForm(){
  const router = useRouter()

  const handleSignupForm = async (e) => {
    e.preventDefault();

    const data = {
      phoneNumber: e.target.phoneNumber.value,
      passsword  : e.target.password.value,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    const apiReponse = await fetch('/api/users', options)
    const user = await apiReponse.json();

    if (user){
      // Implement sessions
      router.push('/')
    }
  }

    return (
      <form onSubmit={handleSignupForm} class="w-full py-20 md:py-10 flex flex-col items-center justify-center">
        <h2 class="text-2xl md:text-3xl font-semibold text-neutral-700 md:pt-10 pb-7">
          Welcome!
        </h2>
        <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">
          Please register to use
        </p>
        <p class="text-center text-sm md:text-lg font-extralight md:w-1/3">
          our service!
        </p>

        <p class="text-sm md:text-lg font-light mt-10 mb-4">
          1. Add your phone number here
        </p>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50"
        />

        <p class="text-sm md:text-lg font-light mt-10 mb-4">
          2. Create your password
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="px-5 md:px-10 rounded-2xl bg-slate-100/70 text-neutral-700 shadow-sm shadow-slate-300/90 py-2 md:py-5 hover:bg-slate-200/50"
        />

        <button id="register-btn" class="rounded-2xl text-base md:text-lg font-normal md:font-light bg-indigo-500/90 w-fit md:w-fit mt-10 text-white hover:font-semibold tracking-widest">
          Register
        </button>

        <p class="text-center md:text-right w-full md:mr-16 font-thin text-neutral-700 py-11 md:py-5 tracking-wider hover:font-extralight">
          Already have an account
        </p>
        <p id="line-decoration">
          or continue with
        </p>

        <Oauths />
      </form>
    )
}




