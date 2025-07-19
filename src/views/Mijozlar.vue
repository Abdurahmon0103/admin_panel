<template>
  <div class="space-y-4 p-4">
    <!-- Search va Qo‘shish tugmasi -->
    <div
      class="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
    >
      <div class="relative w-full sm:max-w-md">
        <Input
          id="search"
          type="text"
          placeholder="Qidirish..."
          class="pl-10 w-full"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-5 text-muted-foreground" />
        </span>
      </div>
      <Button variant="destructive" class="w-full sm:w-auto">
        + Mijoz qo'shish
      </Button>
    </div>

    <!-- Jadval -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <!-- Desktop jadval -->
      <table class="hidden sm:table min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              №
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Familiya va ismi
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Telefon raqam 1
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Telefon raqam 2
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Yaratilgan vaqti
            </th>
            <th
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Izoh
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(item, index) in tableData"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-3 text-sm">{{ index + 1 }}</td>
            <td class="px-4 py-3 text-sm font-medium text-gray-900">
              {{ item.fullName }}
            </td>
            <td class="px-4 py-3 text-sm text-gray-500">{{ item.phone1 }}</td>
            <td class="px-4 py-3 text-sm text-gray-500">{{ item.phone2 }}</td>
            <td class="px-4 py-3 text-sm text-gray-500">
              {{ item.createdAt }}
            </td>
            <td class="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
              {{ item.note }}
            </td>
            <td class="px-4 py-3 text-sm text-right">
              <DropdownMenu>
                <DropdownMenuTrigger class="text-gray-500 hover:text-gray-700"
                  >⋮</DropdownMenuTrigger
                >
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Tahrirlash</DropdownMenuItem>
                  <DropdownMenuItem>Ko'rish</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="text-red-600"
                    >O'chirish</DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Mobil kartalar -->
      <div class="sm:hidden space-y-4 p-4">
        <div
          v-for="(item, index) in tableData"
          :key="index"
          class="border rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-medium">{{ index + 1 }}. {{ item.fullName }}</h3>
              <div class="flex items-center gap-2 mt-1 text-sm text-gray-500">
                <Phone class="size-4" />
                <span>{{ item.phone1 }}</span>
              </div>
              <div
                v-if="item.phone2 && item.phone2 !== '—'"
                class="flex items-center gap-2 mt-1 text-sm text-gray-500"
              >
                <Phone class="size-4" />
                <span>{{ item.phone2 }}</span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger class="text-gray-500 hover:text-gray-700"
                >⋮</DropdownMenuTrigger
              >
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Tahrirlash</DropdownMenuItem>
                <DropdownMenuItem>Ko'rish</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="text-red-600"
                  >O'chirish</DropdownMenuItem
                >
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div class="mt-4 pt-4 border-t text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500">Yaratilgan vaqti:</span>
              <span>{{ item.createdAt }}</span>
            </div>
            <div class="mt-2">
              <div class="text-gray-500">Izoh:</div>
              <div class="line-clamp-2">{{ item.note }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { Search, Phone } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tokenni localStorage'dan olish
const token = localStorage.getItem("token");

// Jadval ma'lumotlari
const tableData = ref<
  {
    fullName: string;
    phone1: string;
    phone2: string;
    createdAt: string;
    note: string;
  }[]
>([]);

// Ma'lumotlarni yuklash
const fetchUsers = async () => {
  try {
    const response = await axios.get("/user/getall", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = Array.isArray(response.data)
      ? response.data
      : response.data.data;

    tableData.value = users.map((user) => ({
      fullName: `${user.userFirstName} ${user.userLastName || ""}`.trim(),
      phone1: user.userNomer,
      phone2: user.userEmail || "—",
      createdAt: user.createdAt?.slice(0, 10) || "—",
      note: user.userDescription || "—",
    }));
  } catch (error) {
    console.error("Foydalanuvchilarni olishda xatolik:", error);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped></style>
x``
