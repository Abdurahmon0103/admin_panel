<template>
  <div class="w-full flex flex-col gap-6">
    <!-- Top bar: Search va Ombor qo‘shish -->
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
            <DialogTitle>Omborxona qo'shish</DialogTitle>
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
            <Button
              type="button"
              variant="destructive"
              @click="CreateWarehouse"
            >
              Saqlash
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <!-- Omborxona ro'yxati -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="warehouse in warehouses"
        :key="warehouse.id"
        class="border border-gray-200 p-4 rounded-md shadow-sm bg-white"
      >
        <h3 class="text-lg font-semibold">{{ warehouse.warehouseName }}</h3>
        <p class="text-sm text-gray-500 mt-1">
          {{ warehouse.warehouseDescription || "Izoh yo‘q" }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
const fetchWarehouses = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("/warehouse", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    warehouses.value = res.data;
  } catch (err) {
    console.error("Omborlarni olishda xatolik:", err);
  }
};
const CreateWarehouse = async () => {
  const token = localStorage.getItem("token");

  if (!warehouseName.value.trim()) {
    alert("Ombor nomi bo‘sh bo‘lmasligi kerak");
    return;
  }

  const payload = {
    warehouseName: warehouseName.value,
    warehouseDescription: warehouseDescription.value,
  };
  try {
    const res = await axios.post(`/warehouse/create`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    warehouses.value.push(res.data);
    warehouseName.value = "";
    warehouseDescription.value = "";
    isDialogOpen.value = false;
  } catch (err) {
    console.error("Xatolik:", err);
    alert("Yaratishda xatolik yuz berdi");
  }
};
</script>
