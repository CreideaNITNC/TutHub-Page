<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useService } from "@/service/service";
import TutorialPage from "@/components/TutorialPage/TutorialPage.vue";

const router = useRouter();

const user = router.currentRoute.value.params["user"] as string;
const repository = router.currentRoute.value.params["repository"] as string;

const service = useService();

const page = await service.loadData();
console.log(page);
</script>

<template>
  <div class="tutorial">
    <TutorialPage :page="page" />
  </div>
</template>

<style></style>
