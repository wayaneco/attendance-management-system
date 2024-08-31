"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import createClient from "@/utils/supabase/client";

import logOutUser from "@/actions/login/logout-user";

import * as Profile from "@/assets/images/profile.png";

const SIDEBAR_ITEMS = [
  {
    path: "/attendance",
    label: "Attendance",
  },
  // {
  //   path: "/schedule",
  //   label: "Schedule",
  // },
  {
    path: "/sections",
    label: "Sections",
  },
  {
    path: "/class-record",
    label: "Class Record",
  },
  {
    path: "/generate-report",
    label: "Generate Report ",
  },
];

export const Sidebar = () => {
  const supabase = createClient();
  const router = useRouter();

  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    const { data: authSubscription } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (!session) {
          router.replace("/login");
        }
      }
    );

    return () => authSubscription.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`bg-white h-screen transition-[width] ${
        isCollapse ? "w-[70px]" : "w-[300px]"
      }`}
    >
      <div className="flex flex-col shadow-md h-full">
        <div className="flex flex-col items-center p-8">
          <div className="relative w-32 h-32">
            <Image alt="profile" src={Profile} fill />
          </div>
          <div className="mt-2 text-lg text-gray-700">Liza Cabansay Eco</div>
          <div className="text-sm text-gray-600">Teacher II</div>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex-1 flex flex-col gap-y-px">
          {SIDEBAR_ITEMS.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              path={item.path}
              isActive={item?.path === pathname}
            />
          ))}
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mb-2">
          <div className="mx-4">
            <div
              className="w-full p-5 rounded-md cursor-pointer transition-colors hover:bg-pink-500 hover:text-gray-50 bg-white text-gray-700"
              onClick={async () => {
                try {
                  const response = await logOutUser();

                  if (!response.ok) throw response?.message;

                  router.replace("/login");
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <div className="flex items-center">
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({
  label,
  isActive,
  path,
}: {
  icon?: React.ReactNode;
  label: string;
  isActive: boolean;
  path: string;
}) => {
  return (
    <Link href={path}>
      <div className="mx-4">
        <div
          className={`w-full p-5 rounded-md cursor-pointer transition-colors hover:bg-pink-500 hover:text-gray-50 ${
            isActive ? "bg-pink-500 text-gray-50" : "bg-white text-gray-700"
          }`}
        >
          <div className="flex items-center">
            <span>{label}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
