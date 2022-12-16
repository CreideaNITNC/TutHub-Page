<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useService } from "@/service/service";
import TutorialPage from "@/components/TutorialPage/TutorialPage.vue";

const router = useRouter();

const user = router.currentRoute.value.params["user"] as string;
const repository = router.currentRoute.value.params["repository"] as string;
const page = Number(router.currentRoute.value.params["page"]);

const service = useService();

const pageData = await service.loadData(user, repository, page);
</script>

<template>
  <div class="tutorial">
    <TutorialPage :page="pageData" />
  </div>
</template>

<style></style>
