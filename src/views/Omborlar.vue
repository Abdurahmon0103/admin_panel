<template>
  <div class="max-w-screen flex flex-col gap-6">
    <div class="flex justify-between items-center">
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Dialog v-model:open="isDialogOpen">
        <DialogTrigger as-child>
          <Button variant="destructive">+ Ombor</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <div>
              <Alert variant="destructive" v-if="error">
                <AlertCircle class="w-4 h-4" />
                <AlertTitle>{{ error }}</AlertTitle>
              </Alert>
            </div>
            <DialogTitle>Yangi Ombor qo‘shish</DialogTitle>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="flex items-center gap-4">
              <Label for="name" class="text-right">Nomi*</Label>
              <Input
                id="name"
                class="col-span-3 w-full shadow-md border-gray-300"
                v-model="warehouseName"
              />
            </div>
            <div class="flex items-center gap-8">
              <Label for="description" class="text-right">Izoh</Label>
              <textarea
                id="description"
                class="border border-gray-300 w-full shadow-md rounded-md px-2 py-2"
                v-model="warehouseDescription"
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="button" variant="outline">Yopish</Button>
            </DialogClose>
            <Button type="button" variant="destructive" @click="CreateWarehouse"
              >Saqlash</Button
            >
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <div v-if="loading" class="text-center text-gray-500">Yuklanmoqda...</div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3"
    >
      <div
        v-for="item in warehouses"
        :key="item.warehouseId || item.id"
        class="border border-gray-200 p-4 rounded-md shadow-sm bg-white max-w-full"
      >
        <div class="flex justify-between">
          <h3 class="text-lg font-semibold">{{ item.warehouseName }}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-40 flex flex-col gap-2 px-2 py-2">
              <Dialog>
                <DialogTrigger as-child>
                  <div
                    class="flex gap-2 cursor-pointer items-center hover:bg-indigo-500 hover:text-white transition-all duration-150 rounded-md px-1.5 py-1.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2 2 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92M12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6ZM29 13.25l-6-6l3.48-3.46l5.9 6Z"
                      />
                      <path fill="none" d="M0 0h36v36H0z" />
                    </svg>
                    <div>Taxrirlash</div>
                  </div>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                  <DialogHeader>
                    <div>
                      <Alert variant="destructive" v-if="error">
                        <AlertCircle class="w-4 h-4" />
                        <AlertTitle>{{ error }}</AlertTitle>
                      </Alert>
                    </div>
                    <DialogTitle>Omborni Taxrirlash</DialogTitle>
                  </DialogHeader>
                  <div class="grid gap-4 py-4">
                    <div class="flex items-center gap-4">
                      <Label for="name" class="text-right">Nomi*</Label>
                      <Input
                        id="name"
                        class="col-span-3 w-full shadow-md border-gray-300"
                      />
                    </div>
                    <div class="flex items-center gap-8">
                      <Label for="description" class="text-right">Izoh</Label>
                      <textarea
                        id="description"
                        class="border border-gray-300 w-full shadow-md rounded-md px-2 py-2"
                      ></textarea>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose>
                      <Button type="button" variant="outline">Yopish</Button>
                    </DialogClose>
                    <Button type="button" variant="destructive">Saqlash</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <div
                class="flex text-red-500 gap-1 cursor-pointer items-center hover:bg-red-500 hover:text-white transition-all duration-150 rounded-md px-1.5 py-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M216 50h-42V40a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a6 6 0 0 0 0 12h10v146a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V62h10a6 6 0 0 0 0-12M94 40a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm100 168a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V62h132Zm-84-104v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0"
                  />
                </svg>
                O'chirish
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p class="text-sm text-gray-500 mt-1">
          {{ item.warehouseDescription || "Izoh yo‘q" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const warehouses = ref([]);
const warehouseName = ref("");
const warehouseDescription = ref("");
const isDialogOpen = ref(false);
const loading = ref(false);
const error = ref(null);
const router = useRouter();

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/warehouse/getall?limit=100", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    warehouses.value = Array.isArray(response.data)
      ? response.data
      : response.data.data;
  } catch (err) {
    if (err.response?.status === 401) router.push("/LogIn");
    error.value =
      err.response?.data?.message || "Ma’lumotlarni olishda xatolik.";
  } finally {
    loading.value = false;
  }
};

const CreateWarehouse = async () => {
  const token = localStorage.getItem("token");
  if (!warehouseName.value.trim()) {
    error.value = "Ombor nomi majburiy.";
    return;
  }
  try {
    await axios.post(
      "/warehouse/create",
      {
        warehouseName: warehouseName.value,
        warehouseDescription: warehouseDescription.value,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    warehouseName.value = "";
    warehouseDescription.value = "";
    isDialogOpen.value = false;
    await fetchData();
  } catch (err) {
    error.value = err.response?.data?.message || "Ombor yaratishda xatolik.";
  }
};

onMounted(fetchData);
import { AlertCircle } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
async function fetchFilteredData() {
  const token = localStorage.getItem("token");
  const data = {
    warehouse: filter_warehouse.value,
    date: value.value,
    contributor: filter_contributor.value,
    user: filter_user.value,
    client: filter_client.value,
    width: filter_width.value,
    height: filter_height.value,
  };
  console.log(data);
  try {
    const response = await axios.post("/report/getfiltered", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
    console.log("Data fetched successfully:", response.data);
  } catch (error) {
    console.log(error);
  }
}
</script>
