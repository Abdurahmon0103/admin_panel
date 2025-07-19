```vue
<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
      <div class="relative w-full">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Omborxona" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="omborxona1"> Omborxona 1 </SelectItem>
              <SelectItem value="omborxona2"> Omborxona 2 </SelectItem>
              <SelectItem value="omborxona3"> Omborxona 3 </SelectItem>
              <SelectItem value="omborxona4"> Omborxona 4 </SelectItem>
              <SelectItem value="omborxona5"> Omborxona 5 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="relative w-full">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Ta'minotchi" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="taminotchi1"> Ta'minotchi 1 </SelectItem>
              <SelectItem value="taminotchi2"> Ta'minotchi 2 </SelectItem>
              <SelectItem value="taminotchi3"> Ta'minotchi 3 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="w-full">
        <Input type="text" placeholder="Kod" />
      </div>
      <div class="w-full">
        <Input type="text" placeholder="Nomi" />
      </div>
      <div class="flex gap-2 w-full">
        <Button variant="outline" class="flex-1"> Tozalash </Button>
        <Button variant="outline" class="flex-1"> Qidirish </Button>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row gap-4 mb-6 justify-between items-start md:items-center"
    >
      <div class="relative w-full md:max-w-md">
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

      <Dialog>
        <DialogTrigger as-child>
          <Button variant="destructive" class="w-full md:w-auto">
            + Inventarizatsiya
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Inventarizatsiya</DialogTitle>
            <DialogDescription> Yangi mahsulot qo'shish </DialogDescription>
          </DialogHeader>

          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <Label>Standart size <span class="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="size1">Size 1</SelectItem>
                    <SelectItem value="size2">Size 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="space-y-1">
                <Label>Bo'yi <span class="text-red-500">*</span></Label>
                <Input type="text" />
              </div>

              <div class="space-y-1">
                <Label>Valyuta <span class="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UZS">UZS</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="space-y-1">
                <Label>Ombor <span class="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ombor1">Ombor 1</SelectItem>
                    <SelectItem value="ombor2">Ombor 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="space-y-1">
                <Label>Kategoriya <span class="text-red-500">*</span></Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat1">Kategoriya 1</SelectItem>
                    <SelectItem value="cat2">Kategoriya 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div class="space-y-1">
                <Label>Miqdor <span class="text-red-500">*</span></Label>
                <Input type="number" />
              </div>

              <div class="space-y-1">
                <Label>Tan narxi</Label>
                <Input type="text" />
              </div>

              <div class="space-y-1">
                <Label>Sotuv narxi</Label>
                <Input type="text" />
              </div>
            </div>

            <div class="space-y-1">
              <Label>Izoh</Label>
              <Textarea class="min-h-[100px]" />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline">Yopish</Button>
            <Button type="submit" variant="destructive">Saqlash</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div class="overflow-x-auto shadow-sm rounded-lg border">
      <table class="w-full hidden md:table bg-white text-sm">
        <thead class="bg-gray-50">
          <tr class="border-b">
            <th class="py-3 px-4 text-left font-medium text-gray-500">№</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">
              Omborxona
            </th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Tovar</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Kod</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Eni</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Bo'yi</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Soni</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">
              Qoldiq
            </th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Jami</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">
              Valyuta
            </th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">Narx</th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">
              Sotuv narxi
            </th>
            <th class="py-3 px-4 text-left font-medium text-gray-500">
              Umumiy Narx
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in tableData"
            :key="item.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="py-3 px-4">{{ index + 1 }}</td>
            <td class="py-3 px-4">{{ item.warehouse_warehouseName }}</td>
            <td class="py-3 px-4 font-medium">
              {{ item.tovar }}
            </td>
            <td class="py-3 px-4">{{ item.code }}</td>
            <td class="py-3 px-4">{{ item.eni }}</td>
            <td class="py-3 px-4">{{ item.boyi }}</td>
            <td class="py-3 px-4">{{ item.soni }}</td>
            <td class="py-3 px-4">{{ item.qoldiq }}</td>
            <td class="py-3 px-4">{{ item.jami }}</td>
            <td class="py-3 px-4">
              <span
                :class="currencyClass(item.valyuta)"
                class="px-2 py-1 rounded-full text-xs"
              >
                {{ item.valyuta }}
              </span>
            </td>
            <td class="py-3 px-4">
              {{ formatCurrency(item.narx, item.valyuta) }}
            </td>
            <td class="py-3 px-4">
              {{ formatCurrency(item.sotuvNarxi, item.valyuta) }}
            </td>
            <td class="py-3 px-4 font-semibold">
              {{ formatCurrency(item.umumiyNarx, item.valyuta) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="md:hidden space-y-4 p-4">
        <div
          v-for="(item, index) in tableData"
          :key="item.id"
          class="border rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-medium">{{ index + 1 }}. {{ item.tovar }}</h3>
              <p class="text-sm text-gray-500">
                {{ item.warehouse_warehouseName }}
              </p>
            </div>
            <span
              :class="currencyClass(item.valyuta)"
              class="px-2 py-1 rounded-full text-xs"
            >
              {{ item.valyuta }}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p class="text-gray-500">Kod</p>
              <p>{{ item.code }}</p>
            </div>
            <div>
              <p class="text-gray-500">O'lcham</p>
              <p>{{ item.eni }} × {{ item.boyi }}</p>
            </div>
            <div>
              <p class="text-gray-500">Soni</p>
              <p>{{ formatNumber(item.soni) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Qoldiq</p>
              <p>{{ formatNumber(item.qoldiq) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Narx</p>
              <p>{{ formatCurrency(item.narx, item.valyuta) }}</p>
            </div>
            <div>
              <p class="text-gray-500">Sotuv narxi</p>
              <p>{{ formatCurrency(item.sotuvNarxi, item.valyuta) }}</p>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t">
            <p class="text-gray-500">Umumiy narx</p>
            <p class="font-semibold">
              {{ formatCurrency(item.umumiyNarx, item.valyuta) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Search } from "lucide-vue-next";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const token = localStorage.getItem("token");
const tableData = ref([]);

const safeNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
};

const fetchData = async () => {
  try {
    const response = await axios.get("/carpet/getall", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = Array.isArray(response.data)
      ? response.data
      : response.data.data;

    tableData.value = data.map((item) => ({
      id: item.id || Math.random().toString(36).substr(2, 9),
      tovar: item.carpet_carpetDescription || "Noma'lum",
      code: item.size_sizeCode || "-",
      eni: safeNumber(item.carpet_height),
      boyi: safeNumber(item.size_sizeWidth),
      soni: safeNumber(item.carpet_length),
      qoldiq: safeNumber(item.qoldiq),
      jami: safeNumber(item.jami),
      valyuta: item.currency_currencyName || "UZS",
      narx: safeNumber(item.carpet_price),
      sotuvNarxi: safeNumber(item.carpet_price),
      umumiyNarx: safeNumber(item.umumiyNarx),
      warehouse_warehouseName: item.warehouse_warehouseName || "-",
    }));
  } catch (error) {
    console.error("Ma'lumotlarni olishda xatolik:", error);
    tableData.value = [];
  }
};

onMounted(fetchData);

const formatCurrency = (amount, currency = "UZS") => {
  const num = Number(amount);
  return `${isNaN(num) ? 0 : num.toLocaleString()} ${currency}`;
};

const formatNumber = (num) => {
  const n = Number(num);
  return isNaN(n) ? "0" : n.toLocaleString("fr-FR");
};

const currencyClass = (currency) => {
  return currency === "UZS"
    ? "bg-blue-100 text-blue-800"
    : "bg-green-100 text-green-800";
};
</script>

<style scoped></style>
```
