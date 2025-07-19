```vue
<template>
  <div class="w-full space-y-4">
    <div class="w-full flex flex-col sm:flex-row gap-4 justify-between">
      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="Qidirish..."
          class="pl-10"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Button variant="destructive" class="w-full sm:w-auto"
        >+ Foydalanuvchi</Button
      >
    </div>
    <div class="p-2 sm:p-4">
      <div class="overflow-x-auto bg-white rounded-xl shadow w-[83vw]">
        <table class="w-[83vw] text-sm text-left text-gray-700 hidden sm:table">
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
        <div class="space-y-3 sm:hidden p-3">
          <div
            v-for="(item, index) in tableData"
            :key="index"
            class="border rounded-lg p-4 hover:bg-gray-50"
          >
            <div class="flex justify-between items-start">
              <div>
                <div class="font-medium">
                  {{ index + 1 }}. {{ item.fullName }}
                </div>
                <div class="text-sm text-gray-500 mt-1 space-y-1">
                  <div class="flex items-center gap-2">
                    <Phone class="size-4" />
                    <span>{{ item.phone1 }}</span>
                  </div>
                  <div class="flex items-center gap-2" v-if="item.phone2">
                    <Phone class="size-4" />
                    <span>{{ item.phone2 }}</span>
                  </div>
                </div>
              </div>
              <button class="text-gray-500 hover:text-gray-700">⋮</button>
            </div>

            <div class="mt-3 pt-3 border-t text-sm">
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
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Search, Phone } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const token = localStorage.getItem('token');

const tableData = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('/user/getall', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = Array.isArray(response.data) ? response.data : response.data.data;

    tableData.value = users.map((user) => ({
      fullName: `${user.userFirstName} ${user.userLastName || ""}`.trim(),
      phone1: user.userNomer,
      phone2: null,
      createdAt: "—",
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
```
