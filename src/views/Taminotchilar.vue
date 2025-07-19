```vue
<template>
  <div class="flex flex-col gap-4 p-4 md:p-6">
    <div class="w-full flex justify-between items-center">
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Qidiruv..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Dialog v-model:open="isCreateDialogOpen">
        <DialogTrigger as-child>
          <Button variant="destructive">+ Ombor</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <div v-if="createError" class="mb-2">
              <Alert variant="destructive">
                <AlertCircle class="w-4 h-4" />
                <AlertTitle>{{ createError }}</AlertTitle>
              </Alert>
            </div>
            <DialogTitle>Yangi Ombor qo'shish</DialogTitle>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="create-name" class="text-right">Nomi*</Label>
              <Input
                id="create-name"
                class="col-span-3"
                v-model="newWarehouse.name"
              />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="create-description" class="text-right">Izoh</Label>
              <textarea
                id="create-description"
                class="col-span-3 border rounded-md p-2"
                v-model="newWarehouse.description"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child
              ><Button type="button" variant="outline"
                >Yopish</Button
              ></DialogClose
            >
            <Button
              type="button"
              variant="destructive"
              @click="handleCreateWarehouse"
              >Saqlash</Button
            >
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div v-if="loading" class="text-center text-gray-500 py-10">
      Yuklanmoqda...
    </div>
    <div v-else-if="fetchError" class="text-center text-red-500 py-10">
      {{ fetchError }}
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="warehouse in warehouses"
        :key="warehouse.warehouseId"
        class="p-4 border rounded-lg shadow-sm bg-white"
      >
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-semibold">{{ warehouse.warehouseName }}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="h-8 w-8 p-0">
                <MoreVertical class="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-40">
              <DropdownMenuItem
                @click="openEditDialog(warehouse)"
                class="flex gap-2 cursor-pointer"
              >
                <Pencil class="w-4 h-4" />
                <span>Taxrirlash</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                @click="handleDeleteWarehouse(warehouse.warehouseId)"
                class="flex gap-2 cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600"
              >
                <Trash2 class="w-4 h-4" />
                <span>O'chirish</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p class="text-sm text-gray-500 mt-1">
          {{ warehouse.warehouseDescription || "Izoh yo‘q" }}
        </p>
      </div>
    </div>

    <Dialog v-if="editingWarehouse" v-model:open="isEditDialogOpen">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <div v-if="editError" class="mb-2">
            <Alert variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ editError }}</AlertTitle>
            </Alert>
          </div>
          <DialogTitle>Omborni Taxrirlash</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="edit-name" class="text-right">Nomi*</Label>
            <Input
              id="edit-name"
              class="col-span-3"
              v-model="editingWarehouse.warehouseName"
            />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="edit-description" class="text-right">Izoh</Label>
            <textarea
              id="edit-description"
              class="col-span-3 border rounded-md p-2"
              v-model="editingWarehouse.warehouseDescription"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose as-child
            ><Button type="button" variant="outline"
              >Yopish</Button
            ></DialogClose
          >
          <Button
            type="button"
            variant="destructive"
            @click="handleUpdateWarehouse"
            >Saqlash</Button
          >
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  MoreVertical,
  Pencil,
  Trash2,
  AlertCircle,
} from "lucide-vue-next";

const router = useRouter();
const warehouses = ref([]);
const loading = ref(false);
const fetchError = ref(null);
const createError = ref(null);
const editError = ref(null);

const isCreateDialogOpen = ref(false);
const isEditDialogOpen = ref(false);

const newWarehouse = ref({ name: "", description: "" });
const editingWarehouse = ref(null);

const fetchData = async () => {
  loading.value = true;
  fetchError.value = null;
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/warehouse/getall", {
      headers: { Authorization: `Bearer ${token}` },
    });
    warehouses.value = response.data.data || response.data;
  } catch (err) {
    if (err.response?.status === 401) router.push("/login");
    fetchError.value = "Ma'lumotlarni yuklashda xatolik yuz berdi.";
  } finally {
    loading.value = false;
  }
};

const handleCreateWarehouse = async () => {
  createError.value = null;
  if (!newWarehouse.value.name.trim()) {
    createError.value = "Ombor nomi kiritilishi shart.";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      "/warehouse/create",
      {
        warehouseName: newWarehouse.value.name,
        warehouseDescription: newWarehouse.value.description,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    isCreateDialogOpen.value = false;
    newWarehouse.value = { name: "", description: "" };
    await fetchData();
  } catch (err) {
    createError.value =
      err.response?.data?.message || "Ombor yaratishda xatolik.";
  }
};

const openEditDialog = (warehouse) => {
  editingWarehouse.value = { ...warehouse };
  isEditDialogOpen.value = true;
  editError.value = null;
};

const handleUpdateWarehouse = async () => {
  if (!editingWarehouse.value) return;
  editError.value = null;
  if (!editingWarehouse.value.warehouseName.trim()) {
    editError.value = "Ombor nomi kiritilishi shart.";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `/warehouse/update/${editingWarehouse.value.warehouseId}`,
      {
        warehouseName: editingWarehouse.value.warehouseName,
        warehouseDescription: editingWarehouse.value.warehouseDescription,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    isEditDialogOpen.value = false;
    await fetchData();
  } catch (err) {
    editError.value =
      err.response?.data?.message || "Omborni yangilashda xatolik.";
  }
};

const handleDeleteWarehouse = async (id) => {
  if (!confirm("Haqiqatan ham bu omborni o'chirmoqchimisiz?")) {
    return;
  }
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`/warehouse/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await fetchData();
  } catch (err) {
    alert(
      err.response?.data?.message || "Omborni o'chirishda xatolik yuz berdi."
    );
  }
};

onMounted(fetchData);
</script>

<style scoped></style>
```
