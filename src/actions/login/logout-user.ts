"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import createClient from "@/utils/supabase/server";

const logOutUser = async (): Promise<{ ok: boolean; message: string }> => {
  const supabase = createClient();
  try {
    await supabase.auth.signOut();

    revalidatePath("/login");

    return {
      ok: true,
      message: "Logout successfully",
    };
  } catch (error) {
    return {
      ok: false,
      message: error as string,
    };
  }
};

export default logOutUser;
