import React from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export default function Signup() {
  return (
    <div className=" h-60 w-60 flex flex-col gap-3">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Sign-up
      </h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password"/>
      <Button type="submit">Create</Button>
    </div>
  )
}
