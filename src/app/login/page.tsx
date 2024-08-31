import { Button, Card, Input } from "@/components";

const Page = () => {
  return (
    <div className="login-bg h-screen w-screen flex items-center justify-center">
      <div className="w-[450px]">
        <Card className="p-8 !shadow-pink-500">
          <div className="text-lg mb-4 text-center">Welcome, Login</div>
          <form>
            <Input label="Email" id="email" name="email" />
            <Input label="Password" id="password" name="password" />
            <Button className="mt-4 w-full">Login</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Page;
