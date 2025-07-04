<template>
  <div class="w-full flex justify-between">
    <div class="relative w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Search..." class="pl-10" />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <Button variant="destructive" class="">+ Mijoz</Button>
  </div>

  <div class="p-4">
    <div class="overflow-x-auto bg-white rounded-xl shadow h-[800px]">
      <table class="min-w-full text-sm text-left text-gray-700 h-full">
        <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">№</th>
            <th class="px-4 py-3">Familiya va ismi</th>
            <th class="px-4 py-3">Telefon raqam 1</th>
            <th class="px-4 py-3">Telefon raqam 2</th>
            <th class="px-4 py-3">Yaratilgan vaqti</th>
            <th class="px-4 py-3">Izoh</th>
            <th class="px-4 py-3 text-right">...</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in tableData"
            :key="index"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-4 py-3">{{ index + 1 }}</td>
            <td class="px-4 py-3">{{ item.fullName }}</td>
            <td class="px-4 py-3">{{ item.phone1 }}</td>
            <td class="px-4 py-3">{{ item.phone2 || "—" }}</td>
            <td class="px-4 py-3">{{ item.createdAt }}</td>
            <td class="px-4 py-3 truncate max-w-xs">{{ item.note }}</td>
            <td class="px-4 py-3 text-right">⋮</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const tableData = Array.from({ length: 13 }, () => ({
  fullName: "Odilxon Tursunov",
  phone1: "+998 91 088 29 07",
  phone2: "+998 91 088 29 07",
  createdAt: "21.02.2023",
  note: "Законом предусмотрено предоставление права на бесплатное пользование городским транспортом...",
}));
</script>

<style lang="scss" scoped></style>
