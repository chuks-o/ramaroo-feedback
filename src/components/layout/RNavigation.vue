<script setup lang="ts"></script>

<template>
  <!-- Navigation starts -->
  <nav
    class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white rounded-t-lg border-b border-gray-200 relative z-10"
  >
    <div class="hidden lg:flex w-full pr-6">
      <div class="w-1/2 h-full hidden lg:flex items-center pl-2 pr-24">
        <div class="relative w-full">
          <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-3 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#050038"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
          <input
            class="border border-r-light-grey focus:outline-none placeholder:text-sm text-sm text-gray-800 placeholder-r-dark-grey pl-10 w-[263px] py-2 rounded-[10px]"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div class="w-1/2 hidden lg:flex">
        <div class="w-full flex items-center pl-8 justify-end py-4">
          <div class="h-full flex items-center pr-4 justify-center border-r">
            <div
              class="flex items-center relative cursor-pointer"
              @click="dropdownHandler($event)"
            >
              <p class="text-gray-800 text-xs mx-1">blositive.nl</p>
              <div class="cursor-pointer text-gray-600">
                <svg
                  aria-haspopup="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600"
          >
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>

              <div
                class="w-2.5 h-2.5 rounded-full bg-r-blue border border-white absolute inset-x-0 top-0.5 mb-0 mr-0 m-auto"
              ></div>
            </div>
          </div>
          <div
            class="flex items-center relative cursor-pointer"
            @click="dropdownHandler($event)"
          >
            <div class="rounded-full">
              <ul
                class="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 hidden"
              >
                <li
                  class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span class="text-sm ml-2">My Profile</span>
                  </div>
                </li>
                <li
                  class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-logout"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                      />
                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                    <span class="text-sm ml-2">Sign out</span>
                  </div>
                </li>
              </ul>
              <div class="relative">
                <img
                  class="rounded-full h-10 w-10 object-cover"
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                  alt="avatar"
                />
              </div>
            </div>
            <p class="text-r-navy text-xs ml-2">Customer</p>
            <div class="cursor-pointer text-gray-600">
              <svg
                aria-haspopup="true"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-gray-600 mr-8 visible lg:hidden relative"
      @click="dropdownHandler($event)"
    >
      <ul
        class="p-2 w-40 border-r bg-white absolute rounded right-0 shadow mt-12 hidden"
      >
        <li
          class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <span class="text-sm ml-2">My Profile</span>
          </div>
        </li>
        <li
          class="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
              />
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
            <span class="text-sm ml-2">Sign out</span>
          </div>
        </li>
      </ul>
      <svg
        aria-label="Main Menu"
        aria-haspopup="true"
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-menu cursor-pointer"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
      </svg>
    </div>
  </nav>
  <!-- Navigation ends -->
</template>
