<template>
  <div class="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-2">
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
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est"> Eastern Standard Time (EST) </SelectItem>
              <SelectItem value="cst"> Central Standard Time (CST) </SelectItem>
              <SelectItem value="mst">
                Mountain Standard Time (MST)
              </SelectItem>
              <SelectItem value="pst"> Pacific Standard Time (PST) </SelectItem>
              <SelectItem value="akst">
                Alaska Standard Time (AKST)
              </SelectItem>
              <SelectItem value="hst"> Hawaii Standard Time (HST) </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt"> Greenwich Mean Time (GMT) </SelectItem>
              <SelectItem value="cet"> Central European Time (CET) </SelectItem>
              <SelectItem value="eet"> Eastern European Time (EET) </SelectItem>
              <SelectItem value="west">
                Western European Summer Time (WEST)
              </SelectItem>
              <SelectItem value="cat"> Central Africa Time (CAT) </SelectItem>
              <SelectItem value="eat"> East Africa Time (EAT) </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk"> Moscow Time (MSK) </SelectItem>
              <SelectItem value="ist"> India Standard Time (IST) </SelectItem>
              <SelectItem value="cst_china">
                China Standard Time (CST)
              </SelectItem>
              <SelectItem value="jst"> Japan Standard Time (JST) </SelectItem>
              <SelectItem value="kst"> Korea Standard Time (KST) </SelectItem>
              <SelectItem value="ist_indonesia">
                Indonesia Central Standard Time (WITA)
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Australia & Pacific</SelectLabel>
              <SelectItem value="awst">
                Australian Western Standard Time (AWST)
              </SelectItem>
              <SelectItem value="acst">
                Australian Central Standard Time (ACST)
              </SelectItem>
              <SelectItem value="aest">
                Australian Eastern Standard Time (AEST)
              </SelectItem>
              <SelectItem value="nzst">
                New Zealand Standard Time (NZST)
              </SelectItem>
              <SelectItem value="fjt"> Fiji Time (FJT) </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>South America</SelectLabel>
              <SelectItem value="art"> Argentina Time (ART) </SelectItem>
              <SelectItem value="bot"> Bolivia Time (BOT) </SelectItem>
              <SelectItem value="brt"> Brasilia Time (BRT) </SelectItem>
              <SelectItem value="clt"> Chile Standard Time (CLT) </SelectItem>
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
      <div class="relative w-full">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Sotuvchi" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple"> Sotuvchi </SelectItem>
              <SelectItem value="banana"> Sotuvchi </SelectItem>
              <SelectItem value="blueberry"> Sotuvchi </SelectItem>
              <SelectItem value="grapes"> Sotuvchi </SelectItem>
              <SelectItem value="pineapple"> Sotuvchi </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="relative w-full">
        <Select>
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Mijoz" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple"> Mijoz </SelectItem>
              <SelectItem value="banana"> Mijoz</SelectItem>
              <SelectItem value="blueberry"> Mijoz </SelectItem>
              <SelectItem value="grapes"> Mijoz </SelectItem>
              <SelectItem value="pineapple"> Mijoz</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    <!-- Action Buttons - Stacked on mobile -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <div class="flex flex-1 gap-4">
        <input
          type="text"
          placeholder="Eni"
          class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Bo'yi"
          class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div class="flex flex-1 sm:flex-none gap-4">
        <button
          class="flex-1 sm:flex-none px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Saqlash
        </button>
        <button
          class="flex-1 sm:flex-none px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Yuklab olish
        </button>
        <button
          class="flex-1 sm:flex-none px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Tozalash
        </button>
      </div>
    </div>

    <!-- Responsive Table -->
    <div class="overflow-x-auto">
      <div class="min-w-full bg-white">
        <!-- Table Header - Hidden on mobile -->
        <table class="min-w-full hidden md:table border border-gray-200">
          <thead>
            <tr
              class="bg-gray-50 text-left text-sm text-gray-600 uppercase tracking-wider"
            >
              <th class="py-3 px-4 border-b">Ombor</th>
              <th class="py-3 px-4 border-b">Xodim</th>
              <th class="py-3 px-4 border-b">Taminotchi</th>
              <th class="py-3 px-4 border-b">Haridor</th>
              <th class="py-3 px-4 border-b">Tovar</th>
              <th class="py-3 px-4 border-b">Eni</th>
              <th class="py-3 px-4 border-b">Bo'yi</th>
              <th class="py-3 px-4 border-b">Miqdor</th>
              <th class="py-3 px-4 border-b">Nara</th>
              <th class="py-3 px-4 border-b">Umumiy Nara</th>
              <th class="py-3 px-4 border-b">Sana</th>
              <th class="py-3 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in tableData"
              :key="index"
              class="hover:bg-gray-50 border-b border-gray-200"
            >
              <td class="py-3 px-4">{{ row.ombor }}</td>
              <td class="py-3 px-4">{{ row.kodim }}</td>
              <td class="py-3 px-4">{{ row.taminotchi }}</td>
              <td class="py-3 px-4">{{ row.haridor }}</td>
              <td class="py-3 px-4">{{ row.tovar }}</td>
              <td class="py-3 px-4">{{ row.eni }}</td>
              <td class="py-3 px-4">{{ row.boyi }}</td>
              <td class="py-3 px-4 flex items-center">
                <span
                  :class="{
                    'text-green-500': row.miqdor_change > 0,
                    'text-red-500': row.miqdor_change < 0,
                  }"
                >
                  {{
                    row.miqdor_change > 0
                      ? "▲"
                      : row.miqdor_change < 0
                      ? "▼"
                      : ""
                  }}
                </span>
                {{ row.miqdor }}
              </td>
              <td class="py-3 px-4">{{ row.nara }}</td>
              <td class="py-3 px-4">{{ row.umumiy_nara }}</td>
              <td class="py-3 px-4">{{ row.sana }}</td>
              <td class="py-3 px-4">
                <button class="text-gray-500 hover:text-gray-700">⋮</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="space-y-4 md:hidden">
          <div
            v-for="(row, index) in tableData"
            :key="index"
            class="p-4 border border-gray-200 rounded-lg"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-medium text-gray-900">{{ row.tovar }}</h3>
                <p class="text-sm text-gray-500">{{ row.ombor }}</p>
              </div>
              <button class="text-gray-500 hover:text-gray-700">⋮</button>
            </div>

            <div class="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p class="text-gray-500">Xodim</p>
                <p>{{ row.kodim }}</p>
              </div>
              <div>
                <p class="text-gray-500">Taminotchi</p>
                <p>{{ row.taminotchi }}</p>
              </div>
              <div>
                <p class="text-gray-500">Haridor</p>
                <p>{{ row.haridor }}</p>
              </div>
              <div>
                <p class="text-gray-500">Miqdor</p>
                <p class="flex items-center">
                  <span
                    :class="{
                      'text-green-500': row.miqdor_change > 0,
                      'text-red-500': row.miqdor_change < 0,
                    }"
                  >
                    {{
                      row.miqdor_change > 0
                        ? "▲"
                        : row.miqdor_change < 0
                        ? "▼"
                        : ""
                    }}
                  </span>
                  {{ row.miqdor }}
                </p>
              </div>
              <div>
                <p class="text-gray-500">Eni/Bo'yi</p>
                <p>{{ row.eni }} / {{ row.boyi }}</p>
              </div>
              <div>
                <p class="text-gray-500">Nara</p>
                <p>{{ row.nara }}</p>
              </div>
              <div>
                <p class="text-gray-500">Umumiy Nara</p>
                <p>{{ row.umumiy_nara }}</p>
              </div>
              <div>
                <p class="text-gray-500">Sana</p>
                <p>{{ row.sana }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      v-slot="{ page }"
      :items-per-page="10"
      :total="30"
      :default-page="1"
    >
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />

        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>

        <PaginationEllipsis :index="4" />

        <PaginationNext />
      </PaginationContent>
    </Pagination>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tableData = ref([
  // ... (same as your original data)
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "1 200",
    miqdor_change: 100,
    nara: "100 000 UZS",
    umumiy_nara: "40 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "122",
    miqdor_change: -100,
    nara: "100 000 UZS",
    umumiy_nara: "12 200 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "1 400",
    miqdor_change: 100,
    nara: "100 000 UZS",
    umumiy_nara: "140 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "330",
    miqdor_change: 0,
    nara: "100 000 UZS",
    umumiy_nara: "33 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "133",
    miqdor_change: -100,
    nara: "100 000 UZS",
    umumiy_nara: "13 300 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "133",
    miqdor_change: 100,
    nara: "100 000 UZS",
    umumiy_nara: "13 300 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "330",
    miqdor_change: 0,
    nara: "100 000 UZS",
    umumiy_nara: "33 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "1 200",
    miqdor_change: 100,
    nara: "100 000 UZS",
    umumiy_nara: "120 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "330",
    miqdor_change: 0,
    nara: "100 000 UZS",
    umumiy_nara: "33 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "1 200",
    miqdor_change: -100,
    nara: "100 000 UZS",
    umumiy_nara: "120 000 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "133",
    miqdor_change: 100,
    nara: "100 000 UZS",
    umumiy_nara: "13 300 000 UZS",
    sana: "24.02.2023",
  },
  {
    ombor: "Omborxona - 1",
    kodim: "Husan Kamolov",
    taminotchi: "Taminot - 1",
    haridor: "Mahmud Namazov",
    tovar: "REFLEX GREY Gilamlari",
    eni: "400 Metr",
    boyi: "1200 Metr",
    miqdor: "330",
    miqdor_change: 0,
    nara: "100 000 UZS",
    umumiy_nara: "33 000 000 UZS",
    sana: "24.02.2023",
  },
]);
</script>

<style scoped></style>
