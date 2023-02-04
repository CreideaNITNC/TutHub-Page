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
      <div class="static-contents-container">
        <div class="sources-container" v-if="codes.length > 0">
          <TutorialCodes :codes="codes" />
        </div>
        <div class="picture-container" v-if="pictures.length > 0">
          <TutorialImage class="image" :pictures="pictures" />
        </div>
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

    & > .static-contents-container {
      position: fixed;
      right: 5vw;
      top: 15vh;

      width: 60vw;
      height: 80vh;

      display: flex;
      justify-content: space-around;
      align-items: center;

      & > .sources-container {
        height: 100%;
        width: 50%;
        flex-grow: 1;
        padding: 5px;
      }

      & > .picture-container {
        padding: 5px;
        height: 100%;
        width: 50%;
        flex-grow: 1;
      }
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
