<script lang="ts" setup>
import type { PropType } from "vue";
import type PictureData from "@/models/data/pictureData";
import { computed } from "vue";
import UnitTutorialImage from "@/components/tutorial/TutorialImage/UnitTutorialImage/UnitTutorialImage.vue";
import MultipleTutorialImage from "@/components/tutorial/TutorialImage/MultipleTutorialImage/MultipleTutorialImage.vue";

const innerWidth = computed(() => (window.innerWidth * 0.3).toString());

defineProps({
  pictures: {
    type: Object as PropType<readonly PictureData[]>,
    required: true,
  },
});
</script>

<template>
  <div class="tutorial-images">
    <div v-if="pictures.length === 0"></div>
    <div v-else-if="pictures.length === 1">
      <UnitTutorialImage :picture="pictures[0]" />
    </div>
    <div class="pictures-container" v-else>
      <MultipleTutorialImage :pictures="pictures" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  border-radius: 10px;
}
.tutorial-images {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & > .pictures-container {
    & > .window {
      & > .item {
        & > .image {
        }
      }
    }
  }
}
</style>
