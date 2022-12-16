<script lang="ts" setup>
import type { PropType } from "vue";
import type PictureData from "@/models/data/pictureData";
import { computed } from "vue";

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
      <img
        v-for="picture in pictures"
        :key="picture.filename"
        class="bg-white image"
        :width="innerWidth"
        :src="picture.src"
        :alt="picture.filename"
      />
    </div>
    <div class="pictures-container" v-else>
      <v-window class="window" show-arrows>
        <!--TODO: 後で自作する -->
        <v-window-item
          v-for="picture in pictures"
          class="item"
          :key="picture.filename"
        >
          <img
            :src="picture.src"
            :alt="picture.filename"
            class="bg-white image"
            :width="innerWidth"
          />
          <!--          <v-img class="bg-white image" width="500" cover :src="picture.src" />-->
        </v-window-item>
      </v-window>
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
