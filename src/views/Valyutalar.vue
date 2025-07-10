<template>
  <div>
    <div class="w-full flex justify-between mb-4">
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button variant="destructive">+ O'lchov</Button>
    </div>
    <div
      class="grid grid-cols-3 gap-4 max-sm:flex max-sm:flex-col max-sm:w-full"
    >
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="font-bold text-md mb-4 border border-gray-300 shadow-xl rounded-xl flex py-4 gap-2 px-3"
      >
        <div>
          <h3>{{ item.title }}</h3>

          <p class="bg-blue-50 rounded-full">{{ item.name }}</p>
        </div>
        <p>{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const cards = ref([
  {
    title: "AQSH Do'llari",
    name: "USD",
    value: "1 2611 so'm",
  },
  {
    title: "Rossiya Rubli",
    name: "RUB",
    value: "133,82 so'm",
  },
  {
    title: "Uzbekistan So'mi",
    name: "UZS",
    value: "1 so'm",
  },
]);
</script>

<style lang="scss" scoped></style>
