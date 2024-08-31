"use server";

import createClient from "@/utils/supabase/server";

type PayloadType = {
  email: string;
  password: string;
};

const logInUser = async (
  payload: PayloadType
): Promise<{ ok: boolean; message: string }> => {
  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: payload?.email,
      password: payload?.password,
    });

    if (error) throw error?.message;

    return {
      ok: true,
      message: "Login Successfully",
    };
  } catch (error) {
    return {
      ok: false,
      message: error as string,
    };
  }
};

export default logInUser;
