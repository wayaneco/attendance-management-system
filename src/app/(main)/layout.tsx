import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import createClient from "@/utils/supabase/server";

import { Sidebar } from "@/components";

const Layout = async ({ children }: PropsWithChildren) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="relative flex-1 h-screen overflow-auto">
          <div className="sticky top-0 border-l bg-white shadow-md h-24 w-full">
            <div className="ml-5 flex items-center h-full">
              <p className="font-medium">Attendance</p>
            </div>
          </div>
          <div className="overflow-auto">
            <div className="max-h-screen">
              <div className="m-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
