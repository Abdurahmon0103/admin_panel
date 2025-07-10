<script setup lang="ts">
import { ref } from "vue";

// Toggle holatini saqlash
const isOn = ref(false);
</script>

<template>
  <Button
    @click="isOn = !isOn"
    :variant="isOn ? 'default' : 'outline'"
    class="w-32"
  >
    {{ isOn ? "Dark mode:   on" : "Dark mode:   off" }}
  </Button>
</template>
