import React from "react";

export default function Footer({ visitors, reVisitors }) {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="block text-md text-gray-500 text-center dark:text-gray-400">
          Total Visitors: {visitors}     {"   "}
          Total Re-Visitors: {reVisitors}
        </span>
      </div>
    </footer>
  );
}
