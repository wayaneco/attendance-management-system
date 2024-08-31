import { redirect } from "next/navigation";

import createClient from "@/utils/supabase/server";
import logInUser from "@/actions/login/login-user";
import { Card } from "@/components";

import { LoginForm } from "./component";

const Page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/");

  return (
    <section className="login-bg h-screen w-screen flex items-center justify-center">
      <div className="w-[450px]">
        <Card className="p-8 !shadow-pink-500">
          <div className="text-lg mb-4 text-center">Welcome, Login</div>
          <LoginForm logInUser={logInUser} />
        </Card>
      </div>
    </section>
  );
};

export default Page;
