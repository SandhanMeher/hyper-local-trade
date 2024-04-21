import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signin() {
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-stone-300">
      <div className=" h-60 py-8 w-64 px-4 flex flex-col gap-3 outline outline-stone-500 outline-offset-8 rounded-lg">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Login
      </h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="password" />
      <Button type="submit">Login</Button>
    </div>

    </div>
  );
}
