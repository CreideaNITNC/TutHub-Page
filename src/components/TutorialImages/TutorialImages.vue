<script lang="ts" setup>
import type { PropType } from "vue";
import type PictureData from "@/models/data/pictureData";

const props = defineProps({
  pictures: {
    type: Object as PropType<readonly PictureData[]>,
    required: true,
  },
});
</script>

<template>
  <div>
    <div v-if="pictures.length === 0"></div>
    <div v-else-if="pictures.length === 1">
      <v-img
        v-for="picture in pictures"
        :key="picture.filename"
        class="bg-white"
        width="300"
        :aspect-ratio="16 / 9"
        :src="picture.src"
      ></v-img>
    </div>
    <div v-else>
      <v-window show-arrows width="300">
        <!--TODO: 後で自作する -->
        <v-window-item v-for="picture in pictures" :key="picture.filename">
          <v-img
            class="bg-white"
            width="300"
            :aspect-ratio="16 / 9"
            :src="picture.src"
          ></v-img>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>
