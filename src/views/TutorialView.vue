<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const user = router.currentRoute.value.params["user"];
const repository = router.currentRoute.value.params["repository"];
</script>

<template>
  <div class="tutorial">
    <h1>Tutorial page</h1>
    <p>{{ user }}</p>
    <p>{{ repository }}</p>
  </div>
</template>

<style></style>
