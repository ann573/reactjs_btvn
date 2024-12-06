import React from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router';
import { loginSchema } from '../schema/auth'
import { loginAccount } from '../service/auth'

const Login = () => {
  const nav = useNavigate()
  const {handleSubmit, reset, register, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema)
  })


  const handleLogin = async (dataBody) =>{
    const data = await loginAccount(dataBody)
    console.log(data);
    if(data.accessToken && confirm("Go back home")){
      localStorage.setItem("accessToken", data.accessToken)
      nav("/")
    } else reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="border w-[400px] mx-auto mt-10 p-4">
        <h1 className='text-4xl mb-4 font-bold'>Login</h1>
          <div className='mb-3 flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" className='border w-full p-1' {...register("email")}/>
            {errors?.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>

          <div className='mb-3 flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="password" className='border w-full p-1' {...register("password")}/>
            {errors?.password && <p className='text-red-500'>{errors.password?.message}</p>}
          </div>

          <div className="mb-3">
            <Link to="/register" className='underline'>You don't have an account?</Link>
          </div>
          <div className='mb-3'>
            <button className='bg-red-400 w-full py-2'>Login</button>
          </div>
      </form>
    </>
  )
}

export default Login