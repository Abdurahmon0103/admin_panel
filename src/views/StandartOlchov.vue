<template>
  <div class="flex flex-col gap-4">
    <div class="w-full flex justify-between">
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button variant="destructive" class="">+ O'lchov</Button>
    </div>
    <div class="grid grid-cols-4 grid-rows-3 gap-4">
      <div v-for="n in 12" :key="12" class="">
        <a
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <span
            class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex gap-4"
          >
            120 metr
            <p class="text-sm bg-gray-100 rounded-full px-1 py-1 font-medium">
              #NN12H33
            </p>
          </span>
          <p class="font-normal text-gray-400 dark:text-gray-400">
            Rangini berib ketish uchun
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
</script>

<style lang="scss" scoped></style>
