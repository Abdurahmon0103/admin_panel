import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
interface DataItem {
  id: string;
  name: string;
  [key: string]: any;
}
export const useItemStore = defineStore("item", () => {
  const warehouses = ref<DataItem[] | []>([]);
  const contributors = ref<DataItem[] | []>([]);
  const users = ref<DataItem[] | []>([]);
  const clients = ref<DataItem[] | []>([]);
  const category = ref<DataItem[] | []>([]);
  const sizes = ref<DataItem[] | []>([]);
  const currency = ref<DataItem[] | []>([]);
  const loadingStore = ref(false);

  const fetchItems = async () => {
    const token = localStorage.getItem("token");
    loadingStore.value = true;

    try {
      const [
        warehousesResponse,
        contributorsResponse,
        usersResponse,
        clientsResponse,
        categoryResponse,
        sizesResponse,
        currencyResponse,
      ] = await Promise.all([
        axios.get("/warehouse/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/contributor/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/user/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/client/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/category/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/size/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get("/currency/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      warehouses.value = warehousesResponse.data["data"];
      contributors.value = contributorsResponse.data["data"];
      users.value = usersResponse.data["data"];
      clients.value = clientsResponse.data["data"];
      category.value = categoryResponse.data["data"];
      sizes.value = sizesResponse.data["data"];
      currency.value = currencyResponse.data["data"];
      console.log(warehouses.value);
      console.log(contributors.value);
      console.log(users.value);
      console.log(clients.value);
      console.log(category.value);
      console.log(sizes.value);
      console.log(currency.value);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      loadingStore.value = false;
    }
  };

  return {
    warehouses,
    contributors,
    users,
    clients,
    loadingStore,
    fetchItems,
    category,
    sizes,
    currency,
  };
});
