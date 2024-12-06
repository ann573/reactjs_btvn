import React from 'react'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router';
import { registerSchema } from './../schema/auth';
import { registerAccount } from './../service/auth';
const Register = () => {
  const nav = useNavigate()
  const {handleSubmit, reset, register, formState: {errors}} = useForm({
    resolver: zodResolver(registerSchema)
  })

  const handleRegister = async (dataBody) =>{
    const data = await registerAccount(dataBody)
    if(data.user && confirm("Sang trang đăng nhập nhé!")){
      nav('/login')
    }
    reset()
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)} className="border w-[400px] mx-auto mt-10 p-4">
        <h1 className='text-4xl mb-4 font-bold'>Register</h1>
          <div className='mb-3 flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" className='border w-full p-1' {...register("email")}/>
            {errors?.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>

          <div className='mb-3 flex flex-col'>
            <label htmlFor="username">Username</label>
            <input type="text" className='border w-full p-1' {...register("username")}/>
            {errors?.username && <p className='text-red-500'>{errors.username?.message}</p>}
          </div>

          <div className='mb-3 flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="password" className='border w-full p-1' {...register("password")}/>
            {errors?.password && <p className='text-red-500'>{errors.password?.message}</p>}
          </div>

          <div className='mb-3 flex flex-col'>
            <label htmlFor="password">ConfirmPassword</label>
            <input type="password" className='border w-full p-1' {...register("confirmPass")}/>
            {errors?.confirmPass && <p className='text-red-500'>{errors.confirmPass?.message}</p>}
          </div>
          <div className="mb-3">
            <Link to="/login" className='underline'>You have an account?</Link>
          </div>
          <div className='mb-3'>
            <button className='bg-red-400 w-full py-2'>Register</button>
          </div>
      </form>
    </>
  )
}

export default Register