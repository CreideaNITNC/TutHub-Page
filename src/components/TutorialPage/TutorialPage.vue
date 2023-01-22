<script lang="ts" setup>
import type TutorialPageData from "@/models/data/tutorialPageData";
import type { PropType } from "vue";
import TutorialCommit from "@/components/TutorialCommit/TutorialCommit.vue";
import { ref } from "vue";
import type PictureData from "@/models/data/pictureData";
import TutorialCodes from "@/components/TutorialCodes/TutorialCodes.vue";
import type SourceCodeData from "@/models/data/sourceCodeData";
import TutorialImage from "@/components/tutorial/TutorialImage/TutorialImage.vue";

defineProps({
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
    <header class="header">
      <h1 class="title">{{ page.repositoryName }}</h1>
    </header>
    <div class="content-container">
      <div class="commits-container">
        <TutorialCommit
          :commits="page.commits"
          v-model:pictures="pictures"
          v-model:codes="codes"
        />
      </div>
      <div class="sources-container">
        <TutorialCodes :codes="codes" />
      </div>
      <div class="pictures-container">
        <TutorialImage :pictures="pictures" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.tutorial-page {
  width: 100vw;
  background-color: $backgroundColor;
  padding: {
    top: 20vh;
    bottom: 40vh;
  }

  & > .header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: $partColor;
    display: block;
    width: 100vw;
    height: 10vh;
    padding: 2vh;

    & > .title {
      color: white;
    }
  }

  & > .content-container {
    width: 100vw;
    padding: {
      top: 10vh;
      left: 5vw;
      right: 5vw;
    }

    & > .commits-container {
      width: 20vw;
    }

    & > .sources-container {
      position: fixed;
      width: 30vw;
      height: 80vh;
      left: 33vw;
      top: 12vh;
    }

    & > .pictures-container {
      position: fixed;
      //border: 1px solid blue;
      width: 30vw;
      height: 70vh;
      left: 65vw;
      top: 10vw;
      & > .pictures {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
