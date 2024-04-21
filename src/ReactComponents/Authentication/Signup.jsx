import React from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export default function Signup() {
  return (
   
    <div className=" flex justify-center items-center h-screen w-screen bg-stone-300">
    <div className=" h-70 py-8 w-64 px-4 flex flex-col gap-3 outline outline-stone-500 outline-offset-8 rounded-lg">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Sign-up
      </h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password"/>
      <Button type="submit">Create</Button>
  </div>

  </div>
  )
}
