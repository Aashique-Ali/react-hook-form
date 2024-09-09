import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(8).max(20).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-green-600 w-full flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-green-400 flex justify-center items-center gap-3 flex-col p-16 rounded"
      >
        <h1>Register</h1>
        <input
          type="text"
          placeholder="your fullname"
          {...register("fullName")}
          className="w-[15rem] h-8 rounded p-2"
        />
        <p className="text-red-600 text-[12px]">{errors.fullName?.message}</p>
        <input
          type="text"
          placeholder="your email"
          {...register("email")}
          className="w-[15rem] h-8 rounded p-2"
        />
        <p className="text-red-600 text-[12px] tracking-widest">
          {errors.email?.message}
        </p>
        <input
          type="number"
          placeholder="your age"
          {...register("age")}
          className="w-[15rem] h-8 rounded p-2"
        />
        <p className="text-red-600 text-[12px]">{errors.age?.message}</p>
        <input
          type="password"
          placeholder="password"
          {...register("password")}
          className="w-[15rem] h-8 rounded p-2"
        />
        <p className="text-red-600 text-[12px]">{errors.password?.message}</p>
        <button type="submit" className="py-2 px-4 bg-green-600">
          Register
        </button>
      </form>
    </div>
  )
}

export default Form
