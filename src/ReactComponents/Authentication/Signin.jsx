import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Signin() {
  return (
    <div className=" h-52 w-60 flex flex-col gap-3">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Login
      </h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="password" />
      <Button type="submit">Login</Button>
    </div>
  );
}
