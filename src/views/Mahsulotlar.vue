<template>
  <div class="p-4">
    <!-- Filter Controls - Stacked on mobile -->
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

    <!-- Search and Action Bar -->
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
              <!-- Standard Size -->
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

              <!-- Height -->
              <div class="space-y-1">
                <Label>Boyi <span class="text-red-500">*</span></Label>
                <Input type="text" />
              </div>

              <!-- Currency -->
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

              <!-- Warehouse -->
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

              <!-- Category -->
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

              <!-- Quantity -->
              <div class="space-y-1">
                <Label>Miqdor <span class="text-red-500">*</span></Label>
                <Input type="number" />
              </div>

              <!-- Purchase Price -->
              <div class="space-y-1">
                <Label>Tan narxi</Label>
                <Input type="text" />
              </div>

              <!-- Sale Price -->
              <div class="space-y-1">
                <Label>Sotuv narxi</Label>
                <Input type="text" />
              </div>
            </div>

            <!-- Comment -->
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

    <!-- Responsive Table -->
    <div class="overflow-x-auto shadow-sm rounded-lg border">
      <!-- Desktop Table -->
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
            <td class="py-3 px-4">{{ item.omborxona }}</td>
            <td class="py-3 px-4 font-medium">{{ item.tovar }}</td>
            <td class="py-3 px-4">{{ item.code }}</td>
            <td class="py-3 px-4">{{ item.eni }}</td>
            <td class="py-3 px-4">{{ item.boyi }}</td>
            <td class="py-3 px-4">{{ formatNumber(item.soni) }}</td>
            <td class="py-3 px-4">{{ formatNumber(item.qoldiq) }}</td>
            <td class="py-3 px-4">{{ formatNumber(item.jami) }}</td>
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

      <!-- Mobile Cards -->
      <div class="md:hidden space-y-4 p-4">
        <div
          v-for="(item, index) in tableData"
          :key="item.id"
          class="border rounded-lg p-4 hover:bg-gray-50"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-medium">{{ index + 1 }}. {{ item.tovar }}</h3>
              <p class="text-sm text-gray-500">{{ item.omborxona }}</p>
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
import { ref } from "vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-vue-next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const tableData = ref([
  {
    id: 1,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 1200,
    qoldiq: 1000,
    jami: 4400,
    valyuta: "UZS",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 120000000,
  },
  {
    id: 2,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 400,
    qoldiq: 150,
    jami: 1123,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 40000000,
  },
  {
    id: 3,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 122,
    qoldiq: 90,
    jami: 500,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 12200000,
  },
  {
    id: 4,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 1400,
    qoldiq: 1223,
    jami: 4444,
    valyuta: "UZS",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 140000000,
  },
  {
    id: 5,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 330,
    qoldiq: 100,
    jami: 456,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 33000000,
  },
  {
    id: 6,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 133,
    qoldiq: 98,
    jami: 200,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 13300000,
  },
  {
    id: 7,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 133,
    qoldiq: 10,
    jami: 322,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 13300000,
  },
  {
    id: 8,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 330,
    qoldiq: 122,
    jami: 1000,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 33000000,
  },
  {
    id: 9,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 1200,
    qoldiq: 500,
    jami: 1222,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 120000000,
  },
  {
    id: 10,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 330,
    qoldiq: 111,
    jami: 456,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 33000000,
  },
  {
    id: 11,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 1200,
    qoldiq: 788,
    jami: 9000,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 120000000,
  },
  {
    id: 12,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 133,
    qoldiq: 10,
    jami: 456,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 13300000,
  },
  {
    id: 13,
    omborxona: "Omborxona - 1",
    tovar: "REFLEX GREY GILAMLARI",
    code: 999,
    eni: "400 sm",
    boyi: "1200 sm",
    soni: 330,
    qoldiq: 223,
    jami: 1112,
    valyuta: "USD",
    narx: 100000,
    sotuvNarxi: 100000,
    umumiyNarx: 33000000,
  },
]);

const formatNumber = (num) => {
  return num.toLocaleString("fr-FR");
};

const formatCurrency = (amount, currency) => {
  return `${amount.toLocaleString("fr-FR")} ${currency}`;
};

const currencyClass = (currency) => {
  return currency === "UZS"
    ? "bg-blue-100 text-blue-800"
    : "bg-green-100 text-green-800";
};
</script>
