"use client";

import { useState } from "react";

import dayjs from "dayjs";
import Datepicker from "react-tailwindcss-datepicker";
import Select from "react-tailwindcss-select";

import { Button, Card } from "@/components";

import { AddSectionModal } from "./component";

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];

const Page = () => {
  const [show, setShow] = useState(false);
  return (
    <Card className="!bg-white">
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <Datepicker
            startWeekOn="mon"
            disabledDates={[
              {
                startDate: new Date("1990-01-01"),
                endDate: dayjs(new Date()).subtract(1, "day").toDate(),
              },
              {
                startDate: dayjs(new Date()).add(1, "day").toDate(),
                endDate: dayjs("2050-12-31").toDate(),
              },
            ]}
            startFrom={new Date()}
            asSingle={true}
            useRange={false}
            displayFormat="MMMM DD, YYYY"
            placeholder="Select Date"
            value={{
              startDate: new Date(),
              endDate: new Date(),
            }}
            onChange={() => {}}
          />
          <Select
            placeholder="Select Section"
            primaryColor=""
            options={options}
            value={null}
            onChange={() => {}}
          />
        </div>
        <Button onClick={() => setShow(true)}>Add Section</Button>
      </div>
      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg border">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-4 p-4 bg-pink-500">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 bg-pink-500 text-white">
                  <td width={900}>Name</td>
                </th>
                <th scope="col" className="px-6 py-3 bg-pink-500 text-white">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 bg-pink-500 text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-cell py-2">
                <td>
                  <div className="pl-5">Male</div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="table-cell py-2">
                <td>
                  <div className="pl-5">Female</div>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="w-4 p-4" width={50}>
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google Pixel Phone
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  -
                </th>
                <td className="px-6 py-4" width={50} align="center">
                  <a
                    href="#"
                    className="font-medium text-violet-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <div className="flex">
            <div className="ml-auto">
              <Button>Confirm Attendance</Button>
            </div>
          </div>
        </div>
      </div>
      <AddSectionModal show={show} onClose={() => setShow(false)} />
    </Card>
  );
};

export default Page;
