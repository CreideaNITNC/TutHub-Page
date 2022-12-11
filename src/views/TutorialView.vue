<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useService } from "@/service/service";

const router = useRouter();

const user = router.currentRoute.value.params["user"] as string;
const repository = router.currentRoute.value.params["repository"] as string;

const service = useService();

const page = await service.loadData();
console.log(page);
</script>

<template>
  <div class="tutorial">
    <h1>Tutorial page</h1>
    <p>{{ user }}</p>
    <p>{{ repository }}</p>
  </div>
</template>

<style></style>
