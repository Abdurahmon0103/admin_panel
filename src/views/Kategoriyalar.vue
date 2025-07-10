<template>
  <div class="grid grid-cols-4 grid-rows-3 gap-3">
    <div
      v-for="n in 12"
      :key="12"
      class="flex flex-col w-[400px] px-2 py-2 rounded-lg bg-white"
    >
      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <div>
            <p>REFLEX GREY Gilamlari</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
              />
            </svg>
          </div>
        </div>
        <div class="border border-gray-200 px-2 py-2 rounded-md bg-gray-100">
          <p class="">Uzgoz MCHJ</p>
          <p>Bu yerga izoh taminotchi haqida izoh kiritiladi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
