<template>
  <div class="flex flex-col gap-4 p-4 bg-gray-50 min-h-screen">
    <div class="w-full flex justify-between items-center">
      <div class="relative w-full max-w-sm">
        <Input id="search" type="text" placeholder="Qidiruv..." class="pl-10" />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-5 text-muted-foreground" />
        </span>
      </div>
      <Button variant="destructive">+ O'lchov</Button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div v-if="loading" class="col-span-full text-center text-gray-500 py-10">
        Yuklanmoqda...
      </div>

      <div
        v-else
        v-for="item in sizes"
        :key="item.sizeId"
        class="flex flex-col justify-between w-full h-full p-4 bg-white rounded-lg shadow transition-shadow hover:shadow-md"
      >
        <div>
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-3">
              <h3 class="text-xl font-bold text-gray-900">
                {{ parseFloat(item.currencyName) || "ef" }}
              </h3>
              <span
                v-if="item.currencyAmount"
                class="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              >
                # {{ item.currencyAmount }}
              </span>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <MoreVertical class="h-5 w-5" />
            </button>
          </div>

          <p class="text-sm text-gray-500">
            {{
              item.currencyDescription
                ? item.currencyDescription.trim()
                : "Narx kiritilmagan"
            }}
          </p>
        </div>
      </div>

      <div v-if="error" class="col-span-full">
        <Alert variant="destructive">
          <AlertCircle class="h-4 w-4" />
          <AlertTitle>{{ error }}</AlertTitle>
        </Alert>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Search, AlertCircle, MoreVertical } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const router = useRouter();
const loading = ref(false);
const error = ref(null);
const sizes = ref([]);

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/currency/getall?limit=100", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    sizes.value = Array.isArray(response.data)
      ? response.data
      : response.data.data;
  } catch (err) {
    if (err.response?.status === 401) {
      router.push("/LogIn");
    }
    error.value =
      err.response?.data?.message ||
      "Ma'lumotlarni yuklashda xatolik yuz berdi.";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchData);
</script>

<style scoped></style>
