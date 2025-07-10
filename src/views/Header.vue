<template>
  <header
    class="flex justify-between items-center bg-white shadow-sm p-4 border-b-1 border-gray-400"
  >
    <h1 class="text-2xl font-semibold text-gray-800">{{ route.name }}</h1>
    <div class="flex items-center">
      <div class="relative mr-4"></div>
      <div class="flex items-center"></div>
    </div>
    <div>
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline" class="sm:hidden"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M3.75 2A1.75 1.75 0 0 0 2 3.75v1c0 .49.201.932.525 1.25C2.201 6.318 2 6.76 2 7.25v1.5c0 .49.201.932.525 1.25c-.324.318-.525.76-.525 1.25v1c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-1c0-.49-.201-.932-.525-1.25c.324-.318.525-.76.525-1.25v-1.5c0-.49-.201-.932-.525-1.25c.324-.318.525-.76.525-1.25v-1A1.75 1.75 0 0 0 12.25 2zM3 11.25a.75.75 0 0 1 .75-.75H5V13H3.75a.75.75 0 0 1-.75-.75zM6 13v-2.5h6.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75zm0-3.5v-3h6.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75zm0-4V3h6.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75zM5 3v2.5H3.75A.75.75 0 0 1 3 4.75v-1A.75.75 0 0 1 3.75 3zm0 3.5v3H3.75A.75.75 0 0 1 3 8.75v-1.5a.75.75 0 0 1 .75-.75z"
              /></svg
          ></Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div class="w-64 bg-white p-4 flex flex-col">
            <div class="flex items-center mb-6">
              <span class="text-xl font-semibold text-gray-800">Logolosum</span>
            </div>
            <nav class="flex-1">
              <ul>
                <li class="mb-2">
                  <RouterLink
                    to="DataTable"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 hover:text-white transition-all duration-150"
                  >
                    <span class="mr-2"
                      ><svg
                        width="14.833313"
                        height="18.166656"
                        viewBox="0 0 14.8333 18.1667"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M9.08 0.97L9.08 4.41C9.08 4.88 9.08 5.11 9.17 5.29C9.25 5.45 9.38 5.57 9.53 5.65C9.71 5.75 9.94 5.75 10.41 5.75L13.85 5.75M4.75 17.41C3.34 17.41 2.64 17.41 2.11 17.14C1.64 16.9 1.26 16.52 1.02 16.05C0.75 15.51 0.75 14.81 0.75 13.41L0.75 4.75C0.75 3.34 0.75 2.64 1.02 2.11C1.26 1.64 1.64 1.26 2.11 1.02C2.64 0.75 3.34 0.75 4.75 0.75L7.42 0.75C8.03 0.75 8.34 0.75 8.63 0.81C8.88 0.88 9.13 0.98 9.35 1.11C9.6 1.27 9.82 1.48 10.25 1.92L12.91 4.57C13.34 5.01 13.56 5.22 13.71 5.47C13.85 5.7 13.95 5.94 14.01 6.2C14.08 6.48 14.08 6.79 14.08 7.4L14.08 13.41C14.08 14.81 14.08 15.51 13.81 16.05C13.57 16.52 13.18 16.9 12.71 17.14C12.18 17.41 11.48 17.41 10.08 17.41L4.75 17.41ZM9.08 13.25L4.08 13.25M10.75 9.91L4.08 9.91"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Hisobotlar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Mahsulotlar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2 hover"
                      ><svg
                        width="16.500000"
                        height="17.927399"
                        viewBox="0 0 16.5 17.9274"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M15.33 5.02L8.25 8.96L1.16 5.02M8.25 8.96L8.25 16.88M15.06 4.41C15.31 4.55 15.43 4.62 15.52 4.72C15.6 4.8 15.67 4.91 15.7 5.02C15.75 5.15 15.75 5.29 15.75 5.58L15.75 12.34C15.75 12.63 15.75 12.77 15.7 12.9C15.67 13.01 15.6 13.11 15.52 13.2C15.43 13.3 15.31 13.37 15.06 13.51L8.89 16.93C8.66 17.06 8.54 17.13 8.41 17.16C8.3 17.18 8.19 17.18 8.08 17.16C7.95 17.13 7.83 17.06 7.6 16.93L1.43 13.51C1.18 13.37 1.06 13.3 0.97 13.2C0.89 13.11 0.82 13.01 0.79 12.9C0.75 12.77 0.75 12.63 0.75 12.34L0.75 5.58C0.75 5.29 0.75 5.15 0.79 5.02C0.82 4.91 0.89 4.8 0.97 4.72C1.06 4.62 1.18 4.55 1.43 4.41L7.6 0.99C7.83 0.85 7.95 0.79 8.08 0.76C8.19 0.74 8.3 0.74 8.41 0.76C8.54 0.79 8.66 0.85 8.89 0.99L15.06 4.41Z"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Mahsulotlar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Mijozlar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="18.166687"
                        height="18.166656"
                        viewBox="0 0 18.1667 18.1667"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M2.41 17.26C2.41 16.59 2.42 16.23 2.48 15.93C2.74 14.61 3.77 13.57 5.09 13.31C5.42 13.25 5.8 13.25 6.58 13.25L11.58 13.25C12.35 13.25 12.74 13.25 13.06 13.31C14.38 13.57 15.42 14.61 15.68 15.93C15.74 16.23 15.74 16.59 15.75 17.26M9.08 10.33C7.24 10.33 5.75 8.84 5.75 7C5.75 5.15 7.24 3.66 9.08 3.66C10.92 3.66 12.41 5.15 12.41 7C12.41 8.84 10.92 10.33 9.08 10.33ZM13.41 0.75C14.81 0.75 15.51 0.75 16.05 1.02C16.52 1.26 16.9 1.64 17.14 2.11C17.41 2.64 17.41 3.34 17.41 4.75L17.41 13.41C17.41 14.81 17.41 15.51 17.14 16.05C16.9 16.52 16.52 16.9 16.05 17.14C15.95 17.19 15.85 17.23 15.75 17.26C15.24 17.41 14.56 17.41 13.41 17.41L4.75 17.41C3.59 17.41 2.91 17.41 2.41 17.26C2.3 17.23 2.2 17.19 2.11 17.14C1.64 16.9 1.26 16.52 1.02 16.05C0.75 15.51 0.75 14.81 0.75 13.41L0.75 4.75C0.75 3.34 0.75 2.64 1.02 2.11C1.26 1.64 1.64 1.26 2.11 1.02C2.64 0.75 3.34 0.75 4.75 0.75L13.41 0.75Z"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Mijozlar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Foydalanuvchilar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="14.833313"
                        height="16.500000"
                        viewBox="0 0 14.8333 16.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M0.75 15.75C0.75 14.58 0.75 14 0.89 13.53C1.21 12.46 2.05 11.63 3.11 11.31C3.58 11.16 4.17 11.16 5.33 11.16L9.5 11.16C10.66 11.16 11.24 11.16 11.71 11.31C12.78 11.63 13.61 12.46 13.93 13.53C14.08 14 14.08 14.58 14.08 15.75M7.41 8.25C5.34 8.25 3.66 6.57 3.66 4.5C3.66 2.42 5.34 0.75 7.41 0.75C9.48 0.75 11.16 2.42 11.16 4.5C11.16 6.57 9.48 8.25 7.41 8.25Z"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Foydalanuvchilar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="StandartOlchov"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="17.824463"
                        height="17.824432"
                        viewBox="0 0 17.8245 17.8244"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M16.77 4.27C16.93 4.43 17.02 4.52 17.05 4.61C17.07 4.7 17.07 4.79 17.05 4.87C17.02 4.96 16.93 5.05 16.77 5.21L5.21 16.77C5.05 16.93 4.96 17.02 4.87 17.05C4.79 17.07 4.7 17.07 4.61 17.05C4.52 17.02 4.43 16.93 4.27 16.77L1.05 13.55C0.88 13.38 0.8 13.3 0.77 13.2C0.74 13.12 0.74 13.03 0.77 12.95C0.8 12.85 0.88 12.77 1.05 12.6L12.6 1.05C12.77 0.88 12.85 0.8 12.95 0.77C13.03 0.74 13.12 0.74 13.2 0.77C13.3 0.8 13.38 0.88 13.55 1.05L16.77 4.27ZM10.99 3.49L12.24 4.74M8.49 5.99L9.74 7.24M5.99 8.49L7.24 9.74M3.49 10.99L4.74 12.24"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Standart o'lchovlar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Valyutalar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="18.166687"
                        height="14.833344"
                        viewBox="0 0 18.1667 14.8333"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M17.41 11.09C17.41 11.84 17.41 12.22 17.3 12.42C17.18 12.62 17.07 12.71 16.85 12.78C16.64 12.86 16.21 12.78 15.36 12.61C14.75 12.5 14.04 12.41 13.25 12.41C10.75 12.41 8.25 14.08 4.91 14.08C2.87 14.08 1.77 13.77 1.22 13.52C1.15 13.49 1.11 13.48 1 13.37C0.94 13.31 0.82 13.14 0.79 13.05C0.75 12.92 0.75 12.84 0.75 12.69L0.75 3.74C0.75 2.98 0.75 2.6 0.86 2.41C0.97 2.21 1.09 2.12 1.3 2.04C1.51 1.96 1.94 2.05 2.8 2.21C3.4 2.33 4.11 2.41 4.91 2.41C7.41 2.41 9.91 0.75 13.25 0.75C15.29 0.75 16.39 1.06 16.94 1.3C17.01 1.33 17.05 1.35 17.15 1.45C17.22 1.51 17.33 1.69 17.36 1.77C17.41 1.91 17.41 1.98 17.41 2.13L17.41 11.09ZM9.08 9.5C7.93 9.5 7 8.56 7 7.41C7 6.26 7.93 5.33 9.08 5.33C10.23 5.33 11.16 6.26 11.16 7.41C11.16 8.56 10.23 9.5 9.08 9.5ZM4.08 6.58L4.08 9.91M14.08 4.91L14.08 8.25"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Valyutalar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Kategoriyalar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="18.166687"
                        height="16.500000"
                        viewBox="0 0 18.1667 16.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M0.75 4.08L13.41 4.08C14.81 4.08 15.51 4.08 16.05 4.35C16.52 4.59 16.9 4.97 17.14 5.44C17.41 5.98 17.41 6.68 17.41 8.08L17.41 11.75C17.41 13.15 17.41 13.85 17.14 14.38C16.9 14.85 16.52 15.23 16.05 15.47C15.51 15.75 14.81 15.75 13.41 15.75L4.75 15.75C3.34 15.75 2.64 15.75 2.11 15.47C1.64 15.23 1.26 14.85 1.02 14.38C0.75 13.85 0.75 13.15 0.75 11.75L0.75 4.08L0.75 3.41C0.75 2.48 0.75 2.01 0.93 1.66C1.09 1.34 1.34 1.09 1.66 0.93C2.01 0.75 2.48 0.75 3.41 0.75L6.6 0.75C7.2 0.75 7.49 0.75 7.76 0.84C7.99 0.92 8.2 1.05 8.38 1.22C8.58 1.42 8.71 1.68 8.98 2.22L9.91 4.08"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Kategoriyalar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Taminotchilar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="15.428772"
                        height="16.500000"
                        viewBox="0 0 15.4288 16.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M7.71 10.75C10.35 10.75 12.7 12.02 14.2 14C14.52 14.43 14.68 14.64 14.67 14.93C14.67 15.15 14.53 15.43 14.35 15.57C14.13 15.75 13.81 15.75 13.19 15.75L2.23 15.75C1.6 15.75 1.29 15.75 1.06 15.57C0.89 15.43 0.75 15.15 0.75 14.93C0.74 14.64 0.9 14.43 1.22 14C2.72 12.02 5.07 10.75 7.71 10.75ZM7.71 8.25C5.64 8.25 3.96 6.57 3.96 4.5C3.96 2.42 5.64 0.75 7.71 0.75C9.78 0.75 11.46 2.42 11.46 4.5C11.46 6.57 9.78 8.25 7.71 8.25Z"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Taminotchilar
                  </RouterLink>
                </li>
                <li class="mb-2">
                  <RouterLink
                    to="Omborlar"
                    class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-indigo-500 transition-all duration-150 hover:text-white"
                  >
                    <span class="mr-2"
                      ><svg
                        width="16.500000"
                        height="16.500000"
                        viewBox="0 0 16.5 16.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Icon"
                          d="M5.75 15.75L5.75 11.25C5.75 10.78 5.75 10.54 5.84 10.37C5.92 10.21 6.04 10.08 6.2 10C6.38 9.91 6.61 9.91 7.08 9.91L9.41 9.91C9.88 9.91 10.11 9.91 10.29 10C10.45 10.08 10.57 10.21 10.65 10.37C10.75 10.54 10.75 10.78 10.75 11.25L10.75 15.75M15.75 4.08C15.75 5.46 14.63 6.58 13.25 6.58C11.86 6.58 10.75 5.46 10.75 4.08C10.75 5.46 9.63 6.58 8.25 6.58C6.86 6.58 5.75 5.46 5.75 4.08C5.75 5.46 4.63 6.58 3.25 6.58C1.86 6.58 0.75 5.46 0.75 4.08M13.08 0.75C14.01 0.75 14.48 0.75 14.84 0.93C15.15 1.09 15.4 1.34 15.56 1.66C15.75 2.01 15.75 2.48 15.75 3.41L15.75 13.08C15.75 14.01 15.75 14.48 15.56 14.84C15.4 15.15 15.15 15.4 14.84 15.56C14.48 15.75 14.01 15.75 13.08 15.75L3.41 15.75C2.48 15.75 2.01 15.75 1.66 15.56C1.34 15.4 1.09 15.15 0.93 14.84C0.75 14.48 0.75 14.01 0.75 13.08L0.75 3.41C0.75 2.48 0.75 2.01 0.93 1.66C1.09 1.34 1.34 1.09 1.66 0.93C2.01 0.75 2.48 0.75 3.41 0.75L13.08 0.75Z"
                          stroke="currentColor"
                          stroke-opacity="1.000000"
                          stroke-width="1.500000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                    Omborlar
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
    <Sheet class="">
      <SheetTrigger class="cursor-pointer"
        ><img
          src="../components/user.svg"
          alt=""
          class="hover:bg-white bg-white"
      /></SheetTrigger>
      <SheetContent class="items-center flex">
        <SheetHeader class="w-32 max-sm:w-24">
          <img
            src="../components/user.svg"
            alt=""
            class="hover:bg-white bg-white"
        /></SheetHeader>
        <div
          class="flex gap-2 px-4 py-2 bg-gray-200 w-6/7 rounded-md hover:bg-indigo-500 transition-all duration-150 hover:text-white cursor-pointer active:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
            /></svg
          >Edit Profile
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button
              variant="outline"
              class="flex gap-2 px-4 py-2 bg-gray-200 w-6/7 rounded-md hover:bg-indigo-500 transition-all duration-150 hover:text-white cursor-pointer active:bg-indigo-700 justify-start text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                class="text-xl"
              >
                <path
                  fill="currentColor"
                  d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                />
              </svg>
              Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <ToggleButton
              class="hover:bg-indigo-500 active:bg-indigo-700 transition-all duration-150 w-full rounded-sm hover:text-white"
            />
          </DropdownMenuContent>
        </DropdownMenu>

        <div
          class="flex gap-2 px-4 py-2 bg-gray-200 w-6/7 rounded-md hover:bg-indigo-500 transition-all duration-150 hover:text-white cursor-pointer active:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            />
          </svg>
          Help
        </div>
        <RouterLink to="LogIn">
          <Button
            class="max-sm:absolute max-sm:bottom-4 max-sm:right-5 flex gap-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-red-500 transition-all duration-150 hover:text-white cursor-pointer active:bg-red-700 w-full text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
              /></svg
            >LogOut
          </Button>
        </RouterLink>
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRoute } from "vue-router";
const route = useRoute();
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ToggleButton from "@/components/ui/ToggleButton.vue";
const position = ref("bottom");
</script>
