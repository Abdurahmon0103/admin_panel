<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
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
              <SelectItem value="apple"> Ta'minotch </SelectItem>
              <SelectItem value="banana"> Ta'minotch </SelectItem>
              <SelectItem value="blueberry"> Ta'minotch </SelectItem>
              <SelectItem value="grapes"> Ta'minotch </SelectItem>
              <SelectItem value="pineapple"> Ta'minotch </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div><Input type="email" placeholder="Email" /></div>
      <div><Input type="email" placeholder="Email" /></div>
      <div class="flex gap-4">
        <Button variant="outline"> Secondary </Button>
        <Button variant="outline"> Destructive </Button>
      </div>
      <div class="flex w-[1513px] justify-between">
        <div class="relative w-full max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div>
        <div>
          <Dialog>
            <DialogTrigger as-child>
              <Button variant="destructive">+ Inventarizatsiya</Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <div
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              >
                <div class="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6">
                  <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold">Inventarizatsiya</h2>
                    <Button
                      class="text-gray-500 hover:text-gray-700 text-xl"
                      variant="ghost"
                    >
                      &times;
                    </Button>
                  </div>

                  <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Standart size
                        <span class="text-red-500">*</span></label
                      >
                      <select class="w-full border rounded px-3 py-2">
                        <option disabled selected>Tanlang</option>
                      </select>
                    </div>

                    <!-- Boyi -->
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Boyi <span class="text-red-500">*</span></label
                      >
                      <input
                        type="text"
                        class="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <!-- Valyuta -->
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Valyuta <span class="text-red-500">*</span></label
                      >
                      <select class="w-full border rounded px-3 py-2">
                        <option disabled selected>Tanlang</option>
                      </select>
                    </div>

                    <!-- Ombor -->
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Ombor <span class="text-red-500">*</span></label
                      >
                      <select class="w-full border rounded px-3 py-2">
                        <option disabled selected>Tanlang</option>
                      </select>
                    </div>

                    <!-- Kategoriya -->
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Kategoriya <span class="text-red-500">*</span></label
                      >
                      <select class="w-full border rounded px-3 py-2">
                        <option disabled selected>Tanlang</option>
                      </select>
                    </div>

                    <!-- Miqdor -->
                    <div>
                      <label class="block text-sm font-medium mb-1"
                        >Miqdor <span class="text-red-500">*</span></label
                      >
                      <Input
                        type="number"
                        class="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <Label class="block text-sm font-medium mb-1"
                        >Tan narxi</Label
                      >
                      <input
                        type="text"
                        class="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <Label class="block text-sm font-medium mb-1"
                        >Sotuv narxi</Label
                      >
                      <input
                        type="text"
                        class="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium mb-1">Izoh</label>
                      <textarea
                        class="w-full border rounded px-3 py-2"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>

                  <div class="flex justify-end mt-6 space-x-2">
                    <Button variant="outline"> Yopish </Button>
                    <Button type="submit" variant="destructive">Saqlash</Button>
                  </div>
                </div>
              </div>
              <DialogFooter> </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-4 sm:p-6 lg:p-8">
      <div class="overflow-x-auto shadow-md rounded-lg mr-20 mt-5">
        <table class="w-full bg-white text-sm text-gray-700">
          <thead class="bg-gray-100 border-b border-gray-300">
            <tr>
              <th class="py-3 px-4 text-left font-semibold">№</th>
              <th class="py-3 px-4 text-left font-semibold">Omborxona</th>
              <th class="py-3 px-4 text-left font-semibold">Tovar</th>
              <th class="py-3 px-4 text-left font-semibold">Code</th>
              <th class="py-3 px-4 text-left font-semibold">Eni</th>
              <th class="py-3 px-4 text-left font-semibold">Bo'yi</th>
              <th class="py-3 px-4 text-left font-semibold">Soni</th>
              <th class="py-3 px-4 text-left font-semibold">Qoldiq</th>
              <th class="py-3 px-4 text-left font-semibold">Jami</th>
              <th class="py-3 px-4 text-left font-semibold">Valyuta</th>
              <th class="py-3 px-4 text-left font-semibold">Narx</th>
              <th class="py-3 px-4 text-left font-semibold">Sotuv narxi</th>
              <th class="py-3 px-4 text-left font-semibold">Umumiy Narx</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(item, index) in tableData"
              :key="item.id"
              class="hover:bg-gray-50"
            >
              <td class="py-3 px-4">{{ index + 1 }}</td>
              <td class="py-3 px-4">{{ item.omborxona }}</td>
              <td class="py-3 px-4 font-medium text-gray-900">
                {{ item.tovar }}
              </td>
              <td class="py-3 px-4">{{ item.code }}</td>
              <td class="py-3 px-4">{{ item.eni }}</td>
              <td class="py-3 px-4">{{ item.boyi }}</td>
              <td class="py-3 px-4">{{ item.soni.toLocaleString("fr-FR") }}</td>
              <td class="py-3 px-4">
                {{ item.qoldiq.toLocaleString("fr-FR") }}
              </td>
              <td class="py-3 px-4">{{ item.jami.toLocaleString("fr-FR") }}</td>
              <td class="py-3 px-4">
                <span
                  :class="
                    item.valyuta === 'UZS'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  "
                  class="px-2 py-1 text-xs font-semibold rounded-full"
                >
                  {{ item.valyuta }}
                </span>
              </td>
              <td class="py-3 px-4">
                {{ item.narx.toLocaleString("fr-FR") }}
                {{ item.valyuta === "UZS" ? "UZS" : "" }}
              </td>
              <td class="py-3 px-4">
                {{ item.sotuvNarxi.toLocaleString("fr-FR") }}
                {{ item.valyuta === "UZS" ? "UZS" : "" }}
              </td>
              <td class="py-3 px-4 font-bold text-gray-900">
                {{ item.umumiyNarx.toLocaleString("fr-FR") }}
                {{ item.valyuta === "UZS" ? "UZS" : "" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import { Label } from "reka-ui";
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
</script>

<style scoped></style>
