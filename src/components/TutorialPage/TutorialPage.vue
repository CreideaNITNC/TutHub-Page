<script lang="ts" setup>
import type TutorialPageData from "@/models/data/tutorialPageData";
import type { PropType } from "vue";
import TutorialCommit from "@/components/TutorialCommit/TutorialCommit.vue";
import TutorialImages from "@/components/TutorialImages/TutorialImages.vue";
import { ref } from "vue";
import type PictureData from "@/models/data/pictureData";
import TutorialCodes from "@/components/TutorialCodes/TutorialCodes.vue";
import type SourceCodeData from "@/models/data/sourceCodeData";

const props = defineProps({
  page: {
    type: Object as PropType<TutorialPageData>,
    required: true,
  },
});

const pictures = ref<readonly PictureData[]>([]);
const codes = ref<readonly SourceCodeData[]>([]);
</script>

<template>
  <div class="tutorial-page">
    <div class="commits-container">
      <TutorialCommit
        :commits="page.commits"
        v-model:pictures="pictures"
        v-model:codes="codes"
      />
    </div>
    <div class="sources-container">
      <TutorialCodes :codes="codes" />
      <TutorialImages :pictures="pictures" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tutorial-page {
  width: 100vw;
  display: flex;

  & > .commits-container {
    border: 1px solid black;
    width: 40vw;
  }

  & > .sources-container {
    position: fixed;
    border: 1px solid black;
    width: 60vw;
    left: 40vw;
    top: 40vh;
  }
}
</style>
