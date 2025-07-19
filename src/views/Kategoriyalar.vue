<template>
  <div class="max-w-screen flex flex-col gap-6 p-4 md:p-6">
    <div class="flex justify-between items-center">
      <div class="relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Qidiruv..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
      <Dialog v-model:open="isDialogOpen">
        <DialogTrigger as-child>
          <Button variant="destructive">+ Kategoriya</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <div v-if="creationError" class="mb-4">
              <Alert variant="destructive">
                <AlertCircle class="w-4 h-4" />
                <AlertTitle>{{ creationError }}</AlertTitle>
              </Alert>
            </div>
            <DialogTitle>Yangi Kategoriya qo'shish</DialogTitle>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Nomi*</Label>
              <Input
                id="name"
                class="col-span-3 shadow-sm border-gray-300"
                v-model="categoryName"
              />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="description" class="text-right">Izoh</Label>
              <textarea
                id="description"
                class="col-span-3 border border-gray-300 w-full shadow-sm rounded-md px-2 py-2"
                v-model="categoryDescription"
                rows="3"
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose as-child>
              <Button type="button" variant="outline">Yopish</Button>
            </DialogClose>
            <Button type="button" variant="destructive" @click="createCategory">
              Saqlash
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div v-if="loading" class="text-center text-gray-500 py-10">
      Yuklanmoqda...
    </div>
    <div
      v-else-if="categories.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="item in categories"
        :key="item.categoryId"
        class="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 class="text-base font-semibold mb-2">
          {{ item.categoryName || "Nomsiz kategoriya" }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ item.categoryDescription || "Izoh mavjud emas" }}
        </p>
      </div>
    </div>
    <div v-else-if="!error" class="text-center text-gray-500 py-10">
      Hozircha kategoriyalar mavjud emas.
    </div>

    <div v-if="error" class="mt-6">
      <Alert variant="destructive">
        <AlertCircle class="h-4 w-4" />
        <AlertTitle>{{ error }}</AlertTitle>
      </Alert>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Search } from "lucide-vue-next";

const categories = ref([]);
const categoryName = ref("");
const categoryDescription = ref("");
const isDialogOpen = ref(false);
const loading = ref(false);

const error = ref(null);
const creationError = ref(null);
const router = useRouter();

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/category/getall?limit=100", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    categories.value = Array.isArray(response.data)
      ? response.data
      : response.data.data || [];
  } catch (err) {
    if (err.response?.status === 401) router.push("/LogIn");
    error.value =
      err.response?.data?.message ||
      "Kategoriyalarni yuklashda xatolik yuz berdi.";
  } finally {
    loading.value = false;
  }
};

const createCategory = async () => {
  creationError.value = null;
  const token = localStorage.getItem("token");
  if (!categoryName.value.trim()) {
    creationError.value = "Kategoriya nomi to‘ldirilishi shart!";
    return;
  }
  try {
    await axios.post(
      "/category/create",
      {
        categoryName: categoryName.value,
        categoryDescription: categoryDescription.value,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    categoryName.value = "";
    categoryDescription.value = "";
    isDialogOpen.value = false;
    await fetchData();
  } catch (err) {
    creationError.value =
      err.response?.data?.message || "Kategoriya yaratishda xatolik yuz berdi.";
  }
};

onMounted(fetchData);
</script>

<style scoped></style>
